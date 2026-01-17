import type { AppointmentContent } from "./types";

const appointmentGu: AppointmentContent = {
  hero: {
    badge: "તમારું કન્સલ્ટેશન બુક કરો",
    title: "તમારી એપોઇન્ટમેન્ટ નક્કી કરો",
    description:
      "અમારા કોઈપણ ક્લિનિક પર ડૉ. સ્મિત ભરત સોલંકી સાથે મુલાકાત (Consultation) બુક કરો. સારા સ્વાસ્થ્ય તરફના તમારા સફરમાં અમે તમારી મદદ કરવા માટે તત્પર છીએ."
  },
  methods: {
    title: "તમારી અનુકૂળ રીત પસંદ કરો",
    subtitle: "એપોઇન્ટમેન્ટ લેવાની વિવિધ સરળ અને અનુકૂળ રીતો",
    cards: [
      {
        key: "phone",
        title: "અમને ફોન કરો",
        description: "તમારી એપોઇન્ટમેન્ટ બુક કરવા માટે અમારી ટીમ સાથે સીધી વાત કરો",
        actionText: ""
      },
      {
        key: "whatsapp",
        title: "વોટ્સએપ (WhatsApp)",
        description: "ઝડપી બુકિંગ માટે અમને વોટ્સએપ પર મેસેજ મોકલો",
        actionText: "વોટ્સએપ પર ચેટ કરો"
      },
      {
        key: "email",
        title: "અમને ઈમેલ કરો",
        description: "અમને ઈમેલ મોકલો, અમે તમને જલ્દી જ જવાબ આપીશું",
        actionText: ""
      }
    ]
  },
  locations: {
    title: "વિવિધ લોકેશન પર ઉપલબ્ધ",
    timingLabel: "સમય:",
    viewDetailsLabel: "વિગતો જુઓ →"
  },
  whatToBring: {
    title: "એપોઇન્ટમેન્ટ સમયે સાથે શું લાવવું",
    items: [
      "જૂની ફાઈલો, મેડિકલ રેકોર્ડ્સ અને રિપોર્ટ્સ",
      "હાલમાં ચાલતી દવાઓનું લિસ્ટ",
      "ઈન્સ્યોરન્સ કાર્ડ (જો લાગુ હોય તો)",
      "ફોટો આઈડી (ઓળખ પત્ર)",
      "તમારા પ્રશ્નો અથવા સમસ્યાઓની યાદી જે તમે પૂછવા માંગો છો"
    ]
  },
  cta: {
    title: "શું તમે સારવાર શરૂ કરવા માટે તૈયાર છો?",
    description: "સારા સ્વાસ્થ્ય તરફ પહેલું પગલું ભરો. આજે જ તમારી એપોઇન્ટમેન્ટ બુક કરો.",
    callLabel: "અત્યારે જ કોલ કરો",
    locationsLabel: "ક્લિનિકના લોકેશન જુઓ"
  }
};

export default appointmentGu;
