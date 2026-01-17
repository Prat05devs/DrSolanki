import type { AppointmentContent } from "./types";

const appointmentEn: AppointmentContent = {
  hero: {
    badge: "Book Your Consultation",
    title: "Schedule Your Appointment",
    description:
      "Book a consultation with Dr. Smit Bharat Solanki at any of our clinic locations. We're here to help you on your journey to better health."
  },
  methods: {
    title: "Choose Your Preferred Method",
    subtitle: "Multiple convenient ways to schedule your appointment",
    cards: [
      {
        key: "phone",
        title: "Call Us",
        description: "Speak directly with our team to schedule your appointment",
        actionText: ""
      },
      {
        key: "whatsapp",
        title: "WhatsApp",
        description: "Message us on WhatsApp for quick appointment booking",
        actionText: "Chat on WhatsApp"
      },
      {
        key: "email",
        title: "Email Us",
        description: "Send us an email and we'll get back to you promptly",
        actionText: ""
      }
    ]
  },
  locations: {
    title: "Available at Multiple Locations",
    timingLabel: "Timing:",
    viewDetailsLabel: "View Details →"
  },
  whatToBring: {
    title: "What to Bring to Your Appointment",
    items: [
      "Previous medical records and test reports",
      "List of current medications",
      "Insurance card (if applicable)",
      "Photo ID",
      "List of questions or concerns you'd like to discuss"
    ]
  },
  cta: {
    title: "Ready to Begin Your Journey?",
    description: "Take the first step towards better health. Schedule your consultation today.",
    callLabel: "Call Now",
    locationsLabel: "View Locations"
  }
};

export default appointmentEn;
