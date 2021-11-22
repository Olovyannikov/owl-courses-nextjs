import React from 'react';
import Link from 'next/link';
import s from './Footer.module.scss';
import {IFooterProps} from './IFooterProps';
import cn from "classnames";
import {format} from 'date-fns';

export const Footer = ({className, ...props}: IFooterProps):JSX.Element => {
    return (
        <footer className={cn(s.footer, className)} {...props}>
            <span>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</span>
            <Link href={'/'}><a>Пользовательское соглашение</a></Link>
            <Link href={'/'}><a>Политика конфиденциальности</a></Link>
        </footer>
    )
}