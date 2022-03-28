import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Item } from "../../Types/app.type";
import ItemBox from "../ItemBox";

export interface ItemGridProps { 
    items: Item[];
};

const ItemGrid = (props: ItemGridProps) => {
    return (
        <Flex
            flexWrap='wrap'
            gap='5'
            justifyContent='center'
        >
            {
                props.items.map(i => 
                    <ItemBox
                        title={ i.title }
                        description={ i.description }
                        itemImage={ i.itemImage }
                        itemType={ i.itemType }
                    />
                )
            }

        </Flex>
    );
};

export default ItemGrid;