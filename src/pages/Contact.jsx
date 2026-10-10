import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    fetch("https://formsubmit.co/ajax/dhanushdevaraj10@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: "false" // Disables the annoying captcha page
      })
    })
    .then(response => response.json())
    .then(data => {
      setIsSubmitting(false);
      if (data.success === "true" || data.success === true) {
        setStatus({
          type: 'success',
          message: "Message sent successfully! I will get back to you soon."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: "Oops! Something went wrong. Please try again."
        });
      }
    })
    .catch(error => {
      setIsSubmitting(false);
      setStatus({
        type: 'error',
        message: "Network error. Please try again later."
      });
      console.log(error);
    });
  };

  return (
    <div className="animate-fade-in flex flex-col gap-10">
      <div className="space-y-2 text-center md:text-left border-b border-[var(--color-border-light)] pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-charcoal)]">Contact Me</h1>
        <p className="text-lg text-[var(--color-soft-grey)]">Have a project idea or want to connect? Let's talk.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="flex-1 space-y-8">
          <div className="bg-white border border-[var(--color-border-light)] p-8 rounded-sm shadow-sm">
            <h3 className="text-2xl font-bold text-[var(--color-charcoal)] font-serif mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-50 border border-[var(--color-border-light)] flex items-center justify-center rounded-md flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-charcoal)]">Email</h4>
                  <p className="text-[var(--color-soft-grey)]">dhanushdevaraj10@gmail.com</p>
                  <a href="mailto:dhanushdevaraj10@gmail.com" className="text-sm text-accent hover:underline mt-1 inline-block">Send a message</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-50 border border-[var(--color-border-light)] flex items-center justify-center rounded-md flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-charcoal)]">Location</h4>
                  <p className="text-[var(--color-soft-grey)]">Kotagiri, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[2]">
          <div className="bg-white border border-[var(--color-border-light)] p-8 rounded-sm shadow-sm">
            <h3 className="text-2xl font-bold text-[var(--color-charcoal)] font-serif mb-6">Send me a message</h3>
            
            {status.message && (
              <div className={`p-4 mb-6 rounded-md ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-charcoal)]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[var(--color-border-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-gray-50 focus:bg-white transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-charcoal)]">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[var(--color-border-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-gray-50 focus:bg-white transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-charcoal)]">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[var(--color-border-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-gray-50 focus:bg-white transition-colors"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-charcoal)]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[var(--color-border-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-gray-50 focus:bg-white transition-colors resize-y"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent !text-white font-medium rounded-md hover:bg-accent/90 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
