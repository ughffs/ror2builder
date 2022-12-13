import { Flex } from "@chakra-ui/react";
import React from "react";
import { getThemeBorderColour } from "../../shared/itemTypeService";
import { ItemTypes } from "../../types/app.type";
import DescriptionRenderer from "../descriptionRenderer";
import ItemBoxHeader from "../itemBoxHeader";
import ItemIcon from "../itemIcon";

export interface ItemBoxProps {
    itemImage: string;
    itemType: ItemTypes['type'];
    title: string;
    description: string;
    onClick: () => void;
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
            onClick={props.onClick}
            cursor='pointer'
            userSelect='none'
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