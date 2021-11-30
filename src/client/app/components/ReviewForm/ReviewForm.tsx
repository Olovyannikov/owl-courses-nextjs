import s from './ReviewForm.module.scss';
import {IReviewFormProps} from "./IReviewFormProps";
import cn from "classnames";
import {Button, Input, Rating, Textarea} from "@/client/app/components";
import {useForm, Controller} from "react-hook-form";
import {IReviewForm} from "@/components/ReviewForm/ReviewForm.interface";

export const ReviewForm = ({productId, className, ...props}: IReviewFormProps): JSX.Element => {
    const {register, control, handleSubmit, reset, formState: {errors}} = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data)
    }

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(s.reviewForm, className)} {...props}>
                <Input placeholder={'Имя'} {...register('name', {required: {value: true, message: "Заполните имя"},})}
                       error={errors.name}/>
                <Input {...register('title', {required: {value: true, message: "Заполните заголовок"}})}
                       placeholder={'Заголовок отзыва'} error={errors.title}/>
                <div className={s.rating}>
                    <span>Оценка:</span>
                    <Controller control={control} render={({field}) =>
                        <Rating ref={field.ref} isEditable setRating={field.onChange} rating={field.value}/>}
                                name={'rating'}/>
                </div>
                <Textarea {...register('description', {required: {value: true, message: "Заполните текст отзыва"}})}
                          placeholder={'Текст отзыва'} className={s.textarea} error={errors.description}/>
                <div className={s.submit}>
                    <Button type="submit">Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            <div className={s.success}>
                <h3>Ваш отзыв отправлен!</h3>
                <p>Спасибо, ваш отзыв будет опубликован после проверки!</p>
                <button className={s.close}>Close</button>
            </div>
        </form>
    )
}