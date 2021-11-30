import {DetailedHTMLProps, ReactNode, TextareaHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface ITextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    error?: FieldError;
}