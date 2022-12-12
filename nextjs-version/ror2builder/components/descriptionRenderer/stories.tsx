import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '../../theme';
import DescriptionRenderer, { DescriptionRendererProps } from './index';

export default {
    title: 'Custom/DescriptionRenderer',
    component: DescriptionRenderer,
    argTypes: {}
} as ComponentMeta<typeof DescriptionRenderer>;

const Template: ComponentStory<typeof DescriptionRenderer> = (args) => {
    return(
        <ChakraProvider theme={theme}>
            <Flex flex='1' padding='20px'>
                <DescriptionRenderer  {...args } />
            </Flex>
        </ChakraProvider>
    )
};

export const Uncommon = Template.bind({});
Uncommon.args = {
    content: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.'
};
