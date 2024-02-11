import { useRef, useState } from "react";
import {motion} from "framer-motion";

export default function Framer({children}: any) {
    const ref = useRef(null);

    const [ position, setPosition] = useState({x:0, y:0});

    return (
        <motion.div>
            
        </motion.div>
    )
}