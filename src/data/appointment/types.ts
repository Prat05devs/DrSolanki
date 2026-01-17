export type AppointmentMethodKey = "phone" | "whatsapp" | "email";

export type AppointmentContent = {
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  methods: {
    title: string;
    subtitle: string;
    cards: Array<{
      key: AppointmentMethodKey;
      title: string;
      description: string;
      actionText: string;
    }>;
  };
  locations: {
    title: string;
    timingLabel: string;
    viewDetailsLabel: string;
  };
  whatToBring: {
    title: string;
    items: string[];
  };
  cta: {
    title: string;
    description: string;
    callLabel: string;
    locationsLabel: string;
  };
};
