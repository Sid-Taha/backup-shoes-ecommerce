"use client";
import Image from "next/image";
import { Trash2, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IWishlistItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState<IWishlistItem[]>([]);

  useEffect(() => {
    const wishlist = localStorage.getItem("wishlist");
    const updatedWishlist = wishlist ? JSON.parse(wishlist) : [];
    setWishlistItems(updatedWishlist);
  }, []);

  function handleRemoveItem(index: number) {
    const updatedWishlist = [...wishlistItems];
    updatedWishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlistItems(updatedWishlist);
  }

  function handleAddToCart(item: IWishlistItem) {
    const cart = localStorage.getItem("cart");
    const updatedCart = cart ? JSON.parse(cart) : [];
    const isDuplicate = updatedCart.some((cartItem: IWishlistItem) => cartItem.name === item.name);
    
    if (!isDuplicate) {
      updatedCart.push({ ...item, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-[99px]">
      <h1 className="text-2xl font-medium mb-6">My Wishlist</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Wishlist Items */}
          <div className="space-y-6">
            {wishlistItems.map((item: IWishlistItem, index: number) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-md">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <p className="text-sm">MRP: ₹ {item.price}</p>
                      </div>
                      <div className="flex gap-4 mt-4">
                        <Button variant="outline" size="sm" onClick={() => handleAddToCart(item)}>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleRemoveItem(index)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* You Might Also Like */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">You Might Also Like</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100">
                    <Image
                      src="/cart/pic2.png"
                      alt="Air Jordan"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Air Jordan 1 Mid SE Craft</h3>
                    <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
                    <p className="text-sm font-medium mt-2">MRP: ₹ 12,295.00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-4">Wishlist Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Total Items</span>
                  <span className="text-sm">{wishlistItems.length}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total Value</span>
                  <span>₹ {wishlistItems.reduce((total, item) => total + Number(item.price), 0).toFixed(2).toLocaleString()}</span>
                </div>
                <Link href="/cart">
                  <Button className="w-full">View Cart</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

