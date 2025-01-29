// src\components\header.tsx
"use client"
import { Menu, Search, Heart, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { searchName } from '@/globalState/globalState'
import { UserButton } from '@clerk/nextjs'

function Header() {
  
  const [value, setValue] = useAtom(searchName)
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      {/* Top bar */}
      <div className="h-9 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto h-full flex justify-between items-center px-8 text-xs">
          <Image src={"/topDivIcon.png"} alt={"Icon"} width={24} height={24} className="ml=[48px] hidden md:block"></Image>

          {/* nav */}
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:text-gray-600">Find a Store</Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact-us" className="hover:text-gray-600">Help</Link>
            <span className="text-gray-300">|</span>
            <Link href="/join-us" className="hover:text-gray-600">Join Us</Link>
            <span className="text-gray-300">|</span>
            {/* <Link href="/login" className="hover:text-gray-600">Sign In</Link> */}
            <UserButton afterSignOutUrl="/" />
          </nav>
        </div>
      </div>

        

      {/* Main header */}
      <div className="h-16 bg-white border-b">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={"/nikeLogo.png"} alt={"Logo"} width={59} height={21}></Image>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-sm font-medium hover:text-gray-600">New & Featured</Link>
            <Link href="/products" className="text-sm font-medium hover:text-gray-600">Men</Link>
            <Link href="/products" className="text-sm font-medium hover:text-gray-600">Women</Link>
            <Link href="/products" className="text-sm font-medium hover:text-gray-600">Kids</Link>
            <Link href="/products" className="text-sm font-medium hover:text-gray-600">Sale</Link>
            <Link href="/products" className="text-sm font-medium hover:text-gray-600">SNKRS</Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#" className="text-lg font-medium">New & Featured</Link>
                <Link href="#" className="text-lg font-medium">Men</Link>
                <Link href="#" className="text-lg font-medium">Women</Link>
                <Link href="#" className="text-lg font-medium">Kids</Link>
                <Link href="#" className="text-lg font-medium">Sale</Link>
                <Link href="#" className="text-lg font-medium">SNKRS</Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-[180px] bg-[#F5F5F5] border-none rounded-full pl-10"
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}
              />
              <Search className="w-5 h-5 absolute left-3 text-gray-400" />
            </div>

            {/* Icons */}
            <Link href={"/wishlist"}>
              <Button variant="ghost" size="icon">
                <Heart className="w-6 h-6" />
              </Button>
            </Link>
            <Link href={"/cart"}>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header