import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '../../theme';
import ItemBox, { ItemBoxProps } from './index';

export default {
    title: 'Custom/ItemBox',
    component: ItemBox,
    argTypes: {}
} as ComponentMeta<typeof ItemBox>;

const Template: ComponentStory<typeof ItemBox> = (args) => {
    return(
        <ChakraProvider theme={theme}>
            <Flex flex='1' bg='black' padding='20px'>
                <ItemBox  {...args } />
            </Flex>
        </ChakraProvider>
    )
};

export const Uncommon = Template.bind({});
Uncommon.args = {
    title: 'Test Title',
    description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
    itemType: 'uncommon',
    itemImage: '/images/uncommon/bandolier.png'
};

export const Common = Template.bind({});
Common.args = {
    title: 'Test Title',
    description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
    itemType: 'common',
    itemImage: '/images/uncommon/bandolier.png'
};

export const Legendary = Template.bind({});
Legendary.args = {
    title: 'Test Title',
    description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
    itemType: 'legendary',
    itemImage: '/images/uncommon/bandolier.png'
};

export const Boss = Template.bind({});
Boss.args = {
    title: 'Test Title',
    description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
    itemType: 'boss',
    itemImage: '/images/uncommon/bandolier.png'
};

export const Lunar = Template.bind({});
Lunar.args = {
    title: 'Test Title',
    description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
    itemType: 'lunar',
    itemImage: '/images/uncommon/bandolier.png'
};

export const Equipment = Template.bind({});
Equipment.args = {
    title: 'Test Title',
    description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
    itemType: 'equipment',
    itemImage: '/images/uncommon/bandolier.png'
};