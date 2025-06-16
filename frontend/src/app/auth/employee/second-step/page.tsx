'use client'
import OwnerLoginComponent from "@/components/common/auth/OwnerLoginComponent";
import { useRouter } from "next/navigation";

export default function SecondStep() {
    const router = useRouter();

    const handleLogin = async (content: string) => {

        router.replace('/employee');
    }

    return (
        <OwnerLoginComponent
            title="Email verification"
            description="Please enter your code that send to your email address"
            buttonTitle="Login"
            onSubmit={handleLogin}
        // isLoading
        // error="hehe"
        />
    )
}