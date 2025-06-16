'use client'
import OwnerLoginComponent from "@/components/common/auth/OwnerLoginComponent";
import { useRouter } from "next/navigation";

export default function FirstStep() {
    const router = useRouter();

    const validateEmail = async (phoneNumber: string) => {
        const response = await fetch('/api/create-new-access-code', {
            method: 'POST',
            body: JSON.stringify({
                phoneNumber: phoneNumber
            })
        })
        console.log(await response.json())
        router.push('/auth/owner/second-step');
    }

    return (
        <OwnerLoginComponent
            title="Sign In"
            description="Please enter your phone to sign in"
            buttonTitle="Next"
            onSubmit={validateEmail}
        // isLoading
        // error="hehe"
        />
    )
}