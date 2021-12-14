import s from './Search.module.scss';
import {ISearchProps} from "./ISearchProps";
import cn from "classnames";
import {Button, Icon, Input} from "@/client/app/components";
import {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from "react";
import {useRouter} from "next/router";
import {HTMLElement} from "node-html-parser";

export const Search = ({className, ...props}: ISearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const getSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    }

    const handleKeyDown = (e: KeyboardEvent) => e.key == 'Enter' && getSearch();

    return (
        <form className={cn(className, s.search)} {...props} role="search">
            <Input
                placeholder='Поиск...'
                aria-label="Поиск по сайту"
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                // @ts-ignore
                onKeyDown={handleKeyDown}
            />
            <Button aria-label= 'Поиск по сайту' icon variant="primary" className={s.button} onClick={getSearch}>
                <Icon width={15} height={15} iconName='search'/>
            </Button>
        </form>
    )
}