import styles from "./Input.module.css"

import { Input as MaterialInput, InputProps as  MaterialInputProps} from "@mui/material";
import cn from "classnames";


interface IInputProps extends MaterialInputProps{}


const TextField : React.FC<IInputProps> = (props) => {

    const { className, disableUnderline = true } = props;
    return (
        <MaterialInput
        disableUnderline = {disableUnderline}
        {...props}
        className = {cn(styles.input, className)}/>
      );
}

export default TextField;