type ChatItem = {
    id: string;
    senderId: string;
    content: string;
}
type ListChatItem = Record<string, ChatItem>;

type ConversationItem = {
    lastUserName: string; // 'Nguyễn Công Hoan'
    lastMessage: string; // 'tin nhắn cuối'
    messages: ListChatItem;
}

// string là id của người nhắn với mình
export type ListConversation = Record<string, ConversationItem>;