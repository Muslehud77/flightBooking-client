/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';

import useContextInfo from '../../Hooks/useContextInfo';

const Card = ({ data }) => {

 const { setSelected, user, openLogin } = useContextInfo();
   
 const setContestDetails = ()=>{
    if(user){
        setSelected(data)
    }else{
        openLogin()
    }
 }


 
 


  return (
    <>
      {!data?.isPending && (
        <motion.div
          layoutId={data._id}
          onClick={setContestDetails}
          whileHover={{
            scale: 1.025,
            transition: {
              duration: 0.3,
            },
          }}
          style={{ gridColumn: `span ${data?.span}` }}
          whileTap={{ scale: 0.95 }}
          className={`card w-96 h-96 cursor-pointer container mx-auto md:w-full bg-base-100 shadow-xl image-full`}
        >
          <figure>
            <img src={data?.contestImg} className="max-w-[500px] object-fill" />
          </figure>
          <div className="card-body">
            <h2 className="card-title tracking-[0.05em] font-nova">
              {data?.contestName}
            </h2>
            <p className="text-xs">{data?.shortDescription}</p>

            <div className="flex-grow"></div>
            <div className="card-actions flex-col ">
              <div className="bg-cyan-400/50 rounded-xl font-nova py-3 text-white shadow-xl p-1">
                Participated so far{" "}
                <p className="bg-black text-center rounded mt-1 text-white p-2">
                  {data?.attempt}
                </p>
              </div>
              {data?.tags?.map((tag, i) => (
                <span
                  className="bg-black font-bitter p-1 px-2 rounded-xl text-xs"
                  key={i}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Card;
