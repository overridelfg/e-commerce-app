import styles from "./ReviewForm.module.css"

import { Box, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { Button } from "../../../ui";
import Rating from "../../../ui/Rating/Rating";
import axios from "axios";
import { IReview } from "../../../models/IReview";
import { useHttp } from "../../../hooks/useHttp";
import { useReview } from "../../../providers/ReviewProvider";

 
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


    const { request } = useHttp();
    const { updateReviews, reviews } = useReview();

    const addReview = async (review: IReview) => {
        request("reviews/add", "post", review).then((res: IReview) => {
            const reviewsCopy = [...reviews];
            reviewsCopy.push(res);
            updateReviews(reviewsCopy);
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