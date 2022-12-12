import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '../../theme';
import ItemGrid, { ItemGridProps } from './index';
import { Item } from '../../types/app.type';

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
        type: 'uncommon',
        image: '/images/uncommon/bandolier.png'
    },
    {
        title: 'Test Title',
        description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
        type: 'common',
        image: '/images/uncommon/bandolier.png'
    },
    {
        title: 'Test Title',
        description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
        type: 'legendary',
        image: '/images/uncommon/bandolier.png'
    },
    {
        title: 'Test Title',
        description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
        type: 'boss',
        image: '/images/uncommon/bandolier.png'
    },
    {
        title: 'Test Title',
        description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
        type: 'lunar',
        image: '/images/uncommon/bandolier.png'
    },
    {
        title: 'Test Title',
        description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
        type: 'equipment',
        image: '/images/uncommon/bandolier.png'
    }

]

export const Uncommon = Template.bind({});
Uncommon.args = {
    items
};
