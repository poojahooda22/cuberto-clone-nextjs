import { useRef, useState } from "react";
import {motion} from "framer-motion";

export default function Framer({children}: any) {
    const ref = useRef(null);

    const [ position, setPosition] = useState({x:0, y:0});

    return (
        <motion.div
            style={{position: "relative"}}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x,y}}
            transition={{type: "spring", stiffness: 350, damping: 5, mass: 0.5 }}
        >
            {children}
        </motion.div>
    )
}