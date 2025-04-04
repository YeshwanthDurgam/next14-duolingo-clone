import { Button } from "@/components/ui/button";

import { 
  ClerkLoaded, 
  ClerkLoading,
  SignedOut, 
  SignUpButton,
  SignInButton,
  SignedIn
  } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-2 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[400px] lg:h-[400px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="master"/>
      </div>
      <div>
        
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[400px] text-center flex-auto">
          Learn, practice and master new languages with Learn4Fun
        </h1> 
      </div >
      <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal" forceRedirectUrl={"/learn"}>
              <Button size={"lg"} variant={"secondary"} className="w-full">
                Get Started
              </Button>
            </SignUpButton>

            <SignInButton mode="modal" forceRedirectUrl={"/learn"}>
              <Button size={"lg"} variant={"primaryOutline"} className="w-full">
                I already Have an account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size={"lg"} variant={"secondary"} className="w-fit" asChild>
              <Link href="/learn">
                Continue Learning
              </Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  )
}
