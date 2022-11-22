import React from "react";

import './AssignTask.css'
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";


export const AssignTask = () => {
    return (
      <div>
          <div className="flex flex-col items-center w-[96vw] h-screen">
            <div className="flex justify-center w-full h-32 bg-secondary rounded-br-2xl drop-shadow-xl z-5">
              <div className="flex justify-center items-center h-[80px] w-[30%] rounded-b-[40px] bg-[#2F3142] drop-shadow-xl">
                <p className="text-4xl text-primaryText font-bold tracking-widest">Add New Login</p>
              </div>
            </div>
              <div className=" flex justify-end w-[75%] mb-12 -mt-12 ml-40">
                <BackButton />
              </div>
              <div className="w-[1300px] h-[600px] bg-secondary -mt-20 rounded-b-2xl bg-add-driver-cover bg-contain bg-center bg-no-repeat">

              </div>
          </div>
      </div>
  );
}

export default AssignTask;







      
       
        