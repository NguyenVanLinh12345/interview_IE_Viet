'use client'

import { clsx } from '@/helper/common';
import styles from './index.module.css';
import { SendIcon } from '@shopify/polaris-icons';
import { Button, Card, TextField } from "@shopify/polaris";
import { useState } from 'react';
import { ChatItem } from '@/types/message';
import { useAppContext } from '@/context/context';

type Props = Readonly<{
    listContentChat?: ChatItem[];
    onSend: (content: string) => void | Promise<void>
}>

export default function ChatContent({ listContentChat = [], onSend }: Props) {
    const [content, setContent] = useState('');
    const { state } = useAppContext();

    const handleSend = () => {
        onSend(content);
    }
    return (
        <Card>
            <div className={styles.chatContentContainer}>
                <div className={styles.listChatContent}>
                    {
                        listContentChat.map((element, key) => {
                            return (
                                <div key={key} className={clsx(styles.chatItem, element.senderId === state.userId ? styles.myChatItem : styles.otherChatItem)}>{element.content}</div>
                            )
                        })
                    }
                </div>

                <div className={styles.contentInputContainer}>
                    <div style={{ flex: 1 }}>
                        <TextField maxHeight={'80px'} multiline autoComplete='off' label="message input" labelHidden value={content} onChange={setContent} />
                    </div>
                    <div>
                        <Button onClick={handleSend} icon={SendIcon}>Send</Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}