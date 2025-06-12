'use client'

import styles from './index.module.css';
import { ArrowLeftIcon } from '@shopify/polaris-icons';
import { BlockStack, Box, Button, Card, Text, TextField } from "@shopify/polaris";

type Props = Readonly<{
    isLoading?: boolean;
}>
export default function OwnerLoginComponent({
    isLoading = false,

}: Props) {

    return (
        <div className={styles.screenContainer}>
            <Card>
                <Button icon={ArrowLeftIcon}>Back</Button>
                <BlockStack gap={'300'}>
                    <Box maxWidth='300px' paddingInline={'400'}>
                        <Text as='h1' variant='headingLg' alignment='center'>Sign In</Text>
                        <Text as='p' variant='bodyLg' alignment='center'>Please enter your phone to sign in</Text>
                    </Box>

                    <TextField
                        label='filed data'
                        labelHidden
                        autoComplete='off'
                        type='text'
                        value=''
                        onChange={() => { }}
                    />
                    <Button
                        variant='primary'
                        fullWidth
                        loading={isLoading}
                    >Login</Button>
                </BlockStack>
            </Card>
        </div>
    )
}