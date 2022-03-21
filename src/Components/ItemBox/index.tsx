import { Flex } from "@chakra-ui/react";
import ItemBoxHeader from "../ItemBoxHeader";
import ItemIcon from "../ItemIcon";

export interface ItemBoxProps {
    itemImage: string;
    itemType: ItemTypes['type'];
};

export interface ItemTypes {
    type: 'common' | 'uncommon';
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
            outline='1px solid'
            outlineColor={ borderColour }
            flexDirection='column'
        >
            <ItemBoxHeader type={ props.itemType } />
            <Flex padding='5px' gap='10px'>
                <ItemIcon image={ props.itemImage } />
                <Flex flex='1'>
                    { content }
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ItemBox;