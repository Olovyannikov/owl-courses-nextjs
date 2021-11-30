import s from './Input.module.scss';
import {IInputProps} from "./IInputProps";
import cn from "classnames";
import {ForwardedRef, forwardRef, useState} from "react";

export const Input = forwardRef(({
                                     className,
                                     error,
                                     ...props
                                 }: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {


    return (
        <div className={cn(s.inputWrapper, className)}>
            <input className={cn(s.input, {
                [s.error]: error
            })} ref={ref} {...props}/>
            {error && <span className={s.errorMessage}>{error.message}</span>}
        </div>
    )
});