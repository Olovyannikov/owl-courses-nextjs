import s from "./VacanciesData.module.scss";
import {IVacanciesDataProps} from "./IVacanciesDataProps";
import {Card, Icon} from "@/components/index";
import cn from "classnames";
import {priceRu} from "@/client/utils/utils";

export const VacanciesData = ({count, juniorSalary, middleSalary, seniorSalary}: IVacanciesDataProps): JSX.Element => {
    return (
        <div className={s.vacancyCards}>
            <Card className={s.count} variant={'white'}>
                <h5 className={s.title}>Всего вакансий</h5>
                <div className={s.countValue}>{priceRu(count).slice(0, -1)}</div>
            </Card>
            <Card className={s.salary} variant={'white'}>
                <div className={s.content}>
                    <h5 className={s.title}>Начальный</h5>
                    <div className={s.salaryValue}>{priceRu(juniorSalary)}</div>
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
                    <h5 className={s.title}>Средний</h5>
                    <div className={s.salaryValue}>{priceRu(middleSalary)}</div>
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
                    <h5 className={s.title}>Профессионал</h5>
                    <div className={s.salaryValue}>{priceRu(seniorSalary)}</div>
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
        </div>
    )
}