'use client'

import classes from './review.module.css'

import { imgPath } from '../../../../shared/imgPath'

import profImg from '../../../../assets/images/profile.jpg'
import { useEffect, useRef, useState } from 'react'

export default function Review({ review }) {
    const imgSrc = review?.author_details.avatar_path == null && profImg.src || review.author_details.avatar_path?.includes('/https://secure.gravatar') && profImg.src ||
        imgPath + review.author_details.avatar_path

    const [isArrowUp, setIsArrowUp] = useState(false)
    const [isPHigh, setIsPHigh] = useState(false)
    const p = useRef()

    useEffect(() => {
        setIsPHigh(p.current?.getBoundingClientRect().height > 100) 
    }, [])


    function handleArrowClick() {
        setIsArrowUp(prev => !prev)
    }

    return <div className={!isArrowUp ? classes.review : `${classes.review} ${classes[`review-expand`]}`}>
        <div className={classes[`review-details`]}>
            <div
                className={classes.imgs}>
                <img src={imgSrc} alt='Profile Image' />
            </div>
            {/* <div className={classes.details}> */}
            <h6 className={classes.name}>{review.author}</h6>
            <h6 className={classes.date}>{review.created_at}</h6>
            <h6 className={classes.rating}>
                ⭐
                <span>
                    {review.author_details.rating ? review.author_details.rating + '/10' : 'N/A'}
                </span>
            </h6>
            {/* </div> */}
            <p ref={p}>{review.content}</p>
            {isPHigh && <div onClick={handleArrowClick} className={!isArrowUp ? classes.arrow : `${classes.arrow} ${classes[`arrow-rotate`]}`}></div>}
        </div>
    </div>
}