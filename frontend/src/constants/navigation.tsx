import {
    HomeIcon,
    OrderIcon,
} from '@shopify/polaris-icons';
import { FunctionComponent, SVGProps } from 'react';

export type NavigationProps = {
    id: number,
    title: string,
    url: string,
    icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export const ownerNavigation: NavigationProps[] = [
    {
        id: 1,
        title: "Home",
        url: "/",
        icon: HomeIcon
    },
    {
        id: 2,
        title: "Address",
        url: "/address",
        icon: OrderIcon
    }
]

export const employeeNavigation: NavigationProps[] = [
    {
        id: 1,
        title: "Home",
        url: "/",
        icon: HomeIcon
    },
    {
        id: 2,
        title: "Address",
        url: "/address",
        icon: OrderIcon
    }
]