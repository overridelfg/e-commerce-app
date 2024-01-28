import { ErrorMessage, Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../ui';
import { Box, OutlinedInput, TextField, TextFieldProps } from '@mui/material';

import { AuthService } from '../../../services/auth.service';
import { useActions } from '../../../hooks/useActions';
import { IEmailPassword } from '../../../store/user/user.interfaces';

import styles from '../Auth.module.css';


interface RegisterProps {
    
}

interface IRegisterFormValues {
    email: string;
    password: string;
}


interface MyTextFieldProps {
    name: string;
    type: string;
}

const MyTextField: React.FC<MyTextFieldProps & TextFieldProps> = ({name, type, label}) => {
    const [field, meta, helpers] = useField(name);

    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>
        <label className={styles.inputLabel}>{label}</label>
         <input
            className={styles.inputField}
            name = {name}
            type={type}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {helpers.setValue(e.target.value)}}/>
        <ErrorMessage 
        className={styles.formComment}
        name={name}
        component="div" />
        </Box>
    );
};
 
const Register: React.FC<RegisterProps> = () => {


    const boundActionCreators = useActions();

    const registerValidationSchema = Yup.object().shape({
        email: Yup.string()
                .email('Неверный email')
                .required('This field is required.'),
        password: Yup.string()
                .min(4, 'Минимум 4 символа')
                .required('This field is required.')
    });


    const registerFormInitialValues : IRegisterFormValues = {
        email: '',
        password: ''
    };

    const onSubmitRegisterForm = (values: IRegisterFormValues): void => {

        const emailPassword: IEmailPassword = {
            email: values.email,
            password: values.password
        }

        boundActionCreators.register(emailPassword)
    };


    return ( <Formik
        initialValues={registerFormInitialValues}
        onSubmit={(values) =>  {
            onSubmitRegisterForm(values);
        }}

        validationSchema = {registerValidationSchema}>
        {() => (
            <Form className={styles.form}>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <MyTextField
                        name="email"
                        type="text"
                        label="Email"
                        sx={{borderColor: "white"}}/>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <MyTextField
                        name="password"
                        type="password" 
                        label="Password"/>
                </Box>
                <Button type="submit" className={styles.submit}>
                    Register
                </Button>
            </Form>
        )
        }
        </Formik>);
}
 
export default Register;