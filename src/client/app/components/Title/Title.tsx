import s from './Title.module.scss';
import {ITitle} from "./ITitle";

export const Title = ({variant, children}: ITitle): JSX.Element => {
    switch (variant) {
        case 'h1':
            return <h1 className={s.title}>{children}</h1>;
        case 'h2':
            return <h2 className={s.title}>{children}</h2>
        case 'h3':
            return <h3 className={s.title}>{children}</h3>
        default:
            return <></>;
    }
}