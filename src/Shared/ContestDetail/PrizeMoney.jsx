/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import prize from "../../Assets/Lotties/prize.json";
const PrizeMoney = ({contest}) => {
    return (
      <motion.div
        animate={{ scale: 1 }}
        transition={{ from: 0, duration: 0.8 }}
        exit={{ opacity: 0 }}
        className="flex flex-col justify-center items-center"
      >
        <Lottie
          loop={false}
          animationData={prize}
          play
          style={{ width: 150, height: 150 }}
        />
        <div className="w-full">
          <p className="bg-red-600 px-2  text-center rounded-xl  font-bitter font-bold tracking-[0.15em] py-3 text-white shadow-xl p-1">
            ${contest?.prizeMoney}/Prize Money
          </p>
        </div>
      </motion.div>
    );
};

export default PrizeMoney;