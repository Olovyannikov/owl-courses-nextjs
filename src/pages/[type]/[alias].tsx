import axios from 'axios';
import React from 'react';
import {API} from "@/client/utils/api";
import {ParsedUrlQuery} from 'node:querystring';
import {firstLevelMenu} from "@/client/utils/utils";
import {TopPageComponent} from "@/client/app/public";
import {withLayout} from '@/client/app/layout/Layout';
import {MenuItem} from '@/client/types/menu.interface';
import {ProductModel} from '@/client/types/product.interface';
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import {TopLevelCategory, TopPageModel} from '@/client/types/page.interface';

const TopPage = ({firstCategory, page, products}: TopPageProps): JSX.Element =>
    <TopPageComponent firstCategory={firstCategory} page={page} products={products}/>

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const m of firstLevelMenu) {
        const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
            firstCategory: m.id
        });

        paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
    }
    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }

    try {
        const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
            firstCategory: firstCategoryItem.id
        });
        if (menu.length === 0) {
            return {
                notFound: true
            }
        }
        const {data: page} = await axios.get<TopPageModel>(API.topPage.byAlias + params.alias);
        const {data: products} = await axios.post<ProductModel[]>(API.product.find, {
            category: page.category,
            limit: 10
        });

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        };
    } catch (e) {
        return {
            notFound: true
        }
    }
}

interface TopPageProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}