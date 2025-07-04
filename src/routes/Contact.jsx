import { motion } from "motion/react";
import { Icons } from "../Icons";

export default function Contact() {
  const contactInfo = [
    { label: "Name", value: "John Doe" },
    { label: "Gmail", value: "johndoe@example.com" },
    { label: "Mobile", value: "+1 (555) 123-4567" },
    { label: "Location", value: "New York, NY" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Icons.socials.github, url: ""},
    { name: "LinkedIn", icon: Icons.socials.linkedin, url: "" },
    { name: "X", icon: Icons.socials.x, url: "" },
    { name: "Instagram", icon: Icons.socials.instagram, url: "" },
  ]
  return (
    <motion.div
      className="flex flex-col md:flex-1 md:flex-row items-center md:justify-center md:min-h-auto text-text-light px-4 py-6  gap-10 sm:mt-0 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="sm:flex-1 text-center md:text-left ">
        <motion.h1
          className="text-4xl font-bold text-primary mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let's Connect
        </motion.h1>
        <div className="flex flex-col items-center w-full">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              className="flex flex-col items-center md:items-start w-full mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <span className="text-lg font-semibold text-primary">
                {info.label}
              </span>
              <span className="text-base text-text-light">{info.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="sm:flex-1 text-center md:text-left ">
        <motion.h1
          className="text-4xl font-semibold text-primary mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}>
          Social Links
          </motion.h1>
        <motion.div
          className="flex flex-wrap md:gap-4 gap-2 justify-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              className="flex items-center border-primary border-2 rounded-full px-4 py-2 gap-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="h-6 mb-2"
              />
              <span className="text-sm text-primary">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
