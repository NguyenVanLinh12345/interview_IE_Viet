import { redirect } from 'next/navigation'
export default function OwnerAuth() {
    redirect('/auth/owner/first-step');
}