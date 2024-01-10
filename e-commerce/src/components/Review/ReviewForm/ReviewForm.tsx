import styles from "./ReviewForm.module.css"

import { Box, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { Button } from "../../../ui";
import Rating from "../../../ui/Rating/Rating";
import axios from "axios";
import { IReview } from "../../../models/IReview";

 
interface IReviewFormValues {
    comment: string;
    rating: number;
}

interface ReviewFormProps {
    productId: string;
}

const RatingField: React.FC = () => {
    const [field, meta, helpers] = useField('rating');
    return (
        <>
            <Rating 
            className={styles.formRating}
            onChange = {(e, newValue) => {helpers.setValue(newValue)}}/>
            <ErrorMessage name="rating" component="div" />
        </>
    );
};

const CommentField: React.FC = () => {
    const [field, meta, helpers] = useField('comment');

    return (
        <>
         <TextField
            name="comment"
            type="text"
            rows={5}
            multiline
            sx={{borderColor: "white"}}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {helpers.setValue(e.target.value)}}/>
        <ErrorMessage name="comment" component="div" />
        </>
    );
};

const ReviewForm: React.FC<ReviewFormProps> = ({productId}) => {


    const addReview = async (review: IReview) => {
        console.log(JSON.stringify(review))
        await axios.post<IReview>(`http://localhost:3001/reviews/add`, 
        review,
        {
            headers: {
            'Content-Type': 'application/json',
        }
        }).then((res) => {
            
        }).catch((err)=> {
            console.log(err)
        })
    }

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
            addReview({
                comment: values.comment,
                rating: values.rating,
                productId: productId,
                username: "Hi",
                createdAt: Date.now().toString()})
        }}

        validationSchema = {reviewValidationSchema}>
        {() => (
            <Form className={styles.form}>
                <CommentField/>
                <RatingField/>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        )
        }
        </Formik>);
}
 
export default ReviewForm;