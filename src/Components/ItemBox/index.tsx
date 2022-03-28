import { Flex } from "@chakra-ui/react";
import React from "react";
import { getThemeBorderColour } from "../../Shared/itemTypeService";
import DescriptionRenderer from "../DescriptionRenderer";
import ItemBoxHeader from "../ItemBoxHeader";
import ItemIcon from "../ItemIcon";

export interface ItemBoxProps {
    itemImage: string;
    itemType: ItemTypes['type'];
    title: string;
    description: string;
};

export interface ItemTypes {
    type:   'common' | 
            'uncommon' |
            'legendary' |
            'boss' | 
            'lunar' | 
            'equipment';
};

const ItemBox = (props: ItemBoxProps) => {
    return (
        <Flex
            bg='shared.backgroundColour'
            color='shared.textColour'
            flex='1'
            outline='1px solid'
            outlineColor={ getThemeBorderColour(props.itemType) }
            flexDirection='column'
        >
            <ItemBoxHeader itemType={ props.itemType }>
                { props.title }
            </ItemBoxHeader>
            <Flex padding='5px' gap='10px'>
                <ItemIcon image={ props.itemImage } />
                <Flex flex='1'>
                    <DescriptionRenderer content={ props.description }/>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ItemBox;