export const WHATSAPP_NUMBER = "9817329243"; // country code + number, digits only
export const DISPLAY_PHONE = "62838 99331, 98173 29243";

export function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function buildBookingMessage(data) {
  const lines = [
    "Hi Unique Car Rental 👋",
    "",
    "I want to book a car.",
    "",
    `Car: ${data.car || "-"}`,
    `Rental Type: ${data.rentalType || "-"}`,
    `Name: ${data.name || "-"}`,
    `Phone: ${data.phone || "-"}`,
    `Pickup Date: ${data.pickupDate || "-"}`,
    `Pickup Time: ${data.pickupTime || "-"}`,
    `Return Date: ${data.returnDate || "-"}`,
    `Return Time: ${data.returnTime || "-"}`,
    `Pickup Location: ${data.pickupLocation || "-"}`,
  ];

  if (data.message) {
    lines.push("", `Message: ${data.message}`);
  }

  lines.push("", "Please share the final price and availability.");

  return lines.join("\n");
}

export function buildQuickCarMessage(carName) {
  return `Hi Unique Car Rental 👋\n\nI'm interested in the ${carName}. Could you please share the exact price and availability?`;
}
