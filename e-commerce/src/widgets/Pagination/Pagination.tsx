import {Pagination as MaterialPaginatio, PaginationProps as MaterialPaginationProps, PaginationItem, PaginationRenderItemParams} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateQueryParam } from "../../store/filters/filtersSlice";

interface PaginationProps extends MaterialPaginationProps{}

const Pagination: React.FC<PaginationProps> = (props) => {

    const dispatch = useDispatch();

    const changePageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(updateQueryParam({key: 'page', value: page.toString() }))
    }

    return (<MaterialPaginatio
    {...props}
    onChange={(event: React.ChangeEvent<unknown>, page: number) => changePageHandler(event, page)}
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