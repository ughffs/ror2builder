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
            <ItemGrid items={items}/>
            <ItemIcon image="/images/uncommon/bandolier.png" />
        </Layout>
    )
}

export default Builder;