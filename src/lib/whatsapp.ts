import { contactInfo } from "@/data/siteData";

// Helper function to format phone number for WhatsApp (remove + and spaces)
export const formatPhoneForWhatsApp = (phone: string) => {
  return phone.replace(/[+\s-]/g, "");
};

// Pre-written WhatsApp messages for different contexts
export const whatsappMessages = {
  // General appointment booking
  appointmentBooking: `Hello Dr. Smit Bharat Solanki,

I would like to book an appointment for consultation.

Please let me know your available dates and timings.

Thank you!`,

  // Appointment page - specific booking
  appointmentPage: `Hello Dr. Smit,

I am interested in booking an appointment. Could you please provide me with:
- Available dates and timings
- Preferred location (Ahmedabad/Vadodara)
- Consultation type

Thank you!`,

  // Research/Publications questions
  researchQuestions: `Hello Dr. Smit,

I have questions about your research publications and would like to learn more.

Could you please provide more information?

Thank you!`,

  // FAQ/General questions
  faqQuestions: `Hello Dr. Smit,

I have some questions and would like more information.

Could you please help me?

Thank you!`,

  // General contact from footer
  generalContact: `Hello Dr. Smit Bharat Solanki,

I would like to get in touch with you.

Please let me know the best way to reach you.

Thank you!`,

  // Chatbot - general help
  chatbotHelp: `Hello Dr. Smit,

I need assistance and would like to speak with you.

Could you please help me?

Thank you!`,

  // Contact page - booking
  contactPageBooking: `Hello Dr. Smit,

I would like to schedule a consultation appointment.

Please share:
- Available dates
- Preferred location
- Consultation details

Thank you!`,
};

// Generate WhatsApp URL with pre-filled message
export const getWhatsAppUrl = (messageType: keyof typeof whatsappMessages): string => {
  const phone = formatPhoneForWhatsApp(contactInfo.phone);
  const message = whatsappMessages[messageType];
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

// Open WhatsApp with pre-filled message
export const openWhatsApp = (messageType: keyof typeof whatsappMessages) => {
  if (typeof window === "undefined") return;
  const url = getWhatsAppUrl(messageType);
  window.open(url, "_blank");
};
