'use client'

import { Avatar, BlockStack, Box, Card, InlineStack, Layout, Text } from "@shopify/polaris";
import ChatContent from "./ChatContent";
import { useEffect, useRef, useState } from "react";

import { io, Socket } from 'socket.io-client';
import { listChat } from "@/constants/mockData";
import styles from './index.module.css';
import { clsx } from "@/helper/common";

interface ServerToClientEvents {
    'chat message': (msg: string) => void;
    'user joined': (username: string) => void;
}

interface ClientToServerEvents {
    'send message': (msg: string) => void;
    'join room': (username: string) => void;
}

export default function ChatBoard() {
    const socketRef = useRef<Socket<ServerToClientEvents, ClientToServerEvents> | undefined>(undefined);
    const [listContentChatId, setListContentChatId] = useState<string>('');

    const handleSend = async (content: string) => {
        console.log(content);
    }

    useEffect(() => {
        socketRef.current = io('http://localhost:3001');

        socketRef.current?.on('connect', () => {
            console.log('Connected to server');
            socketRef.current?.emit('join room', 'user123');
        });

        socketRef.current?.on('chat message', (msg) => {
            console.log('Message:', msg);
        });

        socketRef.current?.on('user joined', (username) => {
            console.log(`${username} has joined the chat.`);
        });

        return () => {
            socketRef.current?.disconnect();
        }
    }, [])

    return (
        <Box padding={'400'}>
            <Layout>
                <Layout.Section variant="oneThird">
                    <BlockStack gap={'300'}>
                        {
                            Object.keys(listChat).map((chatItemId) => {
                                const chatItem = listChat[chatItemId];
                                return (
                                    <div className={clsx(styles.listChatItem)} key={chatItemId} onClick={() => setListContentChatId(chatItemId)}> {/* NOSONAR */}
                                        <Card
                                            background={
                                                listContentChatId === chatItemId
                                                    ? "bg-fill-secondary-active"
                                                    : "bg-surface-secondary"
                                            }
                                        >
                                            <InlineStack gap={'300'}>
                                                <Avatar initials={chatItem.lastUserName[0]} name={chatItem.lastUserName} size="xl" />
                                                <div>
                                                    <Text as="p" variant="headingLg">{chatItem.lastUserName}</Text>
                                                    <Text as="p" variant="bodyLg">{chatItem.lastMessage}</Text>
                                                </div>
                                            </InlineStack>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </BlockStack>
                </Layout.Section>

                <Layout.Section>
                    <ChatContent
                        listContentChat={listChat[listContentChatId]?.messages}
                        onSend={handleSend}
                    />
                </Layout.Section>
            </Layout>
        </Box>
    )
}