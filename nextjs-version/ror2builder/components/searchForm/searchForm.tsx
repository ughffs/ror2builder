import { Flex, Input } from "@chakra-ui/react";
import React from "react";

export interface SearchFormProps {
    onTextChange: (value: string) => void;
    isLoading: boolean;
}

const SearchForm = (props: SearchFormProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onTextChange(e.target.value);
    }

    return (
        <Flex>
            <Input
                placeholder='Item name...'
                onChange={ handleInputChange }
            />
        </Flex>
    )
}

export default SearchForm;