import s from './Review.module.scss';
import {IReviewProps} from "./IReviewProps";
import cn from "classnames";
import {Icon} from "@/components/Icon/Icon";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import {Rating} from "@/client/app/components";

export const Review = ({review, className, ...props}: IReviewProps): JSX.Element => {
    const {name, title, description, rating, createdAt} = review;

    return (
        <div className={cn(s.review, className)} {...props}>
            <Icon className={s.avatar} width={20} height={20} iconName={'user'}/>
            <div className={s.name}>
                <b>{name}:  </b>
                <span>{title}:</span>
            </div>
            <div className={s.date}>
                {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
            </div>
            <div className={s.rate}>
                <Rating rating={rating}/>
            </div>
            <div className={s.descr}>
                <p>{description}</p>
            </div>
        </div>
    )
}