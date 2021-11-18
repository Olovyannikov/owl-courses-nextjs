import s from "./TopPageComponent.module.scss";
import {IVacanciesDataProps} from "./IVacanciesDataProps";
import {Card, Tag, Title} from "@/client/app/components";

export const VacanciesData = ({count}: IVacanciesDataProps): JSX.Element => {
    return (
        <div className={s.vacancyCards}>
            <Card className={s.card} variant={'white'}>
                <h5 className={s.title}>Всего вакансий</h5>
                <div className={s.count}>{count}</div>
            </Card>
        </div>
    )
}