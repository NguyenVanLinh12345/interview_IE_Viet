// import useAppContext from '@/hooks/useAppContext';
import { ActionList, TopBar } from '@shopify/polaris';
import { useState, useCallback } from 'react';

type Props = Readonly<{
    toggleSideBar: () => void;
}>

export default function Header({ toggleSideBar }: Props) {
    // const [appState, dispatch] = useAppContext();
    // const name = appState.name;
    const name = 'App name';

    const [userMenuActive, setUserMenuActive] = useState(false);
 
    const toggleUserMenuActive = useCallback(
        () => setUserMenuActive((userMenuActive) => !userMenuActive),
        [],
    );

    // Khi màn hình thu nhỏ, nút menu sẽ hiện ra, đây là hàm khi bấm vào
    const toggleMobileNavigationActive = useCallback(() => {
        toggleSideBar();
    }, []);

    // Đây là danh sách hiển thị khi bấm vào ô tên ở bên phải
    const userMenuActions = [
        {
            items: [{ content: 'Bài tập số 2' }],
        },
        {
            items: [{ content: 'Ngày bắt đầu 18/7' }],
        },
    ];

    // Đây là ô tên ở bên phải
    const userMenuMarkup = (
        <TopBar.UserMenu
            actions={userMenuActions}
            name={name.split(" ").slice(-1).toString()}
            detail={name}
            initials={name.split(" ").slice(-1)[0][0]} // split lấy ra danh sách từ, slice(-1) lấy ra từ cuối dưới dạng mảng, [0] đầu lấy ra phần tử đầu tiên, [0] thứ 2 lấy ra từ đầu tiên
            open={userMenuActive}
            onToggle={toggleUserMenuActive}
        />
    );

    // Đây là danh sách hiển thị kết quả tìm kiếm
    const searchResultsMarkup = (
        <ActionList
            items={[{ content: 'Shopify help center' }, { content: 'Community forums' }]}
        />
    );

    return (
        <TopBar
            showNavigationToggle
            onNavigationToggle={toggleMobileNavigationActive}
            userMenu={userMenuMarkup}
            searchResults={searchResultsMarkup}
        />
    );
}