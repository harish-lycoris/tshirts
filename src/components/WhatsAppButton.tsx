import { MessageCircle } from 'lucide-react';
import { STORE } from '@/config/store';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(STORE.whatsappFloatingMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp py-3 pl-3.5 pr-4 text-sm font-semibold text-white shadow-xl shadow-whatsapp/30 transition duration-300 hover:-translate-y-0.5 hover:bg-whatsapp-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
