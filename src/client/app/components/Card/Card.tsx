import s from './Card.module.scss';
import {ICardProps} from "./ICardProps";
import cn from "classnames";

export const Card = ({variant = 'white', className, children, ...props}: ICardProps): JSX.Element => {
    return (
        <div className={cn(className, s.card, {
            [s.blue]: variant === 'blue'
        })} {...props}>{children}</div>
    )
}