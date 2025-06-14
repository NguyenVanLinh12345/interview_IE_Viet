'use client'

import styles from './index.module.css';
import { ArrowLeftIcon } from '@shopify/polaris-icons';
import { BlockStack, Box, Button, Card, Text, TextField } from "@shopify/polaris";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = Readonly<{
    title: string;
    description: string;
    buttonTitle: string;
    onSubmit: (value: string) => Promise<void> | void;
    isLoading?: boolean;
    error?: string;
    type?: 'email' | 'text';
}>
export default function OwnerLoginComponent({
    title,
    description,
    buttonTitle,
    isLoading = false,
    onSubmit,
    error = '',
    type = 'text'
}: Props) {
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        onSubmit(content);
    }

    return (
        <div className={styles.screenContainer}>
            <Card>
                <Button onClick={() => router.back()} icon={ArrowLeftIcon}>Back</Button>
                <BlockStack gap={'300'}>
                    <Box maxWidth='300px' paddingInline={'400'}>
                        <Text as='h1' variant='headingLg' alignment='center'>{title}</Text>
                        <Text as='p' variant='bodyLg' alignment='center'>{description}</Text>
                    </Box>

                    <TextField
                        label='filed data'
                        labelHidden
                        autoComplete='off'
                        type={type}
                        value={content}
                        onChange={setContent}
                        error={error}
                    />
                    <Button
                        onClick={handleSubmit}
                        variant='primary'
                        fullWidth
                        loading={isLoading}
                    >{buttonTitle}</Button>
                </BlockStack>
            </Card>
        </div>
    )
}