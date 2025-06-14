import {
    ChatIcon,
    PersonIcon,
    WorkIcon,
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
        title: "Manage Employee",
        url: "/owner",
        icon: PersonIcon
    },
    {
        id: 2,
        title: "Manage Task",
        url: "/owner/manage-task",
        icon: WorkIcon
    },
    {
        id: 2,
        title: "Message",
        url: "/owner/message",
        icon: ChatIcon
    }
]

export const employeeNavigation: NavigationProps[] = [
    {
        id: 1,
        title: "Manage Task",
        url: "/employee",
        icon: WorkIcon
    },
    {
        id: 2,
        title: "Message",
        url: "/employee/message",
        icon: ChatIcon
    }
]