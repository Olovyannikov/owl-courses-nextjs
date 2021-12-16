import s from './SkillsComponent.module.scss';
import {Tag, Title} from "@/client/app/components";
import {ISkillsComponentProps} from "./ISkillsComponentProps";

export const SkillsComponent = ({title, tags}: ISkillsComponentProps): JSX.Element => {
    return (
        <>
            <Title variant={'h2'}>{title && title}</Title>
            <ul className={s.list}>
                {tags?.map(tag =>
                    <li key={tag}>
                        <Tag variant={'outline'} color={'primary'}>
                            {tag}
                        </Tag>
                    </li>
                )}
            </ul>
        </>
    )
}