export const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export const openWhatsApp = (message: string) => {
  if (typeof window === "undefined") return;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
