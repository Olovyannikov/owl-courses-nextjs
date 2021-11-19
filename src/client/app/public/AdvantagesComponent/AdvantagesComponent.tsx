import s from './AdvantagesComponent.module.scss';
import {IAdvantagesProps} from "./IAdvantagesProps";
import cn from "classnames";
import {Icon, Title} from "@/client/app/components";

export const AdvantagesComponent = ({advantages}: IAdvantagesProps): JSX.Element => {
    return (
        <>
            <Title className={s.title} variant={'h2'}>Преимущества</Title>
            <ul className={cn(s.list)}>
                {advantages.map(li => <li className={s.item} key={li._id}><h6>{li.title}</h6><p>{li.description}</p>
                    <Icon width={24} height={24} iconName={'check'}/></li>)}
            </ul>
        </>
    )
}