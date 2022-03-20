import { Box, Flex } from "@chakra-ui/react";

export interface ItemBoxProps {
    itemType: ItemTypes['type']
};

export interface ItemTypes {
    type: 'common' | 'uncommon'
};

const ItemBox = (props: ItemBoxProps) => {
    let content: string = '';
    let borderColour: string = '#e3e3e3'; // Default to common colour

    if (props.itemType === 'common')
    {
        content = 'We are common'
        borderColour = '#e3e3e3'
    };

    return (
        <Flex
            bg='#3E4E5B'
            color='#F8F8F8'
            flex='1'
            border='1px'
            borderColor={ borderColour }
        >
            yeet my skeet biatch
        </Flex>
    );
};

export default ItemBox;