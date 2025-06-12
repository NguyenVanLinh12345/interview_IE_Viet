'use client'

import { clsx } from '@/helper/common';
import styles from './index.module.css';
import { SendIcon } from '@shopify/polaris-icons';
import { Button, Card, TextField } from "@shopify/polaris";
import { useState } from 'react';

type Props = Readonly<{
    onSend: (content: string) => void | Promise<void>
}>

export default function ChatContent({ onSend }: Props) {
    const [content, setContent] = useState('');

    const handleSend = () => {
        onSend(content);
    }
    return (
        <Card>
            <div className={styles.chatContentContainer}>
                <div className={styles.listChatContent}>
                    <div className={clsx(styles.chatItem, styles.myChatItem)}>hehehehehe</div>
                    <div className={clsx(styles.chatItem, styles.otherChatItem)}>sdfsdfsdfsdfsd</div>
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