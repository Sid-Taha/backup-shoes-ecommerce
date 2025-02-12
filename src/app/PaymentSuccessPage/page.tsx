// src\app\PaymentSuccessPage\page.tsx
"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { generatePDF } from "@/components/pdfGenerator"

export default function PaymentSuccessPage() {
  
  const [orderDetails, setOrderDetails] = useState({
    id: '',
    date: 0,
    amount: 0
  });

  useEffect(() => {
    // Get payment details from localStorage
    const details = localStorage.getItem('paymentDetails');
    if (details) {
      const parsedDetails = JSON.parse(details);
      setOrderDetails(parsedDetails);
      // Clear localStorage after reading
      localStorage.removeItem('paymentDetails');
    }
  }, []);

   // Format amount to dollars
   const formattedAmount = (orderDetails.amount / 100).toFixed(2);
  
   // Format date
   const formattedDate = new Date(orderDetails.date * 1000).toLocaleDateString();
  
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const handleDownload = async () => {
    setIsGeneratingPDF(true)
    await generatePDF()
    setIsGeneratingPDF(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="text-green-500 w-16 h-16 animate-bounce" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-green-700">Payment Successful!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">Thank you for your purchase. Your order has been processed successfully.</p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-gray-700 mb-2">Order Details</h3>
          <p className="text-sm text-gray-600">Order #: {orderDetails.id}</p>
          <p className="text-sm text-gray-600">Date: {formattedDate}</p>
          <p className="text-sm text-gray-600">Total: ${formattedAmount}</p>
          </div>
          <p className="text-sm text-gray-500">A confirmation email has been sent to your registered email address.</p>
        </CardContent>
        <CardFooter className="flex justify-center gap-4 flex-wrap">
          <Link href="/">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button
            onClick={handleDownload}
            disabled={isGeneratingPDF}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            {isGeneratingPDF ? "Generating..." : "Download Payment Slip"}
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

