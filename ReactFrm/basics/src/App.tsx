import { motion } from "motion/react"
export default function App() {
  return (
   <div className="bg-black text-white h-screen flex items-center justify-center">
      <motion.div className="w-[150px] h-[150px] bg-yellow-400 " animate={{
        scale:[1,2,3,2,1],
        borderRadius:["20%","50%","20%"]
      }} transition={{duration:4}}>
      
    </motion.div>
   </div>
  )
}