import { Navigation } from '@shopify/polaris';
import { employeeNavigation, ownerNavigation } from '@/constants/navigation';
import { useCallback, useEffect, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type Props = Readonly<{
    role: 'owner' | 'employee'
}>

export default function LeftSideBar({ role }: Props) {
    const router = useRouter();
    const pathname = usePathname();

    const navigation = useMemo(() => {
        if (role === 'owner') return ownerNavigation;
        return employeeNavigation;
    }, [role])

    // Hàm dùng để thay đổi page
    const changePage = useCallback((placeTo: string) => {
        router.push(placeTo);
    }, []);

    useEffect(() => {
        const pageSite = navigation.find((element) => element.url === pathname);
        if (pageSite) {
            document.title = pageSite.title;
        }
    }, [pathname]);

    return (
        <Navigation location="/">
            <Navigation.Section
                separator
                title={role === 'owner' ? "Owner" : "Employee"}
                items={
                    navigation.map((element) => (
                        {
                            label: element.title,
                            icon: element.icon,
                            onClick: () => changePage(element.url),
                            selected: pathname === element.url
                        }
                    ))
                }
            />
        </Navigation>
    );
}