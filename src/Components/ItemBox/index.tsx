import { Flex } from "@chakra-ui/react";
import React from "react";
import { getThemeBorderColour } from "../../Shared/itemTypeService";
import { ItemTypes } from "../../Types/app.type";
import DescriptionRenderer from "../DescriptionRenderer";
import ItemBoxHeader from "../ItemBoxHeader";
import ItemIcon from "../ItemIcon";

export interface ItemBoxProps {
    itemImage: string;
    itemType: ItemTypes['type'];
    title: string;
    description: string;
};

const ItemBox = (props: ItemBoxProps) => {
    return (
        <Flex
            bg='shared.backgroundColour'
            color='shared.textColour'
            width='350px'
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