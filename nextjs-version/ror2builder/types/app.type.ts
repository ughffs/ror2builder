export interface Item {
    id: number,
    image: string;
    type: ItemTypes['type'];
    title: string;
    description: string;
};

export interface ItemDisplayModel {
    item: Item,
    stackCount: number
}

export interface ItemTypes {
    type:   'common' | 
            'uncommon' |
            'legendary' |
            'boss' | 
            'lunar' | 
            'equipment';
};

export interface BuildGroup {
    heading: string;
    items: ItemDisplayModel[]
}

export interface Build {
    buildGroups: BuildGroup[]
}

export interface Base64Build {
    base64JsonBuild: string
}