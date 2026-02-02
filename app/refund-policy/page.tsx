import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />

      {/* Top banner / breadcrumb */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold uppercase tracking-wide">Refund Policy</h1>
          <div className="text-sm">
            <Link href="/" className="hover:text-yellow-400 hover:underline transition-colors">
              Home
            </Link>
            <span className="mx-1 text-primary-foreground/70">|</span>
            <span className="font-medium">Refund Policy</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Return and Refund Policy</h2>
            <p className="text-sm text-muted-foreground/80">Last updated: November 28, 2023</p>
          </div>

          <div>
            <p>
              Thank you for shopping at DgCrux Technology..
            </p>
            <p className="mt-3">
              If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on
              refunds and returns. This Return and Refund Policy has been created with the help of the Return and Refund
              Policy Generator.
            </p>
            <p className="mt-3">
              The following terms are applicable for any products that You purchased with Us.
            </p>
          </div>

          <div id="interpretation-and-definitions" className="scroll-mt-20">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Interpretation and Definitions</h3>
            <p className="font-semibold text-foreground mb-2">Interpretation</p>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions.
              The following definitions shall have the same meaning regardless of whether they appear in singular or in
              plural.
            </p>
            <p className="mt-3 font-semibold text-foreground mb-2">Definitions</p>
            <p>For the purposes of this Return and Refund Policy:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>
                <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot;
                or &quot;Our&quot; in this Agreement) refers to DgCrux Technology Pvt.Ltd, 6th Floor, DS Business Park,
                Bailey Rd, Saguna More, Kaliket Nagar, Patna, Bihar 801503.
              </li>
              <li>
                <strong>Goods</strong> refer to the items offered for sale on the Service.
              </li>
              <li>
                <strong>Orders</strong> mean a request by You to purchase Goods from Us.
              </li>
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>Website</strong> refers to DgCrux Technology., accessible from{" "}
                <Link
                  href="https://dgcrux.com"
                  className="text-primary hover:text-yellow-400 hover:underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://dgcrux.com
                </Link>
              </li>
              <li>
                <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal
                entity on behalf of which such individual is accessing or using the Service, as applicable.
              </li>
            </ul>
          </div>

          <div id="order-cancellation-rights" className="scroll-mt-20">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Your Order Cancellation Rights</h3>
            <p>
              You are entitled to cancel Your Order within 7 days without giving any reason for doing so.
            </p>
            <p className="mt-3">
              The deadline for cancelling an Order is 7 days from the date on which You received the Goods or on which a
              third party you have appointed, who is not the carrier, takes possession of the product delivered.
            </p>
            <p className="mt-3">
              In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear
              statement. You can inform us of your decision by:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>
                By visiting this page on our website:{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:text-yellow-400 hover:underline transition-colors"
                >
                  https://dgcrux.com/contact.php
                </Link>
              </li>
              <li>
                By phone number:{" "}
                <a
                  href="tel:+919835166140"
                  className="text-primary hover:text-yellow-400 hover:underline transition-colors"
                >
                  +91 9835166140
                </a>
              </li>
              <li>
                By mail:{" "}
                <a
                  href="mailto:info@dgcrux.com"
                  className="text-primary hover:text-yellow-400 hover:underline transition-colors"
                >
                  info@dgcrux.com
                </a>
              </li>
            </ul>
            <p className="mt-3">
              We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will
              use the same means of payment as You used for the Order, and You will not incur any fees for such
              reimbursement.
            </p>
          </div>

          <div id="conditions-for-returns" className="scroll-mt-20">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Conditions for Returns</h3>
            <p>In order for the Goods to be eligible for a return, please make sure that:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>The Goods were purchased in the last 7 days</li>
              <li>The Goods are in the original packaging</li>
            </ul>
            <p className="mt-3">The following Goods cannot be returned:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>The supply of Goods made to Your specifications or clearly personalized.</li>
              <li>
                The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly
                or where the date of expiry is over.
              </li>
              <li>
                The supply of Goods which are not suitable for return due to health protection or hygiene reasons and
                were unsealed after delivery.
              </li>
              <li>
                The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other
                items.
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in
              our sole discretion.
            </p>
            <p className="mt-3">
              Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion
              may not apply to You if it is not permitted by applicable law.
            </p>
          </div>

          <div id="returning-goods" className="scroll-mt-20">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Returning Goods</h3>
            <p>
              You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the
              following address:
            </p>
            <div className="mt-3 p-4 bg-muted/30 rounded-lg">
              <p className="font-semibold text-foreground">6th Floor, DS Business Park, Bailey Rd, Saguna More, Kaliket Nagar, Patna, Bihar 801503</p>
            </div>
            <p className="mt-3">
              We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an
              insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods
              or proof of received return delivery.
            </p>
          </div>

          <div id="gifts" className="scroll-mt-20">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Gifts</h3>
            <p>
              If the Goods were marked as a gift when purchased and then shipped directly to you, You&apos;ll receive a
              gift credit for the value of your return. Once the returned product is received, a gift certificate will
              be mailed to You.
            </p>
            <p className="mt-3">
              If the Goods weren&apos;t marked as a gift when purchased, or the gift giver had the Order shipped to
              themselves to give it to You later, We will send the refund to the gift giver.
            </p>
          </div>

          <div id="contact-us" className="scroll-mt-20">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Contact Us</h3>
            <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>
                By visiting this page on our website:{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:text-yellow-400 hover:underline transition-colors"
                >
                  https://dgcrux.com/contact.php
                </Link>
              </li>
              <li>
                By phone number:{" "}
                <a
                  href="tel:+919835166140"
                  className="text-primary hover:text-yellow-400 hover:underline transition-colors"
                >
                  +91 9835166140
                </a>
              </li>
              <li>
                By mail:{" "}
                <a
                  href="mailto:info@dgcrux.com"
                  className="text-primary hover:text-yellow-400 hover:underline transition-colors"
                >
                  info@dgcrux.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

