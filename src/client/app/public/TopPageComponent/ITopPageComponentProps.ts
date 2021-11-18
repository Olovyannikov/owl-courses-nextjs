import {MenuItem} from "@/client/types/menu.interface";
import {TopLevelCategory, TopPageModel} from "@/client/types/page.interface";
import {ProductModel} from "@/client/types/product.interface";

interface ITopPageComponentProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}