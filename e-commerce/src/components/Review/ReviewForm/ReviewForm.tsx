import { Box, Rating } from "@mui/material";
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

interface ReviewFormProps {
    
}
 
interface IReviewFormValues {
    comment: string;
    rating: number;
}

const RatingField = () => {
    const [field, meta, helpers] = useField('rating');
    return (

      <Rating onChange = {(e, newValue) => {helpers.setValue(newValue)}}/>
    );
  };

const ReviewForm: React.FC<ReviewFormProps> = () => {

    const [rating, setRating] = useState<number | null>(null);

    const reviewValidationSchema = Yup.object().shape({
        comment: Yup.string()
                .min(4, 'Min 4 length')
                .required('This field is required.'),
        rating: Yup.number()
                .required('This field is required.')
    });


    const reviewFormInitialValues : IReviewFormValues = {
        comment: '',
        rating: 0,
    };

    return ( <Formik
        initialValues={reviewFormInitialValues}
        onSubmit={(values) =>  {
            console.log(values);
        }}
        validationSchema = {reviewValidationSchema}>
        {({
            values,
            handleSubmit,
            handleChange,
            isSubmitting,
            handleBlur,
            touched,

        }) => (
            <Form>
                <Field type="text" name="comment" />
                <ErrorMessage name="comment" component="div" />
                <RatingField/>
                <ErrorMessage name="rating" component="div" />
                <button type="submit">
                    Submit
                </button>
            </Form>
        )
        }
        </Formik>);
}
 
export default ReviewForm;