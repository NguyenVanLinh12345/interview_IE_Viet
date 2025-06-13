'use client'
import OwnerLoginComponent from "@/components/common/auth/OwnerLoginComponent";
import { useRouter } from "next/navigation";

export default function FirstStep() {
    const router = useRouter();

    const validateEmail = async (content: string) => {

        router.push('/employee/auth/second-step');
    }

    return (
        <OwnerLoginComponent
            type="email"
            role="employee"
            title="Sign In"
            description="Please enter your email to sign in"
            buttonTitle="Next"
            onSubmit={validateEmail}
        // isLoading
        // error="hehe"
        />
    )
}