import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '../../theme';
import ItemBox, { ItemBoxProps } from './index';
import TestImage from '../../Assets/Images/Uncommon/bandolier.png';

export default {
    title: 'Custom/ItemBox',
    component: ItemBox,
    argTypes: {}
} as ComponentMeta<typeof ItemBox>;

const Template: ComponentStory<typeof ItemBox> = (args) => {
    return(
        <ChakraProvider theme={theme}>
            <Flex flex='1' bg='black' padding='20px'>
                <ItemBox { ...args } />
            </Flex>
        </ChakraProvider>
    )
};

export const Main = Template.bind({});
Main.args = {
    itemType: 'common',
    itemImage: TestImage
};