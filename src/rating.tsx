import React, { ReactElement } from "react";

/**
 * Генерация рейтинга поста и кнопок.
 * @returns {ReactElement} Возвращает готовый элемент для рейтинга поста
 */
export default function useRating(){
    const [rating, setRating] = React.useState(Math.random()*10);

    return (
        <div className='rating_info'>
                        <span className='rating'>{rating.toFixed(1)}</span>
                        <button className='plus link' onClick={()=>setRating(rating+0.1)}>+</button>
                        <button className='minus link' onClick={()=>setRating(rating-0.1)}>-</button>
        </div>
    );
}