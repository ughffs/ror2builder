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
        <Flex
            flexWrap='wrap'
            gap='5'
            justifyContent='center'
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
    );
};

export default ItemGrid;