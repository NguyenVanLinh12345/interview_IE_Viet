const reducer = (state: any, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case "UPDATE-name":
            return { ...newState, name: action.payload };
        case "UPDATE-address":
            return { ...newState, listAddress: action.payload };
        case "ADD-address":
            // Thêm một bản ghi địa chỉ mới
            // Nếu ở đây dùng push, thì khi component render 2 lần, thì sẽ gọi đến reducer 2 lần => tạo 2 address
            return {
                ...newState,
                listAddress: [...newState.listAddress, ["", ""]]
            };
        case "MODIFY-address":
            // Các bản ghi gửi data lên kèm với ID (là index của nó trong mảng), dữ liệu là mảng -> cập nhật dữ liệu mới
            const id = action.payload.id;
            const data = action.payload.data;
            newState.listAddress[id] = data;
            break;
        default:
            console.log("Không bắt được sự kiện trong context");
    }
    return newState;
};

export default reducer;