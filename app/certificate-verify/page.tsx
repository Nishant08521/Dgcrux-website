"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, Download, CheckCircle, User, BookOpen, CalendarDays, Hash } from "lucide-react"

export default function CertificateVerifyPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'
  const [certNo, setCertNo] = useState("")
  const [dob, setDob] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [verifiedCert, setVerifiedCert] = useState<any>(null)

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const res = await fetch(`${apiUrl}/api/certificates/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ certificateNumber: certNo, dob })
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || "Verification failed")

      setVerifiedCert(data.certificate)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!verifiedCert?.imagePath) return
    try {
      const res = await fetch(`${apiUrl.replace('/api', '')}${verifiedCert.imagePath}`)
      if (!res.ok) throw new Error("Failed to download certificate image")
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      const extMatch = (verifiedCert.imagePath || "").match(/\.(png|jpg|jpeg|webp|gif)$/i)
      const ext = extMatch ? extMatch[0] : ".png"
      a.download = `certificate-${verifiedCert.certificateNumber}${ext}`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch (err: any) {
      setError(err.message || "Download failed")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#5e17a3]">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center p-4 py-16">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">

          <div className="p-10 pt-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="text-center">
                  <h1 className="text-4xl font-extrabold text-[#5e17a3] mb-2">DgCrux</h1>
                  <p className="text-sm text-slate-500 font-medium">Technology</p>
                </div>
              </div>
              <h1 className="text-3xl font-extrabold text-[#1a1c35]">Certificate Verification</h1>
            </div>

            {!verifiedCert ? (
              <form onSubmit={handleVerify} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm font-medium border border-red-100">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-[#1a1c35] mb-2">Certificate Number</label>
                  <input
                    type="text"
                    required
                    value={certNo}
                    onChange={(e) => setCertNo(e.target.value)}
                    placeholder="Enter certificate number"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5e17a3] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#1a1c35] mb-2">Date of Birth (Optional)</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      placeholder="dd-mm-yyyy"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5e17a3] focus:border-transparent transition-all"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  </div>
                </div>

                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Add by default birth available and excel verification security. Without it, only basic certification will be printed.
                </p>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-4 rounded-lg transition-colors text-lg disabled:opacity-50 mt-4 shadow-lg shadow-amber-500/30"
                >
                  {isLoading ? "Verifying..." : "Verify Certificate"}
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4">
                  <CheckCircle className="w-5 h-5" />
                  <span>Certificate Verified</span>
                  <button
                    onClick={() => setVerifiedCert(null)}
                    className="text-orange-500 ml-1 text-sm hover:underline"
                  >
                    Back
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
                    <User className="w-5 h-5 text-[#1a1c35] mb-3" />
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Name</p>
                    <p className="font-extrabold text-[#1a1c35]">{verifiedCert.name}</p>
                  </div>
                  <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
                    <BookOpen className="w-5 h-5 text-[#1a1c35] mb-3" />
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Course</p>
                    <p className="font-extrabold text-[#1a1c35]">{verifiedCert.course}</p>
                  </div>
                  <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
                    <CalendarDays className="w-5 h-5 text-[#1a1c35] mb-3" />
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Issue Date</p>
                    <p className="font-extrabold text-[#1a1c35]">{new Date(verifiedCert.issueDate).toLocaleDateString()}</p>
                  </div>
                  <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
                    <Hash className="w-5 h-5 text-[#1a1c35] mb-3" />
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Certificate No</p>
                    <p className="font-extrabold text-[#1a1c35]">{verifiedCert.certificateNumber}</p>
                  </div>
                </div>

                <div className="border border-slate-100 bg-slate-50 rounded-xl p-6 mt-6">
                  <p className="text-center text-sm font-bold text-slate-500 mb-4">Certificate Preview</p>
                  <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm p-2">
                    <img
                      src={`${apiUrl.replace('/api', '')}${verifiedCert.imagePath}`}
                      alt="Certificate Preview"
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full bg-[#1a1c35] hover:bg-black text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4 shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  Download Certificate
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
