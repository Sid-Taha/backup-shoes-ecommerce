// src\app\join-us\page.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function NikeSignupForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 mt-[99px]">
      <Card className="w-full max-w-[380px]">
        <CardHeader className="space-y-6">
          <div className="flex justify-center">
            <Image src="/nikeLogo.png" alt="Nike Logo" width={60} height={22} className="h-[17px] w-auto" />
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-lg font-bold">BECOME A NIKE MEMBER</h1>
            <p className="text-sm text-muted-foreground">
              Create your Nike Member profile and get first access to the very best of Nike products, inspiration and
              community.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Input type="email" placeholder="Email address" />
            </div>
            <div className="space-y-2">
              <Input type="password" placeholder="Password" />
            </div>
            <div className="space-y-2">
              <Input placeholder="First Name" />
            </div>
            <div className="space-y-2">
              <Input placeholder="Last Name" />
            </div>
            <div className="space-y-2">
              <Input type="date" placeholder="Date of Birth" />
              <p className="text-xs text-muted-foreground text-center">
                Get a Nike Member Reward every year on your Birthday.
              </p>
            </div>
            <div className="space-y-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="India" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="uk">UK</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <RadioGroup defaultValue="male" className="flex gap-4">
              <div className="flex-1">
                <Label
                  htmlFor="male"
                  className="flex items-center justify-center h-10 border rounded-md cursor-pointer hover:bg-accent"
                >
                  <RadioGroupItem value="male" id="male" className="sr-only" />
                  Male
                </Label>
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="female"
                  className="flex items-center justify-center h-10 border rounded-md cursor-pointer hover:bg-accent"
                >
                  <RadioGroupItem value="female" id="female" className="sr-only" />
                  Female
                </Label>
              </div>
            </RadioGroup>
            <div className="flex items-start gap-2">
              <Checkbox id="marketing" className="mt-1" />
              <Label htmlFor="marketing" className="text-xs text-muted-foreground font-normal leading-tight">
                Sign up for emails to get updates from Nike on products, offers and your Member benefits
              </Label>
            </div>
            <div className="text-xs text-center text-muted-foreground">
              By creating an account, you agree to Nike&apos;s{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline">
                Terms of Use
              </Link>
              .
            </div>
            <Button className="w-full bg-black hover:bg-black/90" size="lg">
              JOIN US
            </Button>
            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already a Member? </span>
              <Link href="#" className="underline">
                Sign In
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

