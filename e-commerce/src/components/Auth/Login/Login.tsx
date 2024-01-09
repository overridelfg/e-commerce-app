import { Formik, useField } from 'formik';
import * as Yup from 'yup';


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

    return ( 
        <Formik
            initialValues={loginFormInitialValues}
            onSubmit={onSubmitLoginForm}
            validationSchema = {loginValidationSchema}>
            {({
                values,
                handleSubmit,
                handleChange,
                handleBlur,
                touched,
                errors,
            }) => (
                <form className="auth-form login-modal__form" onSubmit={handleSubmit}>
                        <div className="auth-input-container bounceInUp">
                            <label className = "auth-label-field" htmlFor="email">Email</label>
                            <input
                            id="email"
                            name="email"
                            placeholder="Email"
                            className = {`auth-field login-modal__email-input ${errors.email && touched.email ? 'error': 'success'}`}
                            type = "email"
                            value={values.email}
                            onChange = {handleChange}
                            onBlur={handleBlur}/>
                            {errors.email && touched.email ? <p className="auth-error-validation visible">{errors.email}</p> : <p className="auth-error-validation hidden">{"error"}</p>}
                        </div>
                
                        <div className="auth-input-container bounceInUp">
                        <label className = "auth-label-field" htmlFor="password">Password</label>
                            <input
                            id="password"
                            name="password"
                            placeholder="Password"
                            className = {`auth-field login-modal__password-input ${errors.password && touched.password ? 'error': 'success'}`}
                            type = "password"
                            value={values.password}
                            onChange = {handleChange}
                            onBlur={handleBlur}/>
                            {errors.password && touched.password ? <p className="auth-error-validation visible">{errors.password}</p> : <p className="auth-error-validation hidden">{"error"}</p>}
                        </div>
                  
                        <div className="auth-submit-container bounceInUp">
                            <button
                                type="submit"
                                className="btn auth-submit">
                                    <span>Login</span>
                            </button>
                        </div>
                </form>
            )
            }
            </Formik>
     );
}
 
export default Login;