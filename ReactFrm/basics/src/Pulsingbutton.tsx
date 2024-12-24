import { motion } from "motion/react";
// const Pulsingbutton = () => {
//   return (
//     <div className="h-screen bg-black flex items-center justify-center">
//         <motion.button className="px-4 py-3 text-white bg-blue-500 rounded-xl" animate={{scale:[1,1.2,1],backgroundColor:["#ab334c","#95ac23","#12cd42"]}} transition={{duration:1,ease:"easeInOut",repeat:Infinity}}>click me</motion.button>
//     </div>
//   )
// }

// export default Pulsingbutton;

const Pulsingbutton = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
        {[...Array(3)].map((_,index) => {
            return <motion.div key={index} className="h-14 w-14 rounded-full bg-teal-400 ml-5" animate={{y:[0,-15,0]}} transition={{duration:0.5 , ease:"easeInOut",repeat:Infinity,repeatDelay:index*0.2}}></motion.div>
        })}
    </div>
  )
}

export default Pulsingbutton