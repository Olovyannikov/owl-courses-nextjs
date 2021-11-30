import s from './Textarea.module.scss';
import {ITextareaProps} from "@/components/Textarea/ITextareaProps";
import cn from "classnames";
import {ForwardedRef, forwardRef} from "react";

export const Textarea = forwardRef(({
                                        className,
                                        error,
                                        ...props
                                    }: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <div className={cn(className, s.wrapper)}>
            <textarea className={cn(s.textarea, {
                [s.error]: error
            })} ref={ref} {...props}/>
            {error && <span className={s.errorMessage}>{error.message}</span>}
        </div>
    )
});