import { Box, BoxProps } from "@mui/material";

interface ImageProps extends BoxProps{
    src: string;
    alt?: string;
    borderRadius?: string;
}
 
const Image: React.FC<ImageProps> = (props) => {

    const {src, alt, borderRadius} = props;

    return (  
        <Box component={"img"} src={src} alt = {alt} sx={{width: "100%", height: "100%", objectFit: "contain", borderRadius: borderRadius}}/>
    );
}
 
export default Image;