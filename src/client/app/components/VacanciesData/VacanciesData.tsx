import s from "./VacanciesData.module.scss";
import {IVacanciesDataProps} from "./IVacanciesDataProps";
import {Card, Icon} from "@/components/index";
import cn from "classnames";
import {priceRu} from "@/client/utils/utils";

export const VacanciesData = ({count, juniorSalary, middleSalary, seniorSalary}: IVacanciesDataProps): JSX.Element => {
    return (
        <>
            { count && juniorSalary && middleSalary && seniorSalary &&
                <div className={s.vacancyCards}>
                    <Card className={s.count} variant={'white'}>
                        <p className={s.title}>Всего вакансий</p>
                        <div className={s.countValue}>{count ?? priceRu(count).slice(0, -1)}</div>
                    </Card>
                    <Card className={s.salary} variant={'white'}>
                        <div className={s.content}>
                            <p className={s.title}>Начальный</p>
                            <div className={s.salaryValue}>{juniorSalary ?? priceRu(juniorSalary)}</div>
                            <div className={s.rate}>
                                <div className={cn(s.rateBlock, s.filled)}>
                                    <Icon width={12} height={12} iconName={'star'}/>
                                </div>
                                <div className={s.rateBlock}>
                                    <Icon width={12} height={12} iconName={'star'}/>
                                </div>
                                <div className={s.rateBlock}>
                                    <Icon width={12} height={12} iconName={'star'}/>
                                </div>
                            </div>
                        </div>

                        <div className={s.content}>
                            <p className={s.title}>Средний</p>
                            <div className={s.salaryValue}>{middleSalary ?? priceRu(middleSalary)}</div>
                            <div className={s.rate}>
                                <div className={cn(s.rateBlock, s.filled)}>
                                    <Icon width={12} height={12} iconName={'star'}/>
                                </div>
                                <div className={cn(s.rateBlock, s.filled)}>
                                    <Icon width={12} height={12} iconName={'star'}/>
                                </div>
                                <div className={s.rateBlock}>
                                    <Icon width={12} height={12} iconName={'star'}/>
                                </div>
                            </div>
                        </div>

                        <div className={s.content}>
                            <p className={s.title}>Профессионал</p>
                            <div className={s.salaryValue}>{seniorSalary ?? priceRu(seniorSalary)}</div>
                            <div className={s.rate}>
                                <div className={cn(s.rateBlock, s.filled)}>
                                    <Icon width={12} height={12} iconName={'star'}/>
                                </div>
                                <div className={cn(s.rateBlock, s.filled)}>
                                    <Icon width={12} height={12} iconName={'star'}/>
                                </div>
                                <div className={cn(s.rateBlock, s.filled)}>
                                    <Icon width={12} height={12} iconName={'star'}/>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>}</>
    )
}