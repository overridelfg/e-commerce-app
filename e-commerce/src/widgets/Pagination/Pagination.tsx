import styles from "./Pagination.module.css"

import {Pagination as MaterialPaginatio, PaginationProps as MaterialPaginationProps, PaginationItem, PaginationRenderItemParams} from "@mui/material";

interface PaginationProps extends MaterialPaginationProps{
   
}
 
  
const Pagination: React.FC<PaginationProps> = (props) => {

    return (<MaterialPaginatio
    {...props}
    renderItem = {(item: PaginationRenderItemParams) => {
        return <PaginationItem
        sx={{color: "white"}}
        {...item}
        />;
    }}
    />
    );
}
 
export default Pagination;