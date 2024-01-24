import styles from "./SearchInput.module.css"

import { Box } from "@mui/material";
import { Button, Input } from "../../ui";
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import { updateQueryParam } from "../../store/filters/filtersSlice";
import { useDispatch } from "react-redux";


interface SearchInputProps {

}

const SearchInput: React.FC<SearchInputProps> = (props)  => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    const dispatch = useDispatch();

    const serachTermHandler = (term: string) => {
        dispatch(updateQueryParam({key: 'searchTerm', value: term}))
    };

    return (
        <Box 
        sx={{display: "flex", flexGrow: 1}}
        {...props}>
            <Input
            className={styles.input}
            sx={{width: "100%"}}
            placeholder="Поиск"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setSearchTerm(event.target.value)}}/>
            <Button 
            sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
            className={styles.searchButton}
            onClick={() => {serachTermHandler(searchTerm)}}>
                <SearchIcon/>
            </Button>
        </Box>
    )
}

export default SearchInput;