"use client";
import * as React from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useEffect, useState } from "react";
import { postReq } from "@/services/shipmentApi";
import { toast } from "sonner";

interface ICart {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function CheckoutForm() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const [postalCode, setPostalCode] = useState("");
  const [locality, setLocality] = useState("");
  const [pan, setPan] = useState("");

  const [cartItem, setCartItem] = useState<ICart[]>([]);
  const [shipCost] = useState(0);

  const [shipDetail, setShipDetail] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("cart");
    const cart = data ? JSON.parse(data) : [];
    setCartItem(cart);

    // const ShipmentData = localStorage.getItem("ShipmentData");
    // const shipData = ShipmentData ? JSON.parse(ShipmentData) : null;

    // Check if shipData exists and has the expected structure
    // if (shipData && shipData.shipment_cost && shipData.shipment_cost.amount) {
    //   const shipCost = shipData.shipment_cost.amount.toFixed(2);
    //   setShipCost(shipCost);
    // } else {
    //   console.error("Invalid or missing ShipmentData in local storage");
    // }
  }, []);

  function handlePayment() {
    if (shipDetail) {
      toast.success('payment successful ✅', {
        className: 'text-lg',
        style: { fontSize: '18px' },
      });
      setShipDetail(false)
      localStorage.setItem("cart", JSON.stringify([]));
      setCartItem([]);
    } else {
      toast.warning('Invalid Shipping Detail ⚠️', {
        className: 'text-lg',
        style: { fontSize: '18px' },
      });
    }
    
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submitData = {
      name,
      phone,
      address,
      city,
    }

    const data = await postReq(submitData);

    if (data) {
      setShipDetail(true);
      localStorage.setItem("ShipmentData", JSON.stringify(data));
      
      toast.success('🚚 Shipment Detail Added Successfully ✅', {
        className: 'text-lg',
        style: { fontSize: '18px' },
      });
    }
  };

  const totalAmount =
    Number(
      cartItem.reduce(
        (acc: number, item: ICart) => acc + Number(item.price * item.quantity),
        0
      )
    ) + Number(shipCost ? shipCost : 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-[99px]">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {/* Left Column - Form */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">
              How would you like to get your order?
            </h2>
            <p className="text-sm text-gray-500">
              Customs regulation for India require a copy of the
              recipient&apos;s KYC. The address on the KYC needs to match the
              shipping address.
            </p>
            <Button
              variant="outline"
              className="w-full justify-start gap-4 rounded-xl border-2 py-6"
            >
              <div className="h-6 w-6 rounded-full border-2" />
              Deliver It
            </Button>
          </div>










          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Enter Your Details:</h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Input
                    required
                    className="rounded-md py-6"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    required
                    type="email"
                    className="rounded-md py-6"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    required
                    className="rounded-md py-6"
                    placeholder="Enter Your Phone Number"
                    value={phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    required
                    className="rounded-md py-6"
                    placeholder="Enter Your Address"
                    value={address}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    required
                    className="rounded-md py-6"
                    placeholder="Describe Your City"
                    value={city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                  />
                </div>
        
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    required
                    className="rounded-md py-6"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPostalCode(e.target.value)}
                  />

                  <Input
                    required
                    className="rounded-md py-6"
                    placeholder="Locality"
                    value={locality}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocality(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-medium">What&apos;s your PAN?</h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Input
                    required
                    className="rounded-md py-6"
                    placeholder="PAN"
                    value={pan}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPan(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">
                    Enter your PAN to enable payment with UPI, Net Banking or
                    local card methods
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="save-pan" />
                  <Label htmlFor="save-pan" className="text-sm text-gray-500">
                    Save PAN details to Nike Profile
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm text-gray-500">
                  I have read and consent to eShopWorld processing my
                  information in accordance with the Privacy Statement and
                  Cookie Policy. eShopWorld is a trusted Nike partner.
                </Label>
              </div>
              <Button type="submit" className="w-full rounded-full py-6">
                Continue
              </Button>
            </div>
          </form>
        </div>











        {/* Right Column - Order Summary */}
        <Card className="h-fit p-6">
          <h2 className="text-xl font-medium">Order Summary</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>
                ₹{" "}
                {cartItem.reduce(
                  (acc: number, item: ICart) =>
                    acc + Number(item.price * item.quantity),
                  0
                )}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Delivery/Shipping</span>
              <span>{shipCost ? "₹ " + shipCost : "Free"}</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>₹ {totalAmount}</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                (The total reflects the price of your order, including all
                duties and taxes)
              </p>
            </div>

            <div className="space-y-4 pt-6">
              {cartItem.map((item: ICart, index: number) => {
                return (
                  <div className="flex gap-4 relative" key={index}>
                    <Image
                      src={item.image}
                      alt="image"
                      width={80}
                      height={80}
                    />
                    <div className="w-full space-y-1">
                      <p className="text-sm">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty {item.quantity}
                      </p>
                      <p className="text-sm text-gray-500">
                        ₹ {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                );
              })}

              <Button
                className="w-full rounded-full py-6"
                onClick={handlePayment}>
                Let&apos;s Pay
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}