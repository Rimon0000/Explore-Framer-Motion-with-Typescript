import { motion } from "framer-motion";

// const parent = {
//     initial : {rotate: 0},
//     animate : { rotate: 360}
// }
const parent = {
    hidden : { opacity: 0, scale: 0.9 },
    visible : { opacity: 1, scale: 1 }
}

const child = {
    hidden : { opacity: 0, scale: 0.1 },
    visible : { opacity: 1, scale: 1 }
}

const Lesson1 = () =>{
    return (
        <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial= "hidden"
        animate= "visible" 
        // transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse" }}
        transition={{ ease: "easeInOut", duration: 2, delayChildren: 0.5, staggerChildren: 0.5 }}
        > 

        <motion.div className="size-20 bg-cyan-400 rounded-sm" 
            variants={child}></motion.div>

        <motion.div className="size-20 bg-cyan-400 rounded-sm"
            variants={child}></motion.div>
        
        <motion.div className="size-20 bg-cyan-400 rounded-sm"
            variants={child}></motion.div>
        
        <motion.div className="size-20 bg-cyan-400 rounded-sm"
            variants={child}></motion.div>
        
        </motion.div>
    )
}

export default Lesson1;