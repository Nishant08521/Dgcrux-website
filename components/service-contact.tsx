"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ServiceContact({ accent = "blue" }: { accent?: string }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 700))
    alert(`Thanks ${name || "there"}! We'll get back to ${email || "you"} soon.`)
    setName("")
    setEmail("")
    setCompany("")
    setMessage("")
    setSending(false)
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-lg font-bold mb-3">Get a free consult</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className="border rounded-md px-3 py-2" required />
        <input placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} className="border rounded-md px-3 py-2" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-md px-3 py-2 sm:col-span-2" required />
        <textarea placeholder="Tell us about your project" value={message} onChange={(e) => setMessage(e.target.value)} className="border rounded-md px-3 py-2 sm:col-span-2 min-h-[100px]" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <small className="text-xs text-slate-500">No spam — we respect your privacy.</small>
        <Button type="submit" className={`bg-${accent}-600 hover:bg-${accent}-700`} disabled={sending}>{sending ? "Sending..." : "Request Consultation"}</Button>
      </div>
    </form>
  )
}
