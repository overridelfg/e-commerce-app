import { Container, Grid } from "@mui/material";
import ProductCard from "../../widgets/ProductCard/ProductCard";

interface ProductListProps {
    
}
 
const data = [{
        id: 1,
        img: "https://m.media-amazon.com/images/I/81M2m0Eh2vL._AC_UY436_FMwebp_QL65_.jpg",
        title: "IKEA Bergenes Holder for Mobile Phone Tablet Bamboo 104.579.99, Length: 5' Width: 3 ¼ '",
        price: 5,
        rating: 4.4,
        brand: "IKEA",
        description: "Package Dimensions: 1.778 cms (L) x 7.874 cms (W) x 1.778 cms (H);Product Type: Portable Electronic Device Stand;Package Quantity: 1;Country Of Origin: China"
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
        title: "IKEA KALAS 8 no of Spoon, mixed colors, Plastic",
        price: 8,
        rating: 5 ,
        brand: "IKEA",
        description: "best for kids - Smooth Touch;original ikea product;Package Quantity: 1;kalas spoon mixed colours"
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
        title: "IKEA KALAS 8 no of Spoon, mixed colors, Plastic",
        price: 8,
        rating: 5 ,
        brand: "IKEA",
        description: "best for kids - Smooth Touch;original ikea product;Package Quantity: 1;kalas spoon mixed colours"
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
        title: "IKEA KALAS 8 no of Spoon, mixed colors, Plastic",
        price: 8,
        rating: 5 ,
        brand: "IKEA",
        description: "best for kids - Smooth Touch;original ikea product;Package Quantity: 1;kalas spoon mixed colours"
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
        title: "IKEA KALAS 8 no of Spoon, mixed colors, Plastic",
        price: 8,
        rating: 5 ,
        brand: "IKEA",
        description: "best for kids - Smooth Touch;original ikea product;Package Quantity: 1;kalas spoon mixed colours"
    }
]

const ProductList: React.FC<ProductListProps> = () => {

    return (
        <Grid container spacing={3} sx={{marginTop: "2rem"}}>
            {data.map((product, index) => {
                return (<Grid key={index} item xs = {4} md={3}>
                    <ProductCard
                      key={product.id}
                      title={product.title}
                      price={product.price}
                      img={product.img}
                      rating={product.rating}
                      brand={product.brand}/>
                </Grid>)
            })}
        </Grid>
    );
}
 
export default ProductList;