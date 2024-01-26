import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { updateQueryParam } from '../../store/filters/filtersSlice';

interface SortFilterProps {}
 
const SortFilter: React.FC<SortFilterProps> = () => {

    const dispatch = useDispatch();
    const [filter, setFilter] = useState("Newest");

    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value);
        dispatch(updateQueryParam({key: 'sort', value: event.target.value }))
    };

    return ( 
        <FormControl variant="standard" sx={{
          minWidth: '200px',
          color: "white",
         }}>
        <InputLabel id="sortLabel" sx={{color: "white"}}>Sort</InputLabel>
        <Select
          labelId="sortLabel"
          id="sortSelect"
          value={filter}
          onChange={handleChange}
          label="Filter"
          defaultValue={'newest'}
          sx={{
            color: "white",
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(228, 219, 233, 0.25)',
            },
          '.MuiSvgIcon-root ': {
            fill: "white !important",
          }}}

        >
          <MenuItem value={'high-price'}>High price</MenuItem>
          <MenuItem value={'low-price'}>Low price</MenuItem>
          <MenuItem value={'oldest'}>Oldest</MenuItem>
          <MenuItem value={'newest '}>Newest</MenuItem>
        </Select>
      </FormControl>
    );
}
 
export default SortFilter;