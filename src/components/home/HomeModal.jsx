import React from "react";
import { Fade } from "react-awesome-reveal";
import { createPortal } from "react-dom";
import { GrFormClose } from "react-icons/gr";
import modal_image from "../../assets/images/offer__modal.jpg";

const HomeModal = ({ closeModal }) => {
  return (
    <>
      {createPortal(
        <Fade className="fixed top-0 left-0 z-40 w-full h-full hidden lg:block">
          <div>
            <div className="flex justify-between items-center gap-4 p-2 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[50%] z-40">
              <img src={modal_image} className="w-[250px]" alt="offer" />
              <div className="text-center relative">
                <GrFormClose
                  className="absolute -top-3 right-0 text-2xl cursor-pointer"
                  onClick={closeModal}
                />
                <h1 className="text-3xl font-semibold mt-10">
                  Subcribe to Our Newsletter
                </h1>
                <p className="my-4 font-extralight text-sm text-gray-400">
                  Subscribe to our newlletter and Save your
                  <span className="text-warning"> 20% money</span> with discount
                  code today.
                </p>
                <form className="text-sm flex-1 my-3">
                  <div className="relative">
                    <input
                      className="rounded-s-full pl-5 h-10 w-4/6 border border-gray-200 shadow-md text-gray-500"
                      type="search"
                      placeholder="enter an email"
                      name="search"
                    />
                    <button
                      className="rounded-e-full text-white bg-primary px-2 py-[10px] w-2/6"
                      type="submit"
                    >
                      subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="absolute top-0 left-0 z-30 w-full h-full bg-[#000000b7]"
              onClick={closeModal}
            />
          </div>
        </Fade>,
        document.getElementById("offer__modal")
      )}
    </>
  );
};

export default HomeModal;
