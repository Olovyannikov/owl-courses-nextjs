import cn from "classnames";
import Image from 'next/image';
import {motion} from "framer-motion";
import s from './Product.module.scss';
import {ForwardedRef, forwardRef, useRef, useState} from "react";
import {IProductProps} from "./IProductProps";
import {declOfNum, priceRu} from "@/client/utils/utils";
import {Button, Card, Divider, Rating, Review, ReviewForm, Tag} from "@/components/index";

export const Product = motion(forwardRef(({
                                              product,
                                              className,
                                              ...props
                                          }: IProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewsRef = useRef<HTMLDivElement>(null);

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewsRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
        reviewsRef.current?.focus();
    }

    const variants = {
        visible: {opacity: 1, height: 'fit-content', marginBottom: '15px'},
        hidden: {opacity: 0, height: 0}
    };

    return (
        <div className={className} {...props} ref={ref}>
            <Card className={s.product}>
                <div className={s.logo}>
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
                    <a href="#ref"
                       onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a>
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
                            <p>Преимущества</p>
                            {product.advantages}
                        </div>}
                    {product.disadvantages &&
                        <div className={s.disadvantages}>
                            <p>Недостатки</p>
                            {product.disadvantages}
                        </div>}
                </div>
                <Divider className={cn(s.hr, s.divider)}/>
                <div className={s.actions}>
                    <Button>Узнать подробнее</Button>
                    <Button onClick={() => setIsReviewOpened(!isReviewOpened)} variant={'outline-secondary'}
                            arrow={isReviewOpened ? 'down' : 'right'}>Читать отзывы</Button>
                </div>
            </Card>
            <Card animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial="hidden" variant="blue"
                  className={cn(s.review)}  ref={reviewsRef} tabIndex={isReviewOpened ? 0 : -1}>
                {product.reviews.map(r => <div key={r._id}><Review review={r}/><Divider/></div>)}
                <ReviewForm isOpened={isReviewOpened} productId={product._id}/>
            </Card>
        </div>
    )
}));