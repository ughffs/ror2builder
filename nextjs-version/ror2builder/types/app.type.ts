export interface Item {
    id: number,
    image: string;
    type: ItemTypes['type'];
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