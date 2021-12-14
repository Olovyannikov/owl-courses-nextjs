import {sortReducer} from "./sort.reducer";
import {Spinner} from "@/components/index";
import {useEffect, useReducer} from "react";
import s from './TopPageComponent.module.scss';
import {SortEnum} from "@/components/Sort/ISortProps";
import {AdvantagesComponent, SkillsComponent} from "../index";
import {TopLevelCategory} from "@/client/types/page.interface";
import {ITopPageComponentProps} from "./ITopPageComponentProps";
import {Product, Sort, Tag, Title, VacanciesData} from "@/client/app/components";
import {useReducedMotion} from "framer-motion";

export const TopPageComponent = ({page, products, firstCategory}: ITopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
    const shouldReduceMotion = useReducedMotion();

    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort});
    };

    useEffect(() => {
        dispatchSort({type: 'reset', initialState: products});
    }, [products]);

    return (
        <section className={s.content}>
            <div className={s.top}>
                <div className={s.header}>
                    <Title variant={'h1'}>{page?.title}</Title>
                    {products && <Tag color={'light'} size={'m'} aria-label={`${products.length} элементов`}>{products.length}</Tag>}
                    <Sort sort={sort} setSort={setSort}/>
                </div>
                <ul className={s.products}>
                    {sortedProducts?.map(p => (<Product layout={!shouldReduceMotion} product={p} key={p._id}/>))}
                </ul>
            </div>

            <div className={s.vacancy}>
                <div className={s.header}>
                    <Title variant={'h2'}>Вакансии - {page?.category}</Title>
                    {sortedProducts && <Tag color={'danger'} size={'m'}>hh.ru</Tag>}
                </div>
                {page?.hh ? firstCategory == TopLevelCategory.Courses && page.hh && <VacanciesData {...page.hh}/> : <Spinner/>}
            </div>

            <div className={s.features}>
                {page?.advantages && page?.advantages.length > 0 && <AdvantagesComponent advantages={page.advantages}/>}
                {page?.seoText && <div className={s.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            </div>

            <div className={s.skills}>
                {page?.tags && <SkillsComponent title={page.tagsTitle} tags={page.tags}/>}
            </div>
        </section>
    )
}