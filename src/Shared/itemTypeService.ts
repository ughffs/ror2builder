import { ItemTypes } from "../Types/app.type";

export const getThemeFontColour = (value: ItemTypes['type']) : string => {
    return `${ value }.textColour`;
};

export const getThemeBackgroundColour = (value: ItemTypes['type']) : string => {
    return `${ value }.backgroundColour`
};

export const getThemeBorderColour = (value: ItemTypes['type']) : string => {
    return `${ value }.borderColour`
};