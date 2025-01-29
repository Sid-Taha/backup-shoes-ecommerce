// src\components\footer.tsx
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link"
function Footer() {
  return (
    <footer className="bg-[#111111] text-white w-full mt-[56px]">
      <div className="max-w-[1440px] mx-auto px-8 ">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 ">
          {/* First Column */}
          <div className="space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-xs uppercase hover:text-gray-300">
                Find a Store
              </Link>
              <Link href="#" className="text-xs uppercase hover:text-gray-300">
                Become a Member
              </Link>
              <Link href="#" className="text-xs uppercase hover:text-gray-300">
                Sign Up for Email
              </Link>
              <Link href="#" className="text-xs hover:text-gray-300">
                Send Us Feedback
              </Link>
              <Link href="#" className="text-[9px] uppercase hover:text-gray-300">
                Student Discounts
              </Link>
            </nav>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider">Get Help</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-[11px] text-[#7E7E7E] hover:text-gray-300">
                Order Status
              </Link>
              <Link href="#" className="text-xs text-[#7E7E7E] hover:text-gray-300">
                Delivery
              </Link>
              <Link href="#" className="text-xs text-[#7E7E7E] hover:text-gray-300">
                Returns
              </Link>
              <Link href="#" className="text-[11px] text-[#7E7E7E] hover:text-gray-300">
                Payment Options
              </Link>
              <Link href="#" className="text-[11px] text-[#7E7E7E] hover:text-gray-300">
                Contact Us On Nike.com Inquiries
              </Link>
              <Link href="#" className="text-[11px] text-[#7E7E7E] hover:text-gray-300">
                Contact Us On All Other Inquiries
              </Link>
            </nav>
          </div>

          {/* Third Column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider">About Nike</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-xs text-[#7E7E7E] hover:text-gray-300">
                News
              </Link>
              <Link href="#" className="text-xs text-[#7E7E7E] hover:text-gray-300">
                Careers
              </Link>
              <Link href="#" className="text-[11px] text-[#7E7E7E] hover:text-gray-300">
                Investors
              </Link>
              <Link href="#" className="text-[11px] text-[#7E7E7E] hover:text-gray-300">
                Sustainability
              </Link>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 lg:justify-end">
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-[#7E7E7E] flex items-center justify-center">
              <FaTwitter className="w-[30px] h-[30px] text-black hover:text-gray-300 " />
              </div>
            </Link>
            <Link href="#" className="p-2">
            <div className="w-[50px] h-[50px] rounded-full bg-[#7E7E7E] flex items-center justify-center">
              <FaFacebookF className="w-[30px] h-[30px] text-black hover:text-gray-300 " />
              </div>
            </Link>
            <Link href="#" className="p-2">
            <div className="w-[50px] h-[50px] rounded-full bg-[#7E7E7E] flex items-center justify-center">
              <TfiYoutube className="w-[30px] h-[30px] text-black hover:text-gray-300 " />
              </div>
            </Link>
            <Link href="#" className="p-2">
            <div className="w-[50px] h-[50px] rounded-full bg-[#7E7E7E] flex items-center justify-center">
              <FaInstagram className="w-[30px] h-[30px] text-black hover:text-gray-300 " />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#222222] py-6">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-xs">India</span>
              </div>
              <p className="text-[11px] text-[#7E7E7E]">© 2023 Nike, Inc. All Rights Reserved</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 mt-4 lg:mt-0">
              <Link href="#" className="text-xs text-[#7E7E7E] hover:text-gray-300">
                Guides
              </Link>
              <Link href="#" className="text-xs text-[#7E7E7E] hover:text-gray-300">
                Terms of Sale
              </Link>
              <Link href="#" className="text-xs text-[#7E7E7E] hover:text-gray-300">
                Terms of Use
              </Link>
              <Link href="#" className="text-[11px] text-[#7E7E7E] hover:text-gray-300">
                Nike Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer