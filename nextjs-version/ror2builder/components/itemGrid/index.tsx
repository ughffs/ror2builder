import { Flex } from "@chakra-ui/react";
import { Item } from "../../types/app.type";
import ItemBox from "../itemBox";

export interface ItemGridProps { 
    items: Item[]
    onItemClick: (item: Item) => void
};

const ItemGrid = (props: ItemGridProps) => {

    const handleOnItemClick = (item: Item) => {
        props.onItemClick(item);
    }

    return (
        <Flex
            flexWrap='wrap'
            gap='5'
            justifyContent='center'
            flex='1'
        >
            {
                props.items.map(i => 
                    <ItemBox
                        key={ i.id }
                        title={ i.title }
                        description={ i.description }
                        itemImage={ i.image }
                        itemType={ i.type }
                        onClick={() => handleOnItemClick(i)}
                    />
                )
            }

        </Flex>
    );
};

export default ItemGrid;