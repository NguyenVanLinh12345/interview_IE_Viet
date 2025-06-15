export type ChatItem = {
    senderId: string;
    content: string;
}

type ConversationItem = {
    participants: string[];
    lastUserName: string; // 'Nguyễn Công Hoan' -> Tên để hiện ra cho danh sách tin nhắn
    lastMessage: string; // 'tin nhắn cuối'
    messages: ChatItem[];
}

// string là id của người nhắn với mình
export type ListConversation = Record<string, ConversationItem>;