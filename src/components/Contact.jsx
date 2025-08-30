import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    if (!name || !email || !message) return;
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      e.currentTarget.reset();
    }, 800);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s collaborate</h2>
          <p className="text-neutral-700 leading-7">
            I welcome new residential and cultural commissions, consultations, and collaborations. Share a few details about your project and I’ll respond within two business days.
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-neutral-700"><Mail className="h-4 w-4" /> studio@ateliermodern.com</li>
            <li className="flex items-center gap-3 text-neutral-700"><Phone className="h-4 w-4" /> +1 (555) 012-3456</li>
            <li className="flex items-center gap-3 text-neutral-700"><MapPin className="h-4 w-4" /> 221 Gallery Way, Suite 3, New York, NY</li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm text-neutral-700">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-neutral-900/10"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm text-neutral-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-neutral-900/10"
                />
              </div>
            </div>
            <div className="mt-4 space-y-1.5">
              <label htmlFor="message" className="text-sm text-neutral-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus:ring-2 focus:ring-neutral-900/10"
                placeholder="Tell me about your project, location, budget, and timeline."
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white text-sm font-medium hover:bg-neutral-900 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "sent" && (
                <span className="text-sm text-emerald-700">Thank you—your message has been sent.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
