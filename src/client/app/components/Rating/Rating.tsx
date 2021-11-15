import s from './Rating.module.scss';
import {IRatingProps} from "./IRatingProps";
import {useEffect, useState, KeyboardEvent} from "react";
import {Icon} from "../Icon/Icon";
import cn from "classnames";

export const Rating = ({isEditable = false, rating, setRating, className, ...props}: IRatingProps): JSX.Element => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArr.map((r: JSX.Element, i: number) => (
            <Icon
                className={cn(s.star, {[s.filled]: i < currentRating, [s.editable]: isEditable})}
                width={20}
                height={20}
                iconName={'star'}
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={() => changeDisplay(rating)}
                onClick={() => onClick(i + 1)}
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
            />)
        );
        setRatingArr(updatedArray);
    }

    const changeDisplay = (i: number) => isEditable && constructRating(i);
    const onClick = (i: number) => !isEditable || !setRating ? '' : setRating(i);
    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => e.code === 'Space' && setRating && setRating(i);

    return (
        <div {...props}>
            <ul className={s.rating}>
                {ratingArr.map((r: JSX.Element, i: number) => <li key={i}>{r}</li>)}
            </ul>
        </div>
    )
}