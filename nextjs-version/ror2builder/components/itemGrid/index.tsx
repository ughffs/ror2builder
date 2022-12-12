import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Item } from "../../types/app.type";
import ItemBox from "../itemBox";

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
                        itemImage={ i.image }
                        itemType={ i.type }
                    />
                )
            }

        </Flex>
    );
};

export default ItemGrid;