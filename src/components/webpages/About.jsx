import { motion } from "framer-motion";
import { Code, Palette, Globe, Coffee } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Full-Stack Development", icon: Code },
    { name: "UI/UX Design", icon: Palette },
    { name: "Global Remote Collaboration", icon: Globe },
    { name: "Agile Methodologies", icon: Coffee },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
            About Me
          </h2>
        </motion.div>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="/placeholder.svg?height=192&width=192"
                alt="Profile"
              />
            </div>
            <div className="p-8">
              <p className="mt-2 text-gray-600">
                I'm a passionate full-stack developer with over 10 years of
                experience in web development. My journey in tech has been
                driven by a love for creating intuitive, efficient, and
                beautiful digital solutions.
              </p>
              <p className="mt-4 text-gray-600">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through tech blogs and community meetups.
              </p>
            </div>
          </div>
          <div className="px-8 py-6 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Key Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <skill.icon className="h-5 w-5 text-purple-500" />
                  <span className="text-sm text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
