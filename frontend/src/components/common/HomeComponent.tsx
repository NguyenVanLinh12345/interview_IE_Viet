'use client'

import { BlockStack, Button, Card, Text } from "@shopify/polaris";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmployeeLoading, setIsEmployeeLoading] = useState(false);
  const route = useRouter();

  useEffect(() => {
    fetch('/api/set-access-cookie', {
      method: 'POST',
      body: JSON.stringify({ token: 'hello-nhoa' })
    })
  })
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <BlockStack gap={'300'}>
          <Text as='h1' alignment="center" variant="headingLg">Choose your role</Text>
          <Button loading={isLoading} onClick={() => {
            setIsLoading(true);
            route.push('/owner');
          }} variant="primary">Go to owner function</Button>

          <Button loading={isEmployeeLoading} onClick={() => {
            setIsEmployeeLoading(true);
            route.push('/employee');
          }}>Go to employee function</Button>
        </BlockStack>
      </Card>
    </div>
  );
}