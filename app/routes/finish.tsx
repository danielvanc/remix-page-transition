import { motion } from "framer-motion";

export default function Finish() {
  return (
    <motion.img
      initial={{ borderRadius: 0 }}
      animate={{ borderRadius: "25%" }}
      exit={{ borderRadius: 0 }}
      layoutId="image"
      src="/example.jpg"
      alt=""
    />
  );
}
