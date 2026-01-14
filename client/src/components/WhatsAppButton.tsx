import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "+1234567890"; // Placeholder number - update with actual number
  const message = encodeURIComponent("Hello! I'm interested in working with Raster Bros.");
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#20BA5A] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}

