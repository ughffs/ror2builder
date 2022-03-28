import { Box, Flex } from "@chakra-ui/react";
import './description_renderer.css';

export interface DescriptionRendererProps {
    content: string;
};

const DescriptionRenderer = (props: DescriptionRendererProps) => {

    let newDescription = props.content.replace(/\{([^}]+)\}/g, (x) => {
        let object = JSON.parse(x);
        
        let objType = object.type;
        let objText = object.value;

        console.log(objText);
        
        return "<span class='text-class-" + objType + "'>" + objText + "</span>";
    });

    return (
        <Box 
            flex='1' 
            dangerouslySetInnerHTML={{__html: newDescription}} 
        />
    );
};

export default DescriptionRenderer;