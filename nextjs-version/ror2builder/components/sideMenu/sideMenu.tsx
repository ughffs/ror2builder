import { Flex } from "@chakra-ui/react";

const SideMenu = () => {
    return (
        <Flex
            flexDirection='column'
            maxHeight='50vh'
        >
            <Flex 
                flexDirection='column'
                borderRadius='3px'
                border='1px solid'
                borderColor='grey'
                padding='10px'
                gap='10px'
            >
                <Flex minWidth='100px'>My Builds</Flex>
                <Flex>Other menu option</Flex>
            </Flex>
        </Flex>
    )
}

export default SideMenu;