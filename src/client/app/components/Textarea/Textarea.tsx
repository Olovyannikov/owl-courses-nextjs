import s from './Textarea.module.scss';
import {ITextareaProps} from "@/components/Textarea/ITextareaProps";
import cn from "classnames";

export const Textarea = ({className, ...props}: ITextareaProps) => {
    return (
        <textarea className={cn(className, s.textarea)} {...props}/>
    )
}