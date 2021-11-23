import s from './ReviewForm.module.scss';
import {IReviewFormProps} from "./IReviewFormProps";
import cn from "classnames";
import {Button, Input, Rating, Textarea} from "@/client/app/components";

export const ReviewForm = ({productId, className, ...props}: IReviewFormProps): JSX.Element => {
    return (
        <>
            <div className={cn(s.reviewForm, className)} {...props}>
                <Input placeholder={'Имя'}/>
                <Input placeholder={'Заголовок отзыва'}/>
                <div className={s.rating}><span>Оценка:</span> <Rating rating={0}/></div>
                <Textarea placeholder={'Текст отзыва'} className={s.textarea}/>
                <div className={s.submit}>
                    <Button>Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            <div className={s.success}>
                <h3>Ваш отзыв отправлен!</h3>
                <p>Спасибо, ваш отзыв будет опубликован после проверки!</p>
                <button className={s.close}>Close</button>
            </div>
        </>
    )
}