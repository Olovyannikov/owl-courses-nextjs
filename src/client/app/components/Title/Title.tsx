import s from './Title.module.scss';
import {ITitle} from "./ITitle";
import cn from "classnames";

export const Title = ({variant, children, className, ...props}: ITitle): JSX.Element => {
    switch (variant) {
        case 'h1':
            return <h1 className={cn(className, s.title)} {...props}>{children}</h1>;
        case 'h2':
            return <h2 className={cn(className, s.title)} {...props}>{children}</h2>
        case 'h3':
            return <h3 className={cn(className, s.title)} {...props}>{children}</h3>
        default:
            return <></>;
    }
}