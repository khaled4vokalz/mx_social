import ModeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
      <ModeToggle></ModeToggle>
    </div>
  );
}
