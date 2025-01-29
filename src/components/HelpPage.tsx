// src\components\HelpPage.tsx
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import ContactSection from './ContactSection'


export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white mt-[99px]">
      {/* Header */}
      <header className="py-8 px-4">
        <h1 className="text-3xl font-medium text-center mb-6">GET HELP</h1>
        <div className="max-w-xl mx-auto relative">
          <Input 
            placeholder="What can we help you with?"
            className="pl-4 pr-10 py-6 text-base rounded-lg border-gray-400"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          
          {/* Left Column */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-medium mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
              <div className="space-y-4 text-base">
                <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <ul className="list-none space-y-2 pl-4">
                  <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                  <li>If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</li>
                  <li>Apple Pay</li>
                </ul>
              </div>

              <div className="my-8">
                <p className="mb-4 font-medium">Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.</p>
                <div className="flex gap-4">
                  <Button className="rounded-full">JOIN US</Button>
                  <Button className="rounded-full">SHOP NIKE</Button>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium">FAQs</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">Does my card need international purchases enabled?</h4>
                    <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                    <p className="text-sm mt-2">Please note, some banks may charge a small transaction fee for international orders.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Can I pay for my order with multiple methods?</h4>
                    <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">What payment method is accepted for SNKRS orders?</h4>
                    <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Why don&apos;t I see Apple Pay as an option?</h4>
                    <p>To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-2xl font-medium text-center mb-8">CONTACT US</h2>
                <ContactSection />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

