import s from './Product.module.scss';
import {Button, Card, Divider, Rating, Tag} from "@/components/index";
import {IProductProps} from "./IProductProps";
import cn from "classnames";
import Image from 'next/image';
import {declOfNum, priceRu} from "@/client/utils/utils";

export const Product = ({product, className, ...props}: IProductProps): JSX.Element => {
    return (
        <Card className={cn(s.product, className)}>
            <div className={s.logo} {...props}>
                <Image
                    layout="fixed"
                    width={70}
                    height={70}
                    src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`}
                    alt={product.title}
                />
            </div>
            <div className={s.title}>{product.title}</div>
            <div className={s.price}>
                {priceRu(product.price)}
                {product.oldPrice &&
                <Tag className={s.oldPrice} color="success">{priceRu(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={s.credit}>
                {priceRu(product.credit)} / <span className={s.month}>мес</span>
            </div>
            <div className={s.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
            <div className={s.tags}>{product.categories.map(c => <Tag className={s.tag} key={c}>{c}</Tag>)}</div>
            <div className={s.priceTitle}>Цена</div>
            <div className={s.creditTitle}>Кредит</div>
            <div className={s.rateTitle}>
                {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
            </div>
            <Divider className={s.hr}/>
            <div className={s.description}>{product.description}</div>
            <div className={s.features}>
                {product.characteristics.map(c => (
                    <div key={c.name} className={s.chars}>
                        <span className={s.charsName}>{c.name}</span>
                        <span className={s.charsDots}/>
                        <span className={s.charsValue}>{c.value}</span>
                    </div>
                ))}
            </div>
            <div className={s.advantagesBlock}>
                {product.advantages &&
                <div className={s.advantages}>
                    <h6>Преимущества</h6>
                    {product.advantages}
                </div>}
                {product.disadvantages &&
                <div className={s.disadvantages}>
                    <h6>Недостатки</h6>
                    {product.disadvantages}
                </div>}
            </div>
            <Divider className={cn(s.hr, s.divider)}/>
            <div className={s.actions}>
                <Button>Узнать подробнее</Button>
                <Button variant={'outline-secondary'} icon={'right'}>Читать отзывы</Button>
            </div>
        </Card>
    )
}