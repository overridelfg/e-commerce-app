import { Box, BoxProps } from "@mui/material";

interface ImageProps extends BoxProps{
    src: string;
    alt?: string;
}
 
const Image: React.FC<ImageProps> = (props) => {

    const {src, alt} = props;

    return (  
        <Box component={"img"} {...props} src={src} alt = {alt}/>
    );
}
 
export default Image;