import { Flex } from "@chakra-ui/react";
import React from "react";
import { getThemeBorderColour } from "../../shared/itemTypeService";
import { ItemDisplayModel, ItemTypes } from "../../types/app.type";
import DescriptionRenderer from "../descriptionRenderer";
import ItemBoxHeader from "../itemBoxHeader";
import ItemIcon from "../itemIcon";

export interface ItemBoxProps {
    itemModel: ItemDisplayModel;
    onClick: () => void;
};

const ItemBox = (props: ItemBoxProps) => {

    const itemImage = props.itemModel.item.image;
    const stackCount = props.itemModel.stackCount;

    return (
        <Flex
            position='relative'
            onClick={props.onClick}  
            cursor='pointer'
            userSelect='none'
        >
            <ItemIcon image={ itemImage } />
            <Flex
                position='absolute'
                top='2px'
                left='5px'
            >
                { stackCount > 1 ? stackCount + 'x' : null }
            </Flex>
        </Flex>
    );
};

export default ItemBox;