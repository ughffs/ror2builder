import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';
import ItemIcon from './index';

export default {
    title: 'Custom/ItemIcon',
    component: ItemIcon,
    argTypes: {}
} as ComponentMeta<typeof ItemIcon>;

const Template: ComponentStory<typeof ItemIcon> = (args) => {
    return(
        <ChakraProvider theme={theme}>
            <ItemIcon { ...args } />
        </ChakraProvider>
    )
};

export const Main = Template.bind({});
Main.args = {
    image: '/images/uncommon/bandolier.png'
};