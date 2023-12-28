import { Card, CardMedia, CardContent, Rating, CardProps, Typography} from "@mui/material";

interface ProductCardProps extends CardProps { 
    img: string;
    title: string;
    price: number;
    rating: number;
    brand: string;
}
 
const ProductCard: React.FC<ProductCardProps> = (props) => {

    const {img, title, price, rating, brand} = props;

    return (
        <Card sx={{maxWidth: "350px", height: "350px", display: "flex", flexDirection: "column"}}>
            <CardMedia
            sx={{height: "180px", backgroundSize: "contain", margin: "1rem 1rem 0 1rem"}}
            image={img}/>
            <CardContent sx={{backgroundColor: "#282828", flexGrow: 1}}>
                <Typography 
                color={"white"}
                sx={
                    { lineHeight: "1.2rem",
                    height: "2.4rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis"}
                    }>
                    {title}
                </Typography>
                <Typography color={"#1565c0"}>
                    {brand}
                </Typography>
                <Typography color={"white"}>{price}</Typography>
                <Rating
                    className= "item__rating"
                    name="read-only"
                    precision={0.5}
                    value={rating}
                    readOnly />
            </CardContent>
        </Card>
    );
}
 
export default ProductCard;