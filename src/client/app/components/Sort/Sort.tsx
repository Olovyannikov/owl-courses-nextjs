import cn from "classnames";
import s from './Sort.module.scss';
import {Icon} from "@/components/index";
import {ISortProps, SortEnum} from "./ISortProps";

export const Sort = ({sort, setSort, className, ...props}: ISortProps): JSX.Element => {
    return (
        <div className={cn(s.sort, className)} {...props}>
            <div id="sort" className={s.sortName}>Сортировка</div>
            <button
                className={cn({[s.active]: sort === SortEnum.Rating})}
                id="rating"
                type="button"
                onClick={() => setSort(SortEnum.Rating)}
                aria-selected={sort === SortEnum.Rating}
                aria-labelledby="sort rating"
            >
                <Icon className={s.icon} width={20} height={13} iconName="sort"/>
                <span>По рейтингу</span>
            </button>
            <button
                className={cn({[s.active]: sort === SortEnum.Price})}
                id="price"
                type="button"
                onClick={() => setSort(SortEnum.Price)}
                aria-selected={sort === SortEnum.Price}
                aria-labelledby="sort"
            >
                <Icon className={s.icon} width={20} height={13} iconName="sort"/>
                <span>По цене</span>
            </button>
        </div>
    )
}