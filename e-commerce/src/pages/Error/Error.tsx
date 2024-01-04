import { Box, Typography } from "@mui/material";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

interface ErrorProps {
    
}
 
const Error: React.FC<ErrorProps> = () => {
    const error: unknown = useRouteError();

    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", color: "white", justifyContent: "center"}}>
            <Typography variant="h2">
                Oops!
            </Typography>
            <Typography>
                Sorry, an unexpected error has occurred.
            </Typography>
            <Typography>
                {
                    isRouteErrorResponse(error) ? 
                    (error.data || error.statusText) :
                    "Unknown error message"
                }
            </Typography>
        </Box>
    );
}
 
export default Error;