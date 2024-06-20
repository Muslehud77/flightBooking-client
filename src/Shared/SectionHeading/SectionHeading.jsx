/* eslint-disable react/prop-types */
import logo from '../../Assets/Logo/TS-white-2-removebg-preview.png'

const SectionHeading = ({head,hasLogo,position,margin}) => {
    return (
      <div className={`flex justify-${position ? position : "center"}`}>
        <div
          className={`md:mt-${margin ? margin : '32'} mt-10  flex flex-col justify-center items-center`}
        >
          {hasLogo && <img src={logo} className="w-32" alt="" />}
          <div className="text-center text-white mt-3">
            <h1 className="sm:text-3xl capitalize text-2xl font-medium title-font text-white font-nova mb-4">
              {head}
            </h1>

            <div
              className={`flex mt-6 justify-${position ? position : "center"}`}
            >
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SectionHeading;