import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useContextInfo from "../../Hooks/useContextInfo";
import { motion } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";
import ContestCountdownAndPayment from "./ContestCountdownAndPayment";
import ContestTagsAndParticipation from "./ContestTagsAndParticipation";
import ContestSubmission from "./ContestSubmission";
import PrizeMoney from "./PrizeMoney";
import ContestHead from "./ContestHead";




const ContestDetail = () => {
  const { selected, setSelected } = useContextInfo();
  const axiosSecure = useAxiosSecure();

  const { data: contest = {} } = useQuery({
    queryKey: [`contest_${selected?._id}`],
    queryFn: async () => {
      const data = await axiosSecure.get(`/contest/${selected._id}`);
      return data.data;
    },
  });
  if(selected) {
    document.querySelector('body').classList.add('overflow-y-hidden');
  }else{
    document.querySelector("body").classList.remove('overflow-y-hidden');
  }
  if (!selected) return <></>;

  return (
    <>
      <div
        onClick={() => setSelected(null)}
        className="fixed flex rounded-3xl overflow-x-hidden justify-center items-center inset-0 bg-black/70 h-screen z-50 cursor-pointer overflow-y-auto"
      >
        <div className="cursor-default" onClick={(e) => e.stopPropagation()}>
          {!contest._id ? (
            <motion.div layoutId={selected._id}>
              <div
                data-theme="dark"
                className="flex flex-col justify-center gap-4 w-[100vw] h-[100vh]  md:w-[900px] md:h-[600px]"
              >
                <div className="skeleton h-full w-full"></div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              layoutId={selected._id}
              className="card h-[100vh]  lg:h-auto lg:max-h-[90vh] overflow-y-auto md:h-9/12 w-full detail md:w-[900px] bg-black shadow-2xl  image-full"
            >
              <figure>
                <img
                  src={contest?.contestImg}
                  className=" h-[600px] w-full blur-sm object-fill"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-end">
                  <button onClick={() => setSelected(null)}>
                    <MdOutlineCancel size={30} />
                  </button>
                </div>
                <h2 className="card-title font-nova">{contest?.contestName}</h2>
                <div className=" md:flex-col  justify-center">
                  <ContestHead contest={contest} />

                  <div className="flex flex-col md:flex-row-reverse items-center justify-between md:justify-between">
                    <PrizeMoney contest={contest} />
                    <ContestSubmission contest={contest} />
                  </div>
                </div>
                <div className="flex-grow"></div>
                <div className="flex flex-col gap-5  md:flex-row-reverse justify-between">
                  <ContestCountdownAndPayment contest={contest} />
                  <ContestTagsAndParticipation contest={contest} />
                </div>
              </div>
              
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContestDetail;
