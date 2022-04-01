import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
    return ( 
        <AnimatePresence exitBeforeEnter>
        <motion.div
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
    >
            
            <Popular />
            <Veggie />
        </motion.div>
        </AnimatePresence>
     );
}
 
export default Home;