import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="pb-20 border-b border-neutral-900">
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        className="my-10 text-4xl text-center">Let's Connect🤝</motion.h1>
        <div className="tracking-tighter text-center">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            className="my-4">I'd love to hear from you! Feel free to reach out via email.</motion.p>
            <a href="mailto:kameshkadimisetty@gmail.com" className="text-blue-500 no-underline hover:underline">
  kameshkadimisetty@gmail.com
</a>

        </div>
    </div>
    
  )
}

export default Contact
