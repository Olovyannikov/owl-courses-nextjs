import {FirstLevelMenuItem} from "@/client/types/menu.interface";
import {TopLevelCategory} from "@/client/types/page.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: 'hat', id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: 'cloud', id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: 'books', id: TopLevelCategory.Books},
    {route: 'products', name: 'Товары', icon: 'items', id: TopLevelCategory.Products},
]