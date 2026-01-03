"use client"
import Image from "next/image"

export default function Home() {
  const addresses = [
    {
      country: "INDIA",
      address: "108 to 111, First Floor, Tower B, Spaze Business Park, Sector-66, Gurgaon"
    },
    {
      country: "UAE",
      address: "Meydan Grandstand, 6thFloor, Meydan Road, Nad Al Sheba, Dubai, U.A.E"
    },
    {
      country: "UGANDA",
      address: "Plot 40, Wanainchi Road, Ministers' Village, Ntinda, Kampala, PO Box 11580"
    },
    {
      country: "ETHIOPIA",
      address: "Office no-1203, Eldasol Building, Mike Leyland Street, Bole Sub-City, Woreda 4, House no. New, Addis Ababa, Ethiopia"
    },
    {
      country: "PORTUGAL",
      address: "Rua Joaquim Brandao, 13, Floor 1, Setubal, Portugal"
    }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-8 text-[#085D36]">
      
      {/* Content Container */}
      <div className="w-full max-w-7xl flex flex-col items-center h-full gap-12 pt-12">
        
        {/* Logo */}
        <div className="relative w-64 h-32">
          <Image
            src="/logo1.png"
            alt="JIVO ENERGY"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Main Text */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide uppercase">
            Website under renovation
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            Contact us at <a href="mailto:africa@jivoenergy.com" className="underline hover:opacity-80 transition-opacity">africa@jivoenergy.com</a>
          </p>
        </div>

        {/* Spacer to push addresses to bottom */}
        <div className="flex-grow" />

        {/* Addresses */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center pb-8 border-t border-[#085D36]/30 pt-8">
          {addresses.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <h3 className="font-bold text-xl tracking-widest uppercase">
                {item.country}
              </h3>
              <p className="text-sm md:text-base leading-relaxed max-w-[250px] font-medium">
                {item.address}
              </p>
              {/* Green underline decoration */}
              <div className="w-12 h-1 bg-[#085D36] mt-2" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
