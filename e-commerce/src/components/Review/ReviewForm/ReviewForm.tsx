import styles from "./ReviewForm.module.css"

import { Box, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { Button } from "../../../ui";
import Rating from "../../../ui/Rating/Rating";
import axios from "axios";
import { IReview } from "../../../types/IReview";
import { useHttp } from "../../../hooks/useHttp";
import { useModalReview, useReview } from "../../../providers/ReviewProvider";
import { current } from "@reduxjs/toolkit";
import { useAuthSelector } from "../../../hooks/useAuthSelector";

 
interface IReviewFormValues {
    comment: string;
    rating: number;
}

interface ReviewFormProps {
    productId: string;
    username: string;
}

const RatingField: React.FC = () => {
    const [field, meta, helpers] = useField('rating');
    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <Rating 
            className={styles.formRating}
            onChange = {(e, newValue) => {helpers.setValue(newValue)}}/>
            <ErrorMessage name="rating" component="div" className={styles.formComment} />
        </Box>
    );
};

const CommentField: React.FC = () => {
    const [field, meta, helpers] = useField('comment');

    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>
         <textarea
            name="comment"
            rows={5}
            className={styles.inputField}
            onChange = {(e: React.ChangeEvent<HTMLTextAreaElement>) => {helpers.setValue(e.target.value)}}/>
        <ErrorMessage 
        className={styles.formComment}
        name="comment"
        component="div" />
        </Box>
    );
};

const ReviewForm: React.FC<ReviewFormProps> = ({productId, username}) => {


    const { request } = useHttp();
    const { updateReviews, reviews } = useReview();
    const {closeReviewDialog} = useModalReview();

    const addReview = async (review: IReview) => {
        request("reviews/add", "post", review).then((res: IReview) => {
            const reviewsCopy = [...reviews];
            reviewsCopy.push(res);
            updateReviews(reviewsCopy);
            closeReviewDialog();
        })
    }

    const reviewValidationSchema = Yup.object().shape({
        comment: Yup.string()
                .min(4, 'Min 4 letters')
                .required('This field is required.'),
        rating: Yup.number()
                .min(1, 'Put raing')
                .required('This field is required.')
    });


    const reviewFormInitialValues : IReviewFormValues = {
        comment: '',
        rating: 0,
    };

    return ( <Formik
        initialValues={reviewFormInitialValues}
        onSubmit={(values) =>  {

            const date = new Date();
            const currentDate = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();

            addReview({
                comment: values.comment,
                rating: values.rating,
                productId: productId,
                username: username,
                createdAt: currentDate});
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