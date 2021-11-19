import s from './TopPageComponent.module.scss';
import {ITopPageComponentProps} from "./ITopPageComponentProps";
import {Card, Tag, Title, VacanciesData} from "@/client/app/components";
import {TopLevelCategory} from "@/client/types/page.interface";

export const TopPageComponent = ({page, products, firstCategory}: ITopPageComponentProps): JSX.Element => {
    return (
        <div className={s.content}>
            <div className={s.top}>
                <div className={s.header}>
                    <Title variant={'h1'}>{page.title}</Title>
                    {products && <Tag color={'light'} size={'m'}>{products.length}</Tag>}
                </div>
                <div>
                    {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
                </div>
            </div>

            <div className={s.vacancy}>
                <div className={s.header}>
                    <Title variant={'h2'}>Вакансии - {page.category}</Title>
                    {products && <Tag color={'danger'} size={'m'}>hh.ru</Tag>}
                </div>
                {firstCategory == TopLevelCategory.Courses && <VacanciesData {...page.hh}/>}
            </div>
        </div>
    )
}