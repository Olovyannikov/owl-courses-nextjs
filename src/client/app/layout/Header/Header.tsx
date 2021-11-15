import s from './Header.module.scss';
import {IHeaderProps} from "./IHeaderProps";

export const Header = ({...props}: IHeaderProps) => {
    return (
        <header {...props}>Header</header>
    )
}
