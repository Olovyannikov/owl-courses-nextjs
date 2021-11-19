import s from './Sort.module.scss';
import {ISortProps, SortEnum} from "@/components/Sort/ISortProps";
import cn from "classnames";
import {Icon} from "@/components/Icon/Icon";

export const Sort = ({sort, setSort, className, ...props}: ISortProps): JSX.Element => {
    return  (
        <div className={cn(s.sort, className)} {...props}>
            <button className={cn({
                [s.active]: sort === SortEnum.Rating
            })} type="button" onClick={() => setSort(SortEnum.Rating)}>
                <Icon className={s.icon} width={20} height={13} iconName="sort"/>
                <span>По рейтингу</span>
            </button>
            <button className={cn({
                [s.active]: sort === SortEnum.Price
            })} type="button" onClick={() => setSort(SortEnum.Price)}>
                <Icon className={s.icon} width={20} height={13} iconName="sort"/>
                <span>По цене</span>
            </button>
        </div>
    )
}