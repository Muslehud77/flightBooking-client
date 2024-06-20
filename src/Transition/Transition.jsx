
import { motion, useIsPresent } from "framer-motion";


const Transition = () => {
  
    const isPresent = useIsPresent();
    return (
      <div>
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{
            scaleY: 0,

            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{
            scaleY: 1,

            transition: { duration: 0.5, ease: "circIn" },
          }}
          style={{
            originY: isPresent ? 0 : 1,
          }}
          className={`privacy-screen`}
        >
         
        </motion.div>
      </div>
    );
};

export default Transition;