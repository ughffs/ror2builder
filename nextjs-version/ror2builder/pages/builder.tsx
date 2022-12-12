import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import ItemGrid from "../components/itemGrid";
import ItemIcon from "../components/itemIcon";
import Layout from "../components/layout/layout"
import GetItems from "../shared/itemService";
import { Item } from "../types/app.type";

const Builder = () => {
    const [items, setItems] = useState<Item[]>(GetItems());

    return (
        <Layout>
            <Flex height='calc(100vh - 80px)' overflowY='auto' paddingBottom='5px'>
                <ItemGrid items={items}/>
            </Flex>
        </Layout>
    )
}

export default Builder;