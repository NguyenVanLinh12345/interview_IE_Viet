'use client'

import { Avatar, BlockStack, Box, Card, InlineStack, Layout, Text } from "@shopify/polaris";
import ChatContent from "./ChatContent";
import { useEffect, useRef } from "react";

import { io, Socket } from 'socket.io-client';

interface ServerToClientEvents {
    'chat message': (msg: string) => void;
    'user joined': (username: string) => void;
}

interface ClientToServerEvents {
    'send message': (msg: string) => void;
    'join room': (username: string) => void;
}

// Example usage
// sendMessage('Hello server!');

export default function ChatBoard() {
    const socketRef = useRef<Socket<ServerToClientEvents, ClientToServerEvents> | undefined>(undefined);

    const handleSend = async (content: string) => {
        console.log(content);
    }

    useEffect(() => {
        socketRef.current = io('http://localhost:3001');

        // Event listener for connection
        socketRef.current?.on('connect', () => {
            console.log('Connected to server');
            // Emit join event with user name
            socketRef.current?.emit('join room', 'user123');
        });

        // Event listener for 'chat message'
        socketRef.current?.on('chat message', (msg) => {
            console.log('Message:', msg);
        });

        // Event listener for 'user joined'
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
                            ['1', '2', '3'].map((value) => (
                                <Card key={value}>
                                    <InlineStack gap={'300'}>
                                        <Avatar initials={"Farrah"[0]} name="Farrah" size="xl" />
                                        <div>
                                            <Text as="p" variant="headingLg">Farrah</Text>
                                            <Text as="p" variant="bodyLg">Last message</Text>
                                        </div>
                                    </InlineStack>
                                </Card>
                            ))
                        }
                    </BlockStack>
                </Layout.Section>

                <Layout.Section>
                    <ChatContent onSend={handleSend} />
                </Layout.Section>
            </Layout>
        </Box>
    )
}