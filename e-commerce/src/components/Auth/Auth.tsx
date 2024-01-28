import { useState } from "react";
import { Modal } from "../../ui";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { Box, Typography } from "@mui/material";

interface AuthProps {
    
}
 
const Auth: React.FC<AuthProps> = () => {

    const [authType, setAuthType] = useState<'login' | 'register'>('login');

    return ( 
        <Box sx={{display: "flex", flexDirection: "column"}}>
            { authType === 'login' 
            ? <Login/> 
            : <Register/> }
           { authType === 'login'
           ? <Typography color={"white"}>
                Don't have an account?&ensp;
                <Box
                component={"span"}
                onClick={() => setAuthType('register')}
                sx={{color: "var(--color-primary-100)", cursor: "pointer"}}>
                    Create
                </Box>
           </Typography>
           : <Typography color={"white"}>
            Already have an account?&ensp;
            <Box
            component="span"
            onClick={() => setAuthType('login')}
            sx={{color: "var(--color-primary-100)", cursor: "pointer"}}>
                Login
            </Box>
            </Typography>}
        </Box>
     );
}
 
export default Auth;