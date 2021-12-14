import s from './Rating.module.scss';
import {IRatingProps} from "./IRatingProps";
import {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef} from "react";
import {Icon} from "../Icon/Icon";
import cn from "classnames";

export const Rating = forwardRef(({
                                      isEditable = false,
                                      rating,
                                      setRating,
                                      className,
                                      error,
                                      tabIndex,
                                      ...props
                                  }: IRatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    const ratingArrayRef = useRef<(HTMLLIElement | null)[]>([]);

    const computeFocus = (r: number, i: number): number => {
        if (!isEditable) return -1;
        if (!rating && i === 0) return tabIndex ?? 0;
        if (r === i + 1) return tabIndex ?? 0;
        return -1;
    }

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
                role={isEditable ? 'slider' : ''}
                aria-label={isEditable ? 'Укажите рейтинг' : `рейтинг ${rating}`}
                aria-valuemax={5}
                aria-valuemin={1}
                aria-valuenow={rating}
                aria-invalid={!!error}
            />)
        );
        setRatingArr(updatedArray);
    }

    const changeDisplay = (i: number) => isEditable && constructRating(i);
    const onClick = (i: number) => !isEditable || !setRating ? '' : setRating(i);
    const handleKey = (e: KeyboardEvent) => {
        if (!isEditable || !setRating) return;
        if (e.code == 'ArrowRight' || e.code == "ArrowUp") {
            if (!rating) {
                setRating(1);
            } else {
                e.preventDefault();
                setRating(rating < 5 ? rating + 1 : 5);
            }

            ratingArrayRef.current[rating]?.focus();
        }
        if (e.code == 'ArrowLeft' || e.code == "ArrowDown") {
            e.preventDefault();
            setRating(rating > 1 ? rating - 1 : 1);
            ratingArrayRef.current[rating - 2]?.focus();
        }
    }

    return (
        <div className={cn(className, s.wrapper, {
            [s.errorWrapper]: error
        })} {...props} ref={ref}>
            <ul className={s.rating}>
                {ratingArr.map((r: JSX.Element, i: number) => <li
                    key={i}
                    onKeyDown={handleKey}
                    tabIndex={computeFocus(rating, i)}
                    ref={r => ratingArrayRef.current?.push(r)}
                >
                    {r}
                </li>)}
            </ul>
            {error && <span role="alert" className={s.error}>{error.message}</span>}
        </div>
    )
});