import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import Container from '../Components/Container';
import loginImg from "../../src/assets/undraw_workspace_s6wf.svg";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <Container className="bg-gradient-to-bl from-[#EEF7FF] via-white to-[#F5FAFF]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#2563EB]">Contact InventoryPro</h2>
            <p className="mt-3 text-lg text-gray-600">
              Need assistance with your inventory system, account setup, or product tracking? Our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#BFDBFE]">
              <h3 className="text-2xl font-semibold text-[#2563EB] mb-4">Support Information</h3>
              <ul className="space-y-4 text-slate-700 text-sm">
                <li>
                  <strong>🏢 Address:</strong> JEDDS, 45 Supply Chain, SUBUKIA
                </li>
                <li>
                  <strong>📞 Phone:</strong> +254 769 846 063
                </li>
                <li>
                  <strong>✉️ Email:</strong> support@jedds.co.ke
                </li>
                <li>
                  <strong>🕒 Hours:</strong> Mon - Sat: 8:00 AM – 6:00 PM
                </li>
              </ul>

              <div className="mt-8">
                <img
                  src={loginImg}
                  alt="Customer support desk"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#BFDBFE]">
              <h3 className="text-2xl font-semibold text-[#2563EB] mb-4">Send Us a Message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Company or Organization"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Write your message here (e.g. product inquiry, system issue)..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white font-semibold py-3 rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
