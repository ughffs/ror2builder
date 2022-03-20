import { Box, Flex } from "@chakra-ui/react";

export interface ItemBoxProps {
    itemType: ItemTypes['type']
};

export interface ItemTypes {
    type: 'common' | 'uncommon'
};

const ItemBox = (props: ItemBoxProps) => {
    let content;

    if (props.itemType === 'common')
    {
        content = 'We are common'
    };

    return (
        <Flex
            bg='tomato'
            flex='1'
        >
            { content }
        </Flex>
    );
};

export default ItemBox;