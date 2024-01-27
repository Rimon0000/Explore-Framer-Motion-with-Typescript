import {motion, useAnimationControls} from "framer-motion"
import { useEffect, useState } from "react"

const Lesson2 = () =>{

    const controls = useAnimationControls()
    const [toggle, setToggle] = useState(false)

    useEffect(() =>{
        controls.start((i) => ({x: 200, transition: {delay: i * 1}}))

    }, [])

    // const handleToggle = () => {
    //     setToggle(!toggle)
    //     if(toggle){
    //         controls.start({ x: 200 })
    //     }
    //     else{
    //         controls.start({ x: -200 })
    //     }
    // }

    return (
        <div onMouseEnter={() => controls.stop()} 
            onMouseLeave={() => controls.start((i) => ({x: 200, transition: {delay: i * 1}}))} 
            className="border border-red-500 size-[500px] flex flex-col justify-center items-center"> 
            {/* <button onClick={handleToggle} className="bg-green-500 mb-10 px-2 py-3">Forward</button> */}
            <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
            animate = {controls}
            custom={1}
            >
            </motion.div>
            <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
            animate = {controls}
            custom={2}
            >
            </motion.div>
            <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
            animate = {controls}
            custom={3}
            >
            </motion.div>
        </div>
    )
}

export default Lesson2;