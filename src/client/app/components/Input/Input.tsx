import s from './Input.module.scss';
import { IInputProps } from "./IInputProps";
import cn from "classnames";

export const Input = ({className, ...props}: IInputProps): JSX.Element => {
    return (
        <input className={cn(className, s.input)} {...props}/>
    )
}