import s from './Divider.module.scss';
import {IDividerProps} from "@/components/Divider/IDividerProps";
import cn from "classnames";

export const Divider = ({className, ...props}: IDividerProps) => <hr className={cn(className, s.hr)} {...props}/>