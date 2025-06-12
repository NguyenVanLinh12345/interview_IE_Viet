import { Avatar, BlockStack, Box, Card, InlineStack, Layout, Text } from "@shopify/polaris";
import ChatContent from "./ChatContent";

export default function ChatBoard() {

    const handleSend = async (content: string) => {
        console.log(content);
    }

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