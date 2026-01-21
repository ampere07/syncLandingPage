import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Contact Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help and answer any question you might have.
          </p>
        </div>

        {/* 3 columns on all screen sizes */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 mb-12">
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl mb-2 md:mb-4">
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Email Us</h3>
            <p className="text-xs md:text-base text-gray-600 break-words">contact@sync.com</p>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl mb-2 md:mb-4">
              <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Call Us</h3>
            <p className="text-xs md:text-base text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl mb-2 md:mb-4">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Visit Us</h3>
            <p className="text-xs md:text-base text-gray-600">123 Business St, City</p>
          </div>
        </div>

        <div className="p-8 md:p-12 border-t-2 border-gray-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button 
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </button>
            {status && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-semibold">{status}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
