import {motion, useDragControls} from "framer-motion"

const Lesson10 = () =>{

    const controls = useDragControls()

    return (
        <div onPointerDown={(e) => controls.start(e)} className="border border-red-500 size-[500px] flex flex-col justify-center items-center"> 
            <div className="w-64 h-10 bg-green-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
            >
            </div>

            <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
            drag="x"
            dragControls={controls}
            >
            </motion.div>
        </div>
    )
}

export default Lesson10;