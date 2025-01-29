// src\app\login\page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

export default function NikeLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 mt-[99px]">
      <Card className="w-full max-w-[380px] shadow-sm">
        <CardHeader className="space-y-6 text-center">
          <Image
            src="/nikeLogo.png"
            alt="Nike"
            width={60}
            height={22}
            className="mx-auto"
          />
          <h1 className="text-lg font-bold tracking-tight text-center">
            YOUR ACCOUNT FOR
            <br />
            EVERYTHING NIKE
          </h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              className="h-10 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="h-10 text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label
                htmlFor="remember"
                className="text-xs text-gray-500 font-normal"
              >
                Keep me signed in
              </Label>
            </div>
            <Link
              href="#"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Forgotten your password?
            </Link>
          </div>
          <div className="text-center text-xs text-gray-500 px-4">
            By logging in, you agree to Nike&apos;s{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              Terms of Use
            </Link>
            .
          </div>
          <Button className="w-full bg-black hover:bg-gray-900 text-xs h-10">
            SIGN IN
          </Button>
          <div className="text-center text-xs text-gray-500">
            Not a Member?{" "}
            <Link href="#" className="underline">
              Join Us
            </Link>
            .
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

