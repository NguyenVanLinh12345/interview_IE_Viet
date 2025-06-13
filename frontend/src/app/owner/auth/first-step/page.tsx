'use client'
import OwnerLoginComponent from "@/components/common/auth/OwnerLoginComponent";
import { useRouter } from "next/navigation";

export default function FirstStep() {
    const router = useRouter();

    const validateEmail = async (content: string) => {

        router.push('/owner/auth/second-step');
    }

    return (
        <OwnerLoginComponent
            role="owner"
            title="Sign In"
            description="Please enter your phone to sign in"
            buttonTitle="Next"
            onSubmit={validateEmail}
        // isLoading
        // error="hehe"
        />
    )
}