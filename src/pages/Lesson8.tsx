import {motion, useInView} from "framer-motion"
import { useRef } from "react";

const Lesson8 = () =>{

    const ref = useRef<HTMLDivElement>(null)

    const InView = useInView(ref, {once: true})
    console.log(InView);


    return (
        <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center"> 
            <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
            ref={ref}
            animate = { InView ? {opacity: 1, x : 0, transition: {delay: 1}} : {opacity: 0, x: -500} }
            >
            </motion.div>
        </div>
    )
}

export default Lesson8;