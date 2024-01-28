import { ErrorMessage, Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../ui';
import { Box, OutlinedInput, TextField, TextFieldProps } from '@mui/material';

import { AuthService } from '../../../services/auth.service';
import { useActions } from '../../../hooks/useActions';
import { IEmailPassword } from '../../../store/user/user.interfaces';

import styles from '../Auth.module.css';
import { useAuth } from '../../../providers/AuthProvider';


interface RegisterProps {
    
}

interface IRegisterFormValues {
    email: string;
    username: string;
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
    const {closeAuthModal} = useAuth()

    const registerValidationSchema = Yup.object().shape({
        email: Yup.string()
                .email('Неверный email')
                .required('This field is required.'),
        username: Yup.string()
                .min(4, 'Min 4 letters')
                .required('This field is required.'),
        password: Yup.string()
                .min(4, 'Min 4 letters')
                .required('This field is required.')
    });


    const registerFormInitialValues : IRegisterFormValues = {
        email: '',
        password: '',
        username: ''
    };

    const onSubmitRegisterForm = (values: IRegisterFormValues): void => {

        const emailPassword: IEmailPassword = {
            email: values.email,
            password: values.password,
            name: values.username
        }

        boundActionCreators.register(emailPassword)
    };


    return ( <Formik
        initialValues={registerFormInitialValues}
        onSubmit={(values) =>  {
            onSubmitRegisterForm(values);

            closeAuthModal();
        }}

        validationSchema = {registerValidationSchema}>
        {() => (
            <Form className={styles.form}>
                <MyTextField
                    name="email"
                    type="text"
                    label="Email"
                    sx={{borderColor: "white"}}/>
                <MyTextField
                    name="username"
                    type="text"
                    label="Name"
                    sx={{borderColor: "white"}}/>
                <MyTextField
                    name="password"
                    type="password" 
                    label="Password"/>
                <Button type="submit" className={styles.submit}>
                    Register
                </Button>
            </Form>
        )
        }
        </Formik>);
}
 
export default Register;