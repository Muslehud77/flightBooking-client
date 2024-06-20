/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import useContextInfo from '../../Hooks/useContextInfo';
import useUser from '../../Api/useUser';
import useWinners from './../../Api/useWinners';

const ContestCountdownAndPaymentAndWinner = ({contest}) => {
  const {setSelected} = useContextInfo()
  const [show,setShow] = useState(true)
  const { winnersData } = useWinners(contest.winners, contest._id);

  useEffect(()=>{
    const dateToCheck = new Date(contest.contestDeadline);
    const currentDate = new Date();
    if(dateToCheck < currentDate){
      setShow(false)
    }
  },[])
  


  const {userData} = useUser()

    return (
      <motion.div
        animate={{ y: 0 }}
        transition={{ from: 100, type: "spring", duration: 1 }}
        exit={{ y: -100 }}
        className="flex flex-col gap-5 "
      >
        {show ? (
          <>
            <Counter date={contest?.contestDeadline} />
            <div className="flex justify-end">
              {userData.role === "user" && (
                <Link
                  onClick={() => setSelected(null)}
                  to={`/payment/${contest._id}`}
                  className="btn"
                >
                  Pay ${contest?.contestPrice} to Participate
                </Link>
              )}
            </div>
          </>
        ) : (
          <div className='flex justify-center items-center flex-col gap-2 w-56'>
            <h1 className='font-nova'>Winners</h1>
            <div className='h-[1.5px] w-20 bg-cyan-600'></div>
            <div className='flex justify-center items-center gap-5 w-full text-center overflow-x-auto'>
              {winnersData?.map((win, i) => (
                <div key={i} className="flex flex-col justify-center items-center gap-1">
                  <img className='w-20 rounded-full' src={win.userImg} alt="" />
                  <span className='text-xs bg-black text-white'>{win.name}</span>
                </div>
              ))}
             
            </div>
          </div>
        )}
      </motion.div>
    );
};

export default ContestCountdownAndPaymentAndWinner;