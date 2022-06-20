import React from "react";

const Student = (props) => {
  const { id, name, kelas, jamAbs } = props;

  return (
    <div className="my-2">
      <div className="container  border border-grey-100 py-2 px-2 grid grid-cols-3">
        <div className="rounded-full bg-yellow-200 w-14 h-14"></div>
        <div className=" col-span-2 wrapper w-full">
          <p className="text">
            {id}. {name}
          </p>
          <p className="">
            {kelas} - ({jamAbs})
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
