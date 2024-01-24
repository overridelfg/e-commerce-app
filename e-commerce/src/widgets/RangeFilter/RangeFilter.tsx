import { Box, TextField } from "@mui/material";
import { Input } from "../../ui";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateQueryParam } from "../../store/filters/filtersSlice";
import { useDebounce } from "../../hooks/useDebounce";

interface RangeFilterProps {
    
}
 
const RangeFilter: React.FC<RangeFilterProps> = () => {

    const dispatch = useDispatch();
    const [minValue, setMinValue] = useState<string>('');
    const [maxValue, setMaxValue] = useState<string>('');
    const minDebounceValue = useDebounce<string>(minValue, 500);
    const maxDebounceValue = useDebounce<string>(maxValue, 500);

    useEffect(() => {
        dispatch(updateQueryParam({key: 'minPrice', value: minDebounceValue}))
    }, [minDebounceValue])

    useEffect(() => {
        dispatch(updateQueryParam({key: 'maxPrice', value: maxDebounceValue}))
    }, [maxDebounceValue])

    const minInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!isNaN(+event.target.value)) {
            setMinValue(event.target.value)
        }
    }

    const maxInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!isNaN(+event.target.value)) {
            setMaxValue(event.target.value)
        }
    }


    return <Box sx={{display: "flex", width: "100%", height: "30px", justifyContent: "space-between", gap: ".4rem"}}>
        <Input placeholder="From" 
        value={minValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {minInputHandler(event)}}/>
        <Box sx={{color: "white"}}>-</Box>
        <Input placeholder="To" 
        value={maxValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {maxInputHandler(event)}}/>
    </Box>
}
 
export default RangeFilter;