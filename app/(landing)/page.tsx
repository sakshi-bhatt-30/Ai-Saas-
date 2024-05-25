import Link from 'next/link';
import { Button } from "@/components/ui/button";

const LandingPage = () => {
    return ( 
        <div>
            landing Page (Unprotected)
            <div>
                <Link href="/sign-in">
                    <Button>Login</Button>
                </Link>
                <Link href="/sign-up">
                    <Button>Sign Up</Button>
                </Link>
            </div>
        </div>
    );
}
 
export default LandingPage;