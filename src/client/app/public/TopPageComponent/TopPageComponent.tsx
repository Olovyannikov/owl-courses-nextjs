import s from './TopPageComponent.module.scss';
import {ITopPageComponentProps} from "./ITopPageComponentProps";
import {Product, Sort, Tag, Title, VacanciesData} from "@/client/app/components";
import {TopLevelCategory} from "@/client/types/page.interface";
import {AdvantagesComponent, SkillsComponent} from "../index";
import {SortEnum} from "@/components/Sort/ISortProps";
import {useReducer} from "react";
import {sortReducer} from "./sort.reducer";

export const TopPageComponent = ({page, products, firstCategory}: ITopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort});
    }

    return (
        <div className={s.content}>
            <div className={s.top}>
                <div className={s.header}>
                    <Title variant={'h1'}>{page?.title}</Title>
                    {products && <Tag color={'light'} size={'m'}>{products.length}</Tag>}
                    <Sort sort={sort} setSort={setSort}/>
                </div>
                <div>
                    {sortedProducts && sortedProducts.map(p => (<Product product={p} key={p._id}/>))}
                </div>
            </div>

            <div className={s.vacancy}>
                <div className={s.header}>
                    <Title variant={'h2'}>Вакансии - {page?.category}</Title>
                    {sortedProducts && <Tag color={'danger'} size={'m'}>hh.ru</Tag>}
                </div>
                {firstCategory == TopLevelCategory.Courses && page.hh && <VacanciesData {...page.hh}/>}
            </div>

            <div className={s.features}>
                {page?.advantages && page?.advantages.length > 0 && <AdvantagesComponent advantages={page.advantages}/>}
                {page?.seoText && <div className={s.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            </div>

            <div className={s.skills}>
                {page?.tags && <SkillsComponent title={page.tagsTitle} tags={page.tags}/>}
            </div>
        </div>
    )
}