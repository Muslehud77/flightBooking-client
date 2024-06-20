import React from 'react';
import { motion } from 'framer-motion';

const ContestHead = ({contest}) => {
    return (
      <motion.div
        animate={{ y: 0 }}
        transition={{ from: -100, type: "spring", duration: 1 }}
        exit={{ y: -100 }}
      >
        <p className="font-bitter uppercase bg-black p-2 shadow-xl rounded-t-lg">
          {contest?.shortDescription}
        </p>
        <p className="bg-gray-700 p-2 shadow-xl rounded-b-lg">
          {contest?.detailedDescription}
        </p>
      </motion.div>
    );
};

export default ContestHead;