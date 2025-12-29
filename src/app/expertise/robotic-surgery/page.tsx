import Footer from "@/components/global/Footer";
import Link from "next/link";
import { DaVinciComponentsSection, ProceduresSection, JourneySection } from "@/components/sections/robotic-surgery";

export default function RoboticSurgeryPage() {
  return (
    <main className="flex flex-col w-full bg-[#f8f8f5] dark:bg-[#221e10]">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-10 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(33, 20, 17, 0.95) 0%, rgba(33, 20, 17, 0.8) 50%, rgba(33, 20, 17, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyAQIsvib3QmOIl3in3cLtWsmu-PyaXFjq6jqvBpR-a17J-vjrj0qehfoiFPwO4a-zMrYCEaEzshfKqfycgeZEXK7ssT_GgLDEamO8J4Xpvqi9MgcOOvPkw7LDLJyKJhZavY7H81XmE6E4aE4nd3acnZIYaGa4gLVXth9EjQAwuGS9pjkAdUK7Isnal81CrJTu1QKaJkhVmiZX3jk5Wh1rW2k32QUCBYjCXlMSLLV4vxH9IXC3CjB-8DyTXpybCE8M2JwJpqTndA")',
          }}
        ></div>

        <div className="relative z-10 layout-content-container flex flex-col max-w-[1280px] w-full h-full justify-center">
          <div className="max-w-[720px] flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#df4320]/90 text-white text-sm font-medium w-fit border border-[#df4320]">
              <span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
              Da Vinci Robotic Surgery
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight drop-shadow-lg">
              Robotic Surgery:<br />
              <span className="text-[#D4AF37] drop-shadow-md">Precision That Transforms Lives.</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl font-normal leading-relaxed max-w-[600px] drop-shadow-md">
              Experience the future of minimally invasive surgery with the Da Vinci® Robotic System. 
              Unmatched precision, faster recovery, and superior outcomes for complex gynecological procedures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#df4320] hover:bg-[#df4320]/90 transition-all text-white h-12 px-8 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <span className="material-symbols-outlined">calendar_month</span>
                Schedule Consultation
              </Link>
              <button className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-all h-12 px-8 rounded-full text-base font-medium backdrop-blur-sm">
                <span className="material-symbols-outlined">play_circle</span>
                Watch Procedure Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Robotic Surgery */}
      <section className="min-h-screen flex items-center px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl ring-8 ring-[#f8f8f5] dark:ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#df4320]/20 to-transparent z-10"></div>
              <img
                alt="Da Vinci Robotic Surgical System"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyAQIsvib3QmOIl3in3cLtWsmu-PyaXFjq6jqvBpR-a17J-vjrj0qehfoiFPwO4a-zMrYCEaEzshfKqfycgeZEXK7ssT_GgLDEamO8J4Xpvqi9MgcOOvPkw7LDLJyKJhZavY7H81XmE6E4aE4nd3acnZIYaGa4gLVXth9EjQAwuGS9pjkAdUK7Isnal81CrJTu1QKaJkhVmiZX3jk5Wh1rW2k32QUCBYjCXlMSLLV4vxH9IXC3CjB-8DyTXpybCE8M2JwJpqTndA"
              />
            </div>

            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <span className="text-[#df4320] dark:text-[#df4320] font-bold tracking-widest uppercase text-sm">
                Advanced Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white leading-tight">
                The Da Vinci® System: Where Human Expertise Meets Robotic Precision.
              </h2>
              <div className="w-20 h-1.5 bg-[#df4320] rounded-full"></div>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                Robotic surgery represents the pinnacle of minimally invasive surgical technology. The Da Vinci® 
                Robotic System enhances a surgeon's capabilities by providing 3D high-definition vision, 
                magnified views, and instruments that can bend and rotate far beyond the capabilities of the human hand.
              </p>
              <p className="text-[#8a8060] dark:text-gray-300 text-lg leading-relaxed">
                Dr. Smit Bharat Solanki utilizes this advanced technology to perform complex gynecological procedures with 
                unprecedented precision, resulting in smaller incisions, less blood loss, reduced pain, and 
                significantly faster recovery times compared to traditional open surgery.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center gap-2 text-[#181611] dark:text-white font-medium">
                  <span className="material-symbols-outlined text-[#8F9E8B]">check_circle</span>
                  <span>3D HD Visualization</span>
                </div>
                <div className="flex items-center gap-2 text-[#181611] dark:text-white font-medium">
                  <span className="material-symbols-outlined text-[#8F9E8B]">check_circle</span>
                  <span>Enhanced Precision</span>
                </div>
                <div className="flex items-center gap-2 text-[#181611] dark:text-white font-medium">
                  <span className="material-symbols-outlined text-[#8F9E8B]">check_circle</span>
                  <span>Minimal Scarring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Da Vinci System Components */}
      <DaVinciComponentsSection />

      {/* Key Advantages */}
      <section className="min-h-screen flex items-center px-4 sm:px-10 bg-white dark:bg-white/5">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto w-full py-12">
          <div className="text-center mb-16">
            <span className="text-[#df4320] dark:text-[#df4320] font-bold tracking-widest uppercase text-sm">
              Why Robotic Surgery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#181611] dark:text-white mt-4 mb-6">
              Superior Outcomes Through Advanced Technology
            </h2>
            <p className="text-[#8a8060] dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Robotic surgery offers numerous advantages over traditional open and laparoscopic procedures, 
              making it the preferred choice for complex gynecological surgeries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enhanced Vision */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#df4320]/10 text-[#df4320] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">visibility</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                Immersive 3D HD Vision
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                The Da Vinci system provides surgeons with a magnified, high-definition, three-dimensional view 
                of the surgical site. This enhanced visualization allows for better identification of vital 
                structures and more precise tissue manipulation.
              </p>
            </div>

            {/* Precision */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                Enhanced Precision & Control
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                Robotic instruments can rotate 360 degrees and bend far beyond the human wrist's range of motion. 
                Combined with tremor filtration technology, this enables movements with precision within 1mm, 
                reducing the risk of damage to surrounding tissues.
              </p>
            </div>

            {/* Smaller Incisions */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#8DA399]/10 text-[#8DA399] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">healing</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                Tiny Incisions, Faster Recovery
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                Procedures are performed through incisions just a few millimeters long. This results in 
                significantly less pain, minimal scarring, reduced risk of infection, and a much quicker 
                return to daily activities—often within days instead of weeks.
              </p>
            </div>

            {/* Less Blood Loss */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#df4320]/10 text-[#df4320] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">water_drop</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                Reduced Blood Loss
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                The precision of robotic instruments allows for more accurate dissection and coagulation, 
                minimizing blood loss during surgery. This reduces the need for blood transfusions and 
                contributes to a safer surgical experience.
              </p>
            </div>

            {/* Shorter Hospital Stay */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">home</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                Shorter Hospital Stay
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                Patients typically experience shorter hospital stays with robotic surgery. Many procedures 
                that once required several days in the hospital can now be performed on an outpatient basis 
                or with just an overnight stay.
              </p>
            </div>

            {/* Better Outcomes */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-[#e5dddc] hover:shadow-2xl transition-all duration-300">
              <div className="size-16 bg-[#8DA399]/10 text-[#8DA399] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">trending_up</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181611] dark:text-white mb-3">
                Superior Surgical Outcomes
              </h3>
              <p className="text-[#8a8060] dark:text-gray-300 leading-relaxed">
                Studies have shown that robotic surgery can result in better outcomes for complex procedures, 
                including lower complication rates, improved preservation of healthy tissue, and higher 
                patient satisfaction scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Performed */}
      <ProceduresSection />

      {/* The Robotic Surgery Experience */}
      <JourneySection />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#df4320] to-[#b93518] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="layout-container flex h-full grow flex-col relative z-10">
          <div className="px-5 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 items-center gap-10 text-center">
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Experience the Future of Minimally Invasive Surgery
              </h2>
              <p className="text-white/90 text-xl max-w-2xl">
                Discover how robotic surgery can transform your treatment experience with precision, 
                faster recovery, and superior outcomes. Schedule a consultation to learn if robotic 
                surgery is right for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact" className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white text-[#df4320] text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <span className="material-symbols-outlined mr-2 text-2xl">calendar_month</span>
                  Book Robotic Surgery Consultation
                </Link>
                <Link href="tel:+919712982198" className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-white text-white text-lg font-bold hover:bg-white/10 transition-all duration-300">
                  <span className="material-symbols-outlined mr-2 text-2xl">call</span>
                  Speak to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

