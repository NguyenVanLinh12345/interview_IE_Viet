'use client'
import OwnerLoginComponent from "@/components/common/auth/OwnerLoginComponent";
import { useRouter } from "next/navigation";

export default function SecondStep() {
    const router = useRouter();

    const handleLogin = async (content: string) => {

        router.replace('/owner');
    }

    return (
        <OwnerLoginComponent
            title="Phone number verification"
            description="Please enter your code that send to your phone number"
            buttonTitle="Login"
            onSubmit={handleLogin}
        // isLoading
        // error="hehe"
        />
    )
}