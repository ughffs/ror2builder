import { LinkIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Toast, Tooltip, useToast } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BuildGrid from "../components/buildGrid";
import ItemGrid from "../components/itemGrid";
import Layout from "../components/layout/layout"
import SearchForm from "../components/searchForm/searchForm";
import { generateBuildLink } from "../shared/buildService";
import GetItems from "../shared/itemService";
import { Build, Item, ItemDisplayModel } from "../types/app.type";

const Builder = () => {
    const [items, setItems] = useState<Item[]>(GetItems());
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);
    const [selectedItems, setSelectedItems] = useState<ItemDisplayModel[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const router = useRouter();
    const toast = useToast();

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

    const createShareLink = () => {
        // Since we do not currently have build groups implemented yet, we can
        // hard code this part. 
        const build: Build = {
            buildGroups: [
                {
                    heading: 'Build',
                    items: selectedItems
                }
            ]
        }

        const link = generateBuildLink(build);
        navigator.clipboard.writeText(link);

        toast({
            title: 'Link copied to clipboard',
            status: 'success',
            duration: 5000,
            position: 'top-right'
        })
    }

    return (
        <Layout>
            <Head>
                <title>Builder Engine</title>
            </Head>
            <Flex height='calc(100vh - 80px)'  paddingBottom='5px' flexDirection='column' gap='10px'>
                <BuildGrid items={selectedItems} onItemClick={removeItemFromBuildGrid}/>
                <Flex justifyContent='right'>
                    <Tooltip label='Copy shareable build link'>
                        <IconButton icon={<LinkIcon />} onClick={createShareLink} aria-label={"Share build"} />
                    </Tooltip>
                </Flex>
                <Flex justifyContent='center'>
                    <SearchForm onTextChange={handleSearchTermChange} isLoading={false}/>
                </Flex>
                <Flex minWidth='1000px' overflowY='auto' padding='2px'>
                    <ItemGrid items={filteredItems} onItemClick={addItemToBuildGrid}/>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default Builder;