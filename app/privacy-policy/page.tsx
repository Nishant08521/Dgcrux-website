import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Top banner / breadcrumb */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold uppercase tracking-wide">Privacy Policy</h1>
          <div className="text-sm">
            <Link href="/" className="hover:text-yellow-400 hover:underline transition-colors">
              Home
            </Link>
            <span className="mx-1 text-primary-foreground/70">|</span>
            <span className="font-medium">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Privacy Policy for dgcrux</h2>
            <p>
              At dgcrux, accessible from{" "}
              <Link href="https://dgcrux.com/" className="text-primary hover:text-yellow-400 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
                https://dgcrux.com/
              </Link>
              , one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of
              information that is collected and recorded by dgcrux and how we use it.
            </p>
          </div>

          <div>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to
              contact us.
            </p>
          </div>

          <div>
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with
              regards to the information that they shared and/or collect in dgcrux. This policy is not applicable to any
              information collected offline or via channels other than this website.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Consent</h3>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Information we collect</h3>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it,
              will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p className="mt-3">
              If you contact us directly, we may receive additional information about you such as your name, email
              address, phone number, the contents of the message and/or attachments you may send us, and any other
              information you may choose to provide.
            </p>
            <p className="mt-3">
              When you register for an Account, we may ask for your contact information, including items such as name,
              company name, address, email address, and telephone number.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">How we use your information</h3>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>
                Communicate with you, either directly or through one of our partners, including for customer service, to
                provide you with updates and other information relating to the website, and for marketing and promotional
                purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Log Files</h3>
            <p>
              dgcrux follows a standard procedure of using log files. These files log visitors when they visit websites.
              All hosting companies do this and a part of hosting services&apos; analytics. The information collected by
              log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information
              that is personally identifiable. The purpose of the information is for analyzing trends, administering the
              site, tracking users&apos; movement on the website, and gathering demographic information.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Our Advertising Partners</h3>
            <p>
              Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below.
              Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier
              access, we hyperlinked to their Privacy Policies below.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>
                <span>Google - </span>
                <Link
                  href="https://policies.google.com/technologies/ads"
                  className="text-primary hover:text-yellow-400 hover:underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/technologies/ads
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Advertising Partners Privacy Policies</h3>
            <p>
              You may consult this list to find the Privacy Policy for each of the advertising partners of dgcrux.
            </p>
            <p className="mt-3">
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are
              used in their respective advertisements and links that appear on dgcrux, which are sent directly to
              users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used
              to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that
              you see on websites that you visit.
            </p>
            <p className="mt-3">
              Note that dgcrux has no access to or control over these cookies that are used by third-party advertisers.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Third Party Privacy Policies</h3>
            <p>
              dgcrux&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to
              consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may
              include their practices and instructions about how to opt-out of certain options.
            </p>
            <p className="mt-3">
              You can choose to disable cookies through your individual browser options. To know more detailed information
              about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h3>
            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>
                Request that a business that collects a consumer&apos;s personal data disclose the categories and specific
                pieces of personal data that a business has collected about consumers.
              </li>
              <li>
                Request that a business delete any personal data about the consumer that a business has collected.
              </li>
              <li>
                Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal
                data.
              </li>
            </ul>
            <p className="mt-3">
              If you make a request, we have one month to respond to you. If you would like to exercise any of these
              rights, please contact us.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">GDPR Data Protection Rights</h3>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>
                <strong>The right to access</strong> – You have the right to request copies of your personal data. We may
                charge you a small fee for this service.
              </li>
              <li>
                <strong>The right to rectification</strong> – You have the right to request that we correct any
                information you believe is inaccurate. You also have the right to request that we complete the information
                you believe is incomplete.
              </li>
              <li>
                <strong>The right to erasure</strong> – You have the right to request that we erase your personal data,
                under certain conditions.
              </li>
              <li>
                <strong>The right to restrict processing</strong> – You have the right to request that we restrict the
                processing of your personal data, under certain conditions.
              </li>
              <li>
                <strong>The right to object to processing</strong> – You have the right to object to our processing of
                your personal data, under certain conditions.
              </li>
              <li>
                <strong>The right to data portability</strong> – You have the right to request that we transfer the data
                that we have collected to another organization, or directly to you, under certain conditions.
              </li>
            </ul>
            <p className="mt-3">
              If you make a request, we have one month to respond to you. If you would like to exercise any of these
              rights, please contact us.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Children&apos;s Information</h3>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents
              and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p className="mt-3">
              dgcrux does not knowingly collect any Personal Identifiable Information from children under the age of 13. If
              you think that your child provided this kind of information on our website, we strongly encourage you to
              contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for
              any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes
              are effective immediately, after they are posted on this page.
            </p>
            <p className="mt-3">
              Our Privacy Policy was created with the help of the Privacy Policy Generator.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Contact Us</h3>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

