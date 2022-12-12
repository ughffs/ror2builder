import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { Flex } from "@chakra-ui/react";
import SideMenu from "../sideMenu/sideMenu";
import ItemIcon from "../itemIcon";

export type LayoutProps = {
    children?: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Item builder for Risk of Rain 2!"
                />
            </Head>
            <Flex
                justifyContent='center'
                alignItems='center'
            >
                <Image 
                    src='/images/ror2.png' 
                    alt="Risk of Rain 2 Logo" 
                    height={50}
                    width={50}
                />
            </Flex>
            <Flex justifyContent='center'>
                <Flex width='1000px' gap='20px' paddingTop='20px'>
                    <Flex>
                        <SideMenu />
                    </Flex>
                    <Flex flex='1'>
                        <main>{props.children}</main>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Layout;
