import { Flex, Image } from "@chakra-ui/react";
import React from "react";

export interface LayoutProps { 
    children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <Flex 
            bg='gray.800' 
            height='100vh' 
            flex='1' 
            flexDirection='column'
            color='shared.textColour'
        >
            <Flex 
                minHeight='50px' 
                justifyContent='center'
            >
                <Flex
                    width='50px'
                    height='50px'
                    backgroundSize='100%'
                    backgroundRepeat='no-repeat'
                    backgroundPosition='50%'
                >
                    <Image src='/images/ror2.png'/>
                </Flex>
            </Flex>
            <Flex 
                height='calc(100vh - 50px)' 
                flex='1'
            >
                { props.children }
            </Flex>
        </Flex>
    );
};

export default Layout;