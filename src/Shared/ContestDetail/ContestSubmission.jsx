/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

const ContestSubmission = ({contest}) => {
    return (
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ from: 0, duration: 1 }}
        exit={{ opacity: 0 }}
        className="accordion-group  p-2 w-72 mt-2 rounded"
      >
        <p className="text-gray-800 uppercase text-sm mb-1 rounded bg-white/80 text-center">
          what to submit?
        </p>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.3,
            },
          }}
          className=" bg-black/50 cursor-pointer backdrop-blur-lg rounded-lg"
        >
          <ul className="  text-gray-300 py-2 text-sm">
            {contest?.taskSubmissionInstructions.map((task, i) => (
              <li className="px-2 " key={i}>
                - {task}
              </li>
            ))}
            {contest?.contestPrice > 0 && (
              <li className="px-2 text-sm">- Payment ID.</li>
            )}
          </ul>
          <div className="bg-white font-bold text-gray-500 text-xs mt-2 p-1">
            <p className="mb-1">
              {" "}
              Submit the required attachments to this email below
            </p>

            <a className="bg-black hover:underline cursor-pointer  text-gray-200 p-1 rounded-md">
              {contest?.creatorInfo.email}
            </a>
          </div>
        </motion.div>
      </motion.div>
    );
};

export default ContestSubmission;