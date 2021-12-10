import s from './ReviewForm.module.scss';
import {IReviewFormProps} from "./IReviewFormProps";
import cn from "classnames";
import {Button, Input, Rating, Textarea} from "@/client/app/components";
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewSendResponse} from "@/components/ReviewForm/ReviewForm.interface";
import axios from "axios";
import {API} from "@/client/utils/api";
import {useState} from "react";

export const ReviewForm = ({productId, isOpened, className, ...props}: IReviewFormProps): JSX.Element => {
    const {register, control, handleSubmit, reset, formState: {errors}} = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const {data} = await axios.post<IReviewSendResponse>(API.review.createDemo, {...formData, productId});
            console.log(data)
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setIsError('Что-то пошло не так...');
            }
        } catch (e: any) {
            setIsError(e.message);
        }
    };

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(s.reviewForm, className)} {...props}>
                <Input
                    tabIndex={isOpened ? 0 : -1}
                    placeholder={'Имя'}
                    error={errors.name}
                    {...register('name', {
                        required: {
                            value: true,
                            message: "Заполните имя"
                        },
                    })}
                />
                <Input
                    tabIndex={isOpened ? 0 : -1} placeholder={'Заголовок отзыва'}
                    error={errors.title} {...register('title', {
                    required: {
                        value: true,
                        message: "Заполните заголовок"
                    }
                })}
                />
                <div className={s.rating}>
                    <span>Оценка:</span>
                    <Controller control={control} name={'rating'}
                                rules={{required: {value: true, message: "Поставьте оценку"}}} render={({field}) =>
                        <Rating
                            isEditable
                            error={errors.rating}
                            ref={field.ref}
                            setRating={field.onChange}
                            rating={field.value}/>}
                    />
                </div>
                <Textarea
                    tabIndex={isOpened ? 0 : -1} placeholder={'Текст отзыва'} className={s.textarea}
                    error={errors.description} {...register('description', {
                    required: {
                        value: true,
                        message: "Заполните текст отзыва"
                    }
                })}
                />
                <div className={s.submit}>
                    <Button tabIndex={isOpened ? 0 : -1} type="submit">Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {isSuccess && <div className={cn(s.statusPane, s.success)}>
                <h3>Ваш отзыв отправлен!</h3>
                <p>Спасибо, ваш отзыв будет опубликован после проверки!</p>
                <button className={s.close}>Close</button>
            </div>}
            {isError && <div className={cn(s.statusPane, s.error)}>
                {isError && 'Что-то пошло не так, попробуйте ещё'}
                <button onClick={() => setIsError(undefined)} className={s.close}>Close</button>
            </div>}
        </form>
    )
}