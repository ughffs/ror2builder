import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../../theme';
import ItemBox, { ItemBoxProps } from './index';

export default {
    title: 'Custom/ItemBox',
    component: ItemBox,
    argTypes: {}
} as ComponentMeta<typeof ItemBox>;

const Template: ComponentStory<typeof ItemBox> = (args) => {
    return(
        <ChakraProvider theme={theme}>
            <ItemBox { ...args } />
        </ChakraProvider>
    )
};

const props: ItemBoxProps = {
    itemType: 'common'
};

export const Main = Template.bind({});
Main.args = {
    itemType: props.itemType
};