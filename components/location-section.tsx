"use client"

import { useState } from "react"
import { Building2, Phone, Mail, ChevronRight } from "lucide-react"

export function LocationSection() {
    const [activeTab, setActiveTab] = useState(0)

    const locations = [
        {
            city: "Bangalore",
            description: "Registered Office",
            address: "108, Tower- 16, Janaadhar shubha phase-2, Attibele - Anekal Rd, Bengaluru, Karnataka 562107",
            phone: "+91 9835166140",
            email: "info@dgcrux.com",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.643873583583!2d77.684!3d12.749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d2c9b6e9bb3%3A0x0!2sDgCrux%20Technology!5e0!3m2!1sen!2sin!4v1700000000000",
        },
        {
            city: "Patna",
            description: "Development Center",
            address: "6th Floor, DS Business Park, Bailey Rd, Saguna More, Kaliket Nagar, Patna, Bihar 801503",
            phone: "+91 9835166140",
            email: "info@dgcrux.com",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5623091147544!2d85.045!3d25.607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed581a00000000%3A0x0!2sDS%20Business%20Park!5e0!3m2!1sen!2sin!4v1700000000001",
        },
        {
            city: "New Delhi",
            description: "Corporate Office",
            address: "123 Business Park, Tech City, New Delhi, India 110001",
            phone: "+91 123-456-7890",
            email: "info@dgcrux.com",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11516.3268482!2d77.209!3d28.613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71dbff1b6b!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000002",
        },
    ]

    return (
        <section className="py-16 bg-white relative overflow-hidden" id="locations">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

                    {/* Left Side: Details */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-3">
                                Our Presence <span className="text-primary tracking-tighter">—</span>
                            </h2>
                            <p className="text-base text-muted-foreground">
                                Click on a location to view it on the map.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {locations.map((loc, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`w-full text-left group relative p-4 rounded-xl border transition-all duration-300 transform ${activeTab === index
                                        ? "bg-white border-primary shadow-lg shadow-primary/5 scale-[1.01]"
                                        : "bg-card/50 border-border hover:bg-white hover:border-primary/20"
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${activeTab === index ? "bg-primary text-white" : "bg-primary/10 text-primary group-hover:bg-primary/20"
                                            }`}>
                                            <Building2 className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-0.5">
                                                <h3 className={`text-lg font-bold transition-colors ${activeTab === index ? "text-primary" : "text-foreground"
                                                    }`}>{loc.city}</h3>
                                                <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${activeTab === index ? "bg-primary text-white" : "bg-primary/10 text-primary"
                                                    }`}>
                                                    {loc.description}
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                                                {loc.address}
                                            </p>

                                            {activeTab === index && (
                                                <div className="flex flex-wrap gap-4 text-[11px] font-medium text-muted-foreground/80 animate-in fade-in slide-in-from-top-1">
                                                    <a href={`tel:${loc.phone}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                                        <Phone className="h-3 w-3 text-primary" />
                                                        <span>{loc.phone}</span>
                                                    </a>
                                                    <a href={`mailto:${loc.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                                        <Mail className="h-3 w-3 text-primary" />
                                                        <span>{loc.email}</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                        <div className={`mt-0.5 transition-transform duration-300 ${activeTab === index ? "rotate-90 text-primary" : "text-muted-foreground"}`}>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Map Container */}
                    <div className="lg:col-span-7">
                        <div className="h-[350px] lg:h-[450px] rounded-2xl overflow-hidden border-4 border-muted/30 shadow-xl relative group/map">
                            <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10 transition-opacity group-hover/map:opacity-0" />
                            <iframe
                                key={activeTab}
                                title={`DgCrux ${locations[activeTab].city} Location`}
                                src={locations[activeTab].mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "contrast(1.1) brightness(0.95)" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full relative z-0 animate-in fade-in duration-700"
                            ></iframe>

                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-md border border-white/50 z-20 flex items-center justify-between transition-transform duration-500 hover:scale-[1.02]">
                                <div className="flex items-center gap-2.5">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <div>
                                        <span className="text-[11px] font-bold text-foreground block">Viewing: {locations[activeTab].city}</span>
                                    </div>
                                </div>
                                <a
                                    href={`https://www.google.com/maps/search/${encodeURIComponent(locations[activeTab].address)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[9px] font-bold uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
                                >
                                    Directions <ChevronRight className="h-2.5 w-2.5" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
