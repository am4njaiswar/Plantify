// src/pages/ContactPage.js
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactPage() {
  // 1. Replace "YOUR_FORM_ID" with your real ID from Formspree
  const [state, handleSubmit] = useForm("xyzndprd");

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
        <div className="max-w-md w-full text-center bg-white rounded-3xl shadow-2xl p-12 border border-green-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
          <p className="text-lg text-gray-600 mb-2">Thanks for reaching out!</p>
          <p className="text-gray-500">I'll get back to you within 24 hours.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-8 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  // 2. Replace all placeholder content in these two arrays
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-green-600" />,
      title: "Email",
      content: "amanjaiswar77777@gmail.com",
      link: "mailto:your.gmail.address@gmail.com?subject=Inquiry from Plantify AI Website"
    },
    {
      icon: <FaMapMarkerAlt className="text-green-600" />,
      title: "Location",
      content: "Mumbai, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/am4njaiswar",
      name: "GitHub"
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/aman-jaiswar-6099242b9/",
      name: "LinkedIn"
    },
    {
      icon: <FaTwitter size={24} />,
      url: "https://x.com/amannjaiswar",
      name: "Twitter"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="text-green-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question about crop diseases, want to collaborate, or just say hello? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <a key={index} href={item.link} className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300 group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Follow Me</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-700 transform hover:scale-110 transition-all duration-300 border border-gray-200" title={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and I'll get back to you soon.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input id="name" type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white" placeholder="Your full name"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input id="email" type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white" placeholder="your.email@example.com"/>
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input id="subject" type="text" name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white" placeholder="What's this about?"/>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea id="message" name="message" required rows="6" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none" placeholder="Tell me about your project or question..."></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>

                <button type="submit" disabled={state.submitting} className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                  {state.submitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;