import { Box } from "@chakra-ui/react";
import Image from 'next/image';

export interface ItemIconProps {
    image: string;
};

const ItemIcon = (props: ItemIconProps) => {
    return (
        <Box
            height='70px'
            width='70px'
        >
            <Image height={70} width={70} src={props.image} alt={"ror2ItemIcon"} />
        </Box>
    );
};

export default ItemIcon;