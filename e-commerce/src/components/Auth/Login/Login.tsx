import { ErrorMessage, Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../ui';
import { Box, TextField, TextFieldProps } from '@mui/material';

import styles from '../Auth.module.css';
import { AuthService } from '../../../services/auth.service';
import { useActions } from '../../../hooks/useActions';
import { IEmailPassword } from '../../../store/user/user.interfaces';


interface LoginProps {
    
}

interface ILoginFormValues {
    email: string;
    password: string;
}


interface MyTextFieldProps {
    name: string;
    type: string;
}

const MyTextField: React.FC<MyTextFieldProps & TextFieldProps> = ({name, type}) => {
    const [field, meta, helpers] = useField(name);

    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>
         <TextField
            name = {name}
            type={type}
            sx={{borderColor: "white"}}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {helpers.setValue(e.target.value)}}/>
        <ErrorMessage 
        className={styles.formComment}
        name={name}
        component="div" />
        </Box>
    );
};
 
const Login: React.FC<LoginProps> = () => {


    const boundActionCreators = useActions();

    const loginValidationSchema = Yup.object().shape({
        email: Yup.string()
                .email('Неверный email')
                .required('This field is required.'),
        password: Yup.string()
                .min(4, 'Минимум 4 символа')
                .required('This field is required.')
    });


    const loginFormInitialValues : ILoginFormValues = {
        email: '',
        password: ''
    };

    const onSubmitLoginForm = (values: ILoginFormValues): void => {

        const emailPassword: IEmailPassword = {
            email: values.email,
            password: values.password
        }

        boundActionCreators.register(emailPassword)
    };


    return ( <Formik
        initialValues={loginFormInitialValues}
        onSubmit={(values) =>  {
            onSubmitLoginForm(values);
        }}

        validationSchema = {loginValidationSchema}>
        {() => (
            <Form className={styles.form}>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <MyTextField
                        name="email"
                        type="text"
                        sx={{borderColor: "white"}}/>
                    <ErrorMessage 
                    name="email"
                    component="div" />
                </Box>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <MyTextField
                        name="password"
                        type="password" />
                    <ErrorMessage 
                    name="password"
                    component="div" />
                </Box>
                <Button type="submit" className={styles.submit}>
                    Submit
                </Button>
            </Form>
        )
        }
        </Formik>);
}
 
export default Login;