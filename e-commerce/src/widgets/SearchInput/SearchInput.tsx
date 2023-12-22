import styles from "./SearchInput.module.css"

import { Box } from "@mui/material";
import { Button, Input } from "../../ui";
import SearchIcon from '@mui/icons-material/Search';


const SearchInput: React.FC = (props)  => {
    return (
        <Box 
        sx={{display: "flex", flexGrow: 1}}
        {...props}>
            <Input
            className={styles.input}
            sx={{width: "100%"}}
            placeholder="Поиск"/>
            <Button 
            sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
            className={styles.searchButton}>
                <SearchIcon/>
            </Button>
        </Box>
    )
}

export default SearchInput;