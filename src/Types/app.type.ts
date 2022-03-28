export interface Item {
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