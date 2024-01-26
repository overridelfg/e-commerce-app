import { ErrorMessage, Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../ui';
import { Box, TextField } from '@mui/material';

import styles from '../Auth.module.css';


interface LoginProps {
    
}

interface ILoginFormValues {
    email: string;
    password: string;
}
 
const Login: React.FC<LoginProps> = () => {

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
        console.log(values);
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
                <TextField
                    name="email"
                    type="text"
                    sx={{borderColor: "white"}}/>
                <ErrorMessage 
                name="comment"
                component="div" />
                </Box>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                <TextField
                    name="password"
                    type="password" 
                    sx={{borderColor: "white"}}/>
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