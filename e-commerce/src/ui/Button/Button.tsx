import styles from "./Button.module.css";

import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from "@mui/material";
import cn from "classnames";

interface IButtonProps extends MaterialButtonProps {}

const Button: React.FC<IButtonProps> = (props) => {

    const { children, className = "" } = props;

    return ( 
        <MaterialButton
        variant="contained"
        {...props}
        className={cn(className)}>
            {children}
        </MaterialButton>
     );
}

export default Button;