import { motion } from "framer-motion";
import { useRef } from "react";

// const parent = {
//     initial : {rotate: 0},
//     animate : { rotate: 360}
// }
const parent = {
    hidden : { x : 0 , y : 0, opacity: 0},
    visible : { opacity: 1, x : [0, 300, -300, 0], y : [0, 300, -300, 0], rotate : [0, 300, -300, 0],
        transition : { ease: "linear", duration: 5, repeat: Infinity, opacity: {duration: 0.5}}},

    hover: {scale: 1.1, transition: {duration: 0.5 }},
    tap: {scale: 1.1, boxShadow: "0px 10px 10px #000"},
}

const child = {
    hidden : { opacity: 0, scale: 0.1 },
    visible : { opacity: 1, scale: 1, 
        transition : { ease: "easeInOut", duration: 2, delayChildren: 0.5, staggerChildren: 0.5 }},
}

const Lesson1 = () =>{

    const parentRef = useRef(null)

    return (
        <div ref={parentRef} className="border border-red-500 size-[500px] flex justify-center items-center">
        <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial= "hidden"
        animate= "visible" 
        whileHover="hover"
        whileTap="tap"
        drag
        // dragSnapToOrigin
        dragElastic = {0.7}
        dragConstraints = {parentRef}
        // dragConstraints = {{right: 200, left: -200, top: -200, bottom: 200}}
        // transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse" }}
        
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
        </div>
    )
}

export default Lesson1;