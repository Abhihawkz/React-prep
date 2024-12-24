import { motion } from "motion/react";
const Pulsingbutton = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
        <motion.button className="px-4 py-3 text-white bg-blue-500 rounded-xl" animate={{scale:[1,1.2,1],backgroundColor:["#ab334c","#95ac23","#12cd42"]}} transition={{duration:1,ease:"easeInOut",repeat:Infinity}}>click me</motion.button>
    </div>
  )
}

export default Pulsingbutton;