import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, GitHub, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
            Get in Touch
          </h2>
        </motion.div>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
          <div className="md:w-1/2 p-8 bg-purple-600 text-white">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-4">
              Feel free to reach out. I'm always open to discussing new
              projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6" />
                <span>chiranjib.jena@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-6 w-6" />
                <a
                  href="https://linkedin.com/in/ichiranjeeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/ichiranjeeb
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <GitHub className="h-6 w-6" />
                <a
                  href="https://github.com/chiranjeebhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/chiranjeebhub
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
