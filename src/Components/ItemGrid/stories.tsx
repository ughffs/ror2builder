import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '../../theme';
import ItemGrid, { ItemGridProps } from './index';
import TestImage from '../../Assets/Images/Uncommon/bandolier.png';
import { Item } from '../../Types/app.type';

export default {
    title: 'Custom/ItemGrid',
    component: ItemGrid,
    argTypes: {}
} as ComponentMeta<typeof ItemGrid>;

const Template: ComponentStory<typeof ItemGrid> = (args) => {
    return(
        <ChakraProvider theme={theme}>
            <Flex flex='1' bg='black' padding='20px'>
                <ItemGrid  {...args } />
            </Flex>
        </ChakraProvider>
    )
};

const items: Item[] = [
    {
        title: 'Test Title',
        description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
        itemType: 'uncommon',
        itemImage: TestImage
    },
    {
        title: 'Test Title',
        description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
        itemType: 'common',
        itemImage: TestImage
    },
    {
        title: 'Test Title',
        description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
        itemType: 'legendary',
        itemImage: TestImage
    },
    {
        title: 'Test Title',
        description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
        itemType: 'boss',
        itemImage: TestImage
    },
    {
        title: 'Test Title',
        description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
        itemType: 'lunar',
        itemImage: TestImage
    },
    {
        title: 'Test Title',
        description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
        itemType: 'equipment',
        itemImage: TestImage
    }

]

export const Uncommon = Template.bind({});
Uncommon.args = {
    items
};
