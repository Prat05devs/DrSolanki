import type { AppointmentContent } from "./types";

const appointmentHi: AppointmentContent = {
  hero: {
    badge: "अपना परामर्श (Consultation) बुक करें",
    title: "अपना अपॉइंटमेंट शेड्यूल करें",
    description:
      "डॉ. स्मित भरत सोलंकी के साथ हमारे किसी भी क्लिनिक में परामर्श बुक करें। बेहतर स्वास्थ्य की दिशा में हम आपकी हर संभव सहायता के लिए तत्पर हैं।"
  },
  methods: {
    title: "अपॉइंटमेंट का तरीका चुनें",
    subtitle: "अपॉइंटमेंट बुक करने के कई आसान और सुविधाजनक विकल्प",
    cards: [
      {
        key: "phone",
        title: "हमें कॉल करें",
        description: "अपॉइंटमेंट बुक करने के लिए हमारी टीम से सीधे बात करें",
        actionText: ""
      },
      {
        key: "whatsapp",
        title: "व्हाट्सएप (WhatsApp)",
        description: "जल्दी बुकिंग के लिए हमें व्हाट्सएप पर मैसेज करें",
        actionText: "व्हाट्सएप पर चैट करें"
      },
      {
        key: "email",
        title: "हमें ईमेल करें",
        description: "हमें ईमेल भेजें, हम जल्द ही आपसे संपर्क करेंगे",
        actionText: ""
      }
    ]
  },
  locations: {
    title: "विभिन्न स्थानों पर उपलब्ध",
    timingLabel: "समय (Timing):",
    viewDetailsLabel: "विवरण देखें →"
  },
  whatToBring: {
    title: "अपॉइंटमेंट के लिए आते समय क्या लाएँ",
    items: [
      "पुराने मेडिकल रिकॉर्ड और टेस्ट रिपोर्ट",
      "वर्तमान में चल रही दवाओं की सूची",
      "इंश्योरेंस कार्ड (यदि लागू हो)",
      "फोटो पहचान पत्र (Photo ID)",
      "उन सवालों या समस्याओं की सूची जिन पर आप चर्चा करना चाहते हैं"
    ]
  },
  cta: {
    title: "बेहतर स्वास्थ्य की शुरुआत करें",
    description: "अच्छे स्वास्थ्य की दिशा में पहला कदम उठाएं। आज ही अपना परामर्श (consultation) तय करें।",
    callLabel: "अभी कॉल करें",
    locationsLabel: "स्थान देखें"
  }
};

export default appointmentHi;
