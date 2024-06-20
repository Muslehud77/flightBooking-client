
import { generateRandomArray } from './../../utils/randomNubersOfArray';
import { motion } from 'framer-motion';
const CardSkeleton = () => {

    const randomSpans = generateRandomArray(7)



    return (
      <div className="md:grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 flex flex-col justify-center items-center gap-5">
        {randomSpans.map((span, i) => (
          <motion.div
            key={i}
            data-theme="dark"
            style={{ gridColumn: `span ${span}` }}
            className=" w-96 h-96 cursor-pointer container mx-auto md:w-full bg-base-100 shadow-xl "
          >
            <div className="skeleton h-full w-full"></div>
          </motion.div>
        ))}
      </div>
    );
};

export default CardSkeleton;