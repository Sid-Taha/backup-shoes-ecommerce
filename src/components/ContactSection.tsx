// src\components\ContactSection.tsx

import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Phone className="h-12 w-12" />
        </div>
        <p className="font-medium">000 800 919 0566</p>
        <p className="text-sm mt-2">
          Products & Orders: 24 hours a day, 7 days a week
          <br />
          Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
        </p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-4">
          <MessageSquare className="h-12 w-12" />
        </div>
        <p className="font-medium">24 hours a day</p>
        <p className="text-sm">7 days a week</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Mail className="h-12 w-12" />
        </div>
        <p className="font-medium">We will reply within</p>
        <p className="text-sm">five business days</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center mb-4">
          <MapPin className="h-12 w-12" />
        </div>
        <p className="font-medium">STORE LOCATOR</p>
        <p className="text-sm">Find Nike retail stores near you</p>
      </div>
    </div>
  )
}

