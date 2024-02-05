import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-2 flex flex-col space-y-3 text-white">
      <p className="text-sm text-white font-semibold">
        Status:{"  "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-700 text-white">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm text-white font-semibold">
        Memory:{"  "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-700 text-white">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm  text-white font-semibold">
        Time:{"  "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-700 text-white">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
