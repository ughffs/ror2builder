import { Flex } from "@chakra-ui/react";

const SideMenu = () => {
    return (
        <Flex
            borderRadius='3px'
            border='1px solid'
            borderColor='grey'
            padding='10px'
            flexDirection='column'
        >
            <Flex minWidth='100px'>Item 1</Flex>
            <Flex>Item 2</Flex>
        </Flex>
    )
}

export default SideMenu;