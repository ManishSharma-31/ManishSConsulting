import { site } from "@/content/site";

/** Floating "chat on WhatsApp" button, fixed to the bottom-right corner of every page. */
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg shadow-black/40 transition duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:bottom-7 md:right-7"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-7 fill-current">
        <path d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.12.55 4.19 1.6 6.02L4 29l8.14-1.56a12 12 0 0 0 3.9.65h.01C22.68 28.1 28 22.7 28 16.07 28 9.4 22.7 3 16.04 3Zm0 22.06h-.01a9.97 9.97 0 0 1-5.08-1.39l-.36-.22-4.83.93.98-4.7-.24-.38a9.95 9.95 0 0 1-1.53-5.28c0-5.5 4.5-9.97 10.05-9.97a9.95 9.95 0 0 1 9.96 9.98c0 5.5-4.48 10.03-9.94 10.03Zm5.47-7.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
      <span className="hidden pr-2 text-sm font-semibold group-hover:inline md:group-focus-visible:inline">Chat on WhatsApp</span>
    </a>
  );
}
