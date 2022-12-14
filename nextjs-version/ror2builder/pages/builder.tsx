import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import BuildGrid from "../components/buildGrid";
import ItemGrid from "../components/itemGrid";
import Layout from "../components/layout/layout"
import SearchForm from "../components/searchForm/searchForm";
import GetItems from "../shared/itemService";
import { Item, ItemDisplayModel } from "../types/app.type";

const Builder = () => {
    const [items, setItems] = useState<Item[]>(GetItems());
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);
    const [selectedItems, setSelectedItems] = useState<ItemDisplayModel[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const itemsMatchingCriteria = items
            .filter(item => item.title.toLocaleLowerCase().includes(searchTerm));
        
        setFilteredItems(itemsMatchingCriteria);

    }, [searchTerm])
    
    const addItemToBuildGrid = (item: Item) => {
        const existingItem = findExistingItem(item);
        if (existingItem) {
            increaseStackCount(existingItem);
            
            // Have to do this in order to update state? D:
            let newSelectedItemsArray = [...selectedItems]
            setSelectedItems(newSelectedItemsArray);
            return;
        }
        
        const newDisplayModel = createItemDisplayModel(item);
        const newArray = [...selectedItems, newDisplayModel]
        setSelectedItems(newArray);
    }
    
    const removeItemFromBuildGrid = (item: Item) => {
        const existingItem = findExistingItem(item);

        if(!existingItem) {
            return;
        }

        if (existingItem.stackCount <= 1) {
            // Remove item from array
            const indexToRemove = selectedItems.indexOf(existingItem)
            selectedItems.splice(indexToRemove, 1)

            let newSelectedItemsArray = [...selectedItems]
            setSelectedItems(newSelectedItemsArray)

            return;
        }

        reduceStackCount(existingItem);
        // again, have to do this in order to update state
        let newSelectedItemsArray = [...selectedItems]
        setSelectedItems(newSelectedItemsArray)
    }

    const findExistingItem = (item: Item): ItemDisplayModel | undefined =>
        selectedItems?.find(i => i.item.id == item.id);

    const createItemDisplayModel = (item: Item): ItemDisplayModel => {
        const newDisplayModel: ItemDisplayModel = {
            item,
            stackCount: 1
        }
        
        return newDisplayModel
    }

    const increaseStackCount = (itemModel: ItemDisplayModel) => 
        itemModel.stackCount++;

    const reduceStackCount = (itemModel: ItemDisplayModel) => 
        itemModel.stackCount--;

    const handleSearchTermChange = (value: string) => {
        setSearchTerm(value.toLowerCase());
    }

    return (
        <Layout>
            <Head>
                <title>Builder Engine</title>
            </Head>
            <Flex height='calc(100vh - 80px)'  paddingBottom='5px' flexDirection='column' gap='10px'>
                <BuildGrid items={selectedItems} onItemClick={removeItemFromBuildGrid} />
                <Flex justifyContent='center'>
                    <SearchForm onTextChange={handleSearchTermChange} isLoading={false}/>
                </Flex>
                <Flex minWidth='1000px'>
                    <ItemGrid items={filteredItems} onItemClick={addItemToBuildGrid}/>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default Builder;