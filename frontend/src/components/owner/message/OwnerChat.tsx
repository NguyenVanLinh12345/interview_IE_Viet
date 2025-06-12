import { Avatar, BlockStack, Box, Card, InlineStack, Layout, Text } from "@shopify/polaris";
import RoomChat from "./RoomChat";


export default function OwnerChatComponent() {

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
                                        <Text as="p" variant="headingLg">Farrah</Text>
                                    </InlineStack>
                                </Card>
                            ))
                        }
                    </BlockStack>
                </Layout.Section>

                <Layout.Section>
                    <RoomChat />
                </Layout.Section>
            </Layout>
        </Box>
    )
}