export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#f8f8f5] dark:bg-[#221e10] py-16 sm:py-20">
      <div className="layout-content-container flex flex-col max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#8FA392] dark:text-[#8FA392] font-bold tracking-widest uppercase text-sm">
          Privacy Policy
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
          Your Privacy, Our Responsibility
        </h1>
        <p className="text-[#8a8060] dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
          We respect your privacy and only collect information that you choose to share with us, such as when you call,
          email, or contact us via WhatsApp for appointments and inquiries. We use this information solely to respond to
          your request and coordinate care.
        </p>
        <div className="space-y-4 text-[#8a8060] dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          <p>
            We do not sell or trade your personal information. Information may be shared only with authorized medical or
            administrative staff when it is required to provide care or schedule your visit.
          </p>
          <p>
            This website may use basic analytics to understand site performance and improve the experience. No sensitive
            medical details are collected through analytics.
          </p>
          <p>
            If you have any questions about this policy or how your information is handled, please contact us directly.
          </p>
        </div>
      </div>
    </section>
  );
}
