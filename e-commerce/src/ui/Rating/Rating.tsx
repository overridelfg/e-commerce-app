import { Rating as MaterialRating, RatingProps as MaterialRatingProps, styled } from "@mui/material";

interface RatingProps extends MaterialRatingProps {}
 

const StyledMaterialRating = styled(MaterialRating)(({ theme }) => ({
    '& .MuiRating-iconEmpty': {
      color: "white",
    }
  }));

const Rating: React.FC<RatingProps> = (props) => {

    return <StyledMaterialRating {...props}/>
}
 
export default Rating;