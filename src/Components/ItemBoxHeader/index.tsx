import { Flex } from "@chakra-ui/react";
import { ItemTypes } from "../ItemBox";

const ItemBoxHeader = (props: ItemTypes) => {
    let fontColour: string = '#f8f8f8'; // Set default
    let primaryColour: string = '#b6b5b4'; // Set common as default
    

    switch (props.type) {
        case 'common':
            fontColour = '#333333';
            break;
        case 'uncommon':

        break;
        default:
            break;
    }

    if (props.type === 'uncommon')
    {
        primaryColour = '#235a11';
    }

    return (
        <Flex
            bg={ primaryColour }
            color={ fontColour }
            flex='1'
            outline='1px'
            outlineColor={ primaryColour }
            padding='3px'            
        >
            Test Header
        </Flex>
    );
};

export default ItemBoxHeader;