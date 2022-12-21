import { Card, CardHeader, Flex } from "@chakra-ui/react";
import { BuildGroup } from "../../types/app.type";
import BuildGrid from "../buildGrid";

const BuildGroupDisplay = (buildGroup: BuildGroup) => {
    return(
        <Flex flexDirection='column' padding='5px' gap='10px'>
            <Card>
                <CardHeader>
                    { buildGroup.heading }
                </CardHeader>
                <BuildGrid items={buildGroup.items} onItemClick={() => {}}/>
            </Card>
        </Flex>
    )
}

export default BuildGroupDisplay;