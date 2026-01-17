export default function TermsAndConditionsPage() {
  return (
    <section className="bg-[#f8f8f5] dark:bg-[#221e10] py-16 sm:py-20">
      <div className="layout-content-container flex flex-col max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#8FA392] dark:text-[#8FA392] font-bold tracking-widest uppercase text-sm">
          Terms &amp; Conditions
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
          Website Use and Medical Disclaimer
        </h1>
        <div className="space-y-4 text-[#8a8060] dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          <p>
            The information on this website is provided for general awareness and does not replace professional medical
            advice, diagnosis, or treatment. For personalized guidance, please consult Dr. Smit Bharat Solanki directly.
          </p>
          <p>
            Appointments, procedures, and outcomes depend on individual evaluation. Availability and schedules are
            subject to change based on medical needs and clinic operations.
          </p>
          <p>
            This website may link to external resources for convenience. We are not responsible for the content or
            privacy practices of external websites.
          </p>
          <p>
            By using this website, you agree to these terms. We may update this page periodically to reflect operational
            or regulatory changes.
          </p>
        </div>
      </div>
    </section>
  );
}
