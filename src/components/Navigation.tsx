// src\components\Navigation.tsx
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-[232px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Icons Section */}
        <div className="space-y-6">
          <h2 className="text-sm font-medium text-gray-900">Icons</h2>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Air Force 1</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Huarache</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Air Max 90</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Air Max 95</Link>
            </li>
          </ul>
        </div>

        {/* Shoes Section */}
        <div className="space-y-6">
          <h2 className="text-sm font-medium text-gray-900">Shoes</h2>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">All Shoes</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Custom Shoes</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Jordan Shoes</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Running Shoes</Link>
            </li>
          </ul>
        </div>

        {/* Clothing Section */}
        <div className="space-y-6">
          <h2 className="text-sm font-medium text-gray-900">Clothing</h2>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">All Clothing</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Modest Wear</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Hoodies & Pullovers</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Shirts & Tops</Link>
            </li>
          </ul>
        </div>

        {/* Kids Section */}
        <div className="space-y-6">
          <h2 className="text-sm font-medium text-gray-900">Kids&apos;</h2>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Infant & Toddler Shoes</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Kids&apos; Shoes</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Kids&apos; Jordan Shoes</Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Kids&apos; Basketball Shoes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

