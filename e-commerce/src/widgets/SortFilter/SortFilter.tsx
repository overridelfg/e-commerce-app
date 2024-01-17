import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import styled from '@emotion/styled';

interface SortFilterProps {
    setCurrentSort: (sort: string) => void;
}

export enum SortFilterEnum {
    HIGH_PRICE = 'high-price',
    LOW_PRICE = 'low-price'
}
 
const SortFilter: React.FC<SortFilterProps> = ({setCurrentSort}) => {

    const [filter, setFilter] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value);
        setCurrentSort(event.target.value);
    };

    
    return (  
        <FormControl variant="standard" sx={{maxWidth: "200px", color: "white"}}>
        <InputLabel id="sortLabel" sx={{color: "white"}}>Sort</InputLabel>
        <Select
          labelId="sortLabel"
          id="sortSelect"
          value={filter}
          onChange={handleChange}
          label="Filter"
          sx={{color: "white", '.MuiOutlinedInput-notchedOutline ': {
            color: 'white'
        },
          '.MuiSvgIcon-root ': {
            fill: "white !important",
          }}}

        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          <MenuItem value={'high-price'}>High price</MenuItem>
          <MenuItem value={'low-price'}>Low price</MenuItem>
          <MenuItem value={'oldest'}>Oldest</MenuItem>
          <MenuItem value={'newest'}>Newest</MenuItem>
        </Select>
      </FormControl>
    );
}
 
export default SortFilter;