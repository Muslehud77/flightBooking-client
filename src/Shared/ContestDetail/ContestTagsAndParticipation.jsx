/* eslint-disable react/prop-types */
import React from 'react';

const ContestTagsAndParticipation = ({contest}) => {
    return (
      <div className="card-actions flex-col">
        {contest?.tags?.map((tag, i) => (
          <span
            className="bg-white text-gray-700 font-bitter p-1 px-2 rounded-xl font-bold text-xs"
            key={i}
          >
            {tag}
          </span>
        ))}
        <div className="bg-cyan-400/50 rounded-xl font-nova py-3 text-white shadow-xl p-1">
          Participated so far{" "}
          <span className="bg-black text-white rounded p-2">{contest?.attempt}</span>
        </div>
      </div>
    );
};

export default ContestTagsAndParticipation;