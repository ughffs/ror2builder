import { Flex } from "@chakra-ui/react";
import { Item, ItemDisplayModel } from "../../types/app.type";
import ItemBox from "../itemBox";
import ItemStack from "../itemStack";

export interface BuildGridProps { 
    items: ItemDisplayModel[]
    onItemClick: (item: Item) => void
};

const ItemGrid = (props: BuildGridProps) => {

    const handleOnItemClick = (item: Item) => {
        props.onItemClick(item);
    }

    return (
        props.items.length > 0
        ?
            <Flex
                flexWrap='wrap'
                gap='2'
                justifyContent='center'
                borderRadius='3px'
                border='1px solid'
                borderColor='#454545'
                padding='8px'
            >
                {
                    props.items.map(i => 
                        <ItemStack
                            key={ i.item.id }
                            itemModel={i}
                            onClick={() => handleOnItemClick(i.item)}
                        />
                    )
                }

            </Flex>
        :
            <Flex 
                flexWrap='wrap'
                gap='2'
                justifyContent='center'
                borderRadius='3px'
                border='1px solid'
                borderColor='#454545'
                padding='8px'
            >
                <Flex height='70px' justifyContent='center' alignItems='center'>
                    Search and select items to start a build
                </Flex>
            </Flex>
    );
};

export default ItemGrid;