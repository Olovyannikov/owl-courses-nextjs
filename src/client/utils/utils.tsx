import {FirstLevelMenuItem} from "@/client/types/menu.interface";
import {TopLevelCategory} from "@/client/types/page.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: 'hat', id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: 'cloud', id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: 'books', id: TopLevelCategory.Books},
    {route: 'products', name: 'Товары', icon: 'items', id: TopLevelCategory.Products},
];

export const priceRu = (price: number): string =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").concat(" ₽");

export const declOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}