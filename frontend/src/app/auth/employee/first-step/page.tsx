'use client'
import OwnerLoginComponent from "@/components/common/auth/OwnerLoginComponent";
import { useRouter } from "next/navigation";

export default function FirstStep() {
    const router = useRouter();

    const validateEmail = async (email: string) => {
        const response = await fetch('/api/create-new-access-code', {
            method: 'POST',
            body: JSON.stringify({
                email: email
            })
        })
        console.log(await response.json())
        router.push('/auth/employee/second-step');
    }

    return (
        <OwnerLoginComponent
            type="email"
            title="Sign In"
            description="Please enter your email to sign in"
            buttonTitle="Next"
            onSubmit={validateEmail}
        // isLoading
        // error="hehe"
        />
    )
}