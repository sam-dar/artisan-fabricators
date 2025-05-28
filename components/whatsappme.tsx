import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsAppButton = () => (
  <a
    href="https://wa.me/923004645620"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
    title="Chat with us on WhatsApp"
  >
    <FaWhatsapp size={32} />
    {/* Tooltip */}
    <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
      WhatsApp Us
    </span>
  </a>
)

export default FloatingWhatsAppButton
