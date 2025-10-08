import React, { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Card = (props) => {
    const user = props.user;
    const [index, setIndex] = useState(0);

    function leftClick() {
        if (index === 0) setIndex(user.length - 1);
        else setIndex(index - 1);
    }

    function rightClick() {
        if (index >= user.length - 1) setIndex(0);
        else setIndex(index + 1);
    }

    function handleClick() {
        const random = Math.floor(Math.random() * 5);
        setIndex(random);
    }

    return (
        <div >
            {/* Image section */}
            <div className="flex absolute md:top-24 top-35 left-1/2 -translate-x-1/2">
                <img
                    src={user[index].image}
                    alt=""
                    className="h-26 w-26 sm:h-32 sm:w-32 object-cover rounded-full z-10"
                />
                <div className="h-26 w-26 sm:h-32 sm:w-32 absolute top-0 right-0 bg-violet-500 rounded-full -z-10 translate-x-2 -translate-y-2"></div>
            </div>

            {/* Content section */}
            <div className="w-full min-h-[60vh] mt-12 flex flex-col items-center px-4 sm:px-6 md:px-10 text-center">
                <h1 className="font-bold mt-3 text-2xl sm:text-3xl text-violet-500">
                    {user[index].name}
                </h1>
                <h2 className="font-semibold my-3 sm:my-5 text-gray-500 text-lg sm:text-xl">
                    {user[index].designation}
                </h2>

                <div className="flex flex-col items-center max-w-2xl">
                    <RiDoubleQuotesL className="text-2xl sm:text-3xl text-violet-600" />
                    <p className="mx-2 sm:mx-10 md:mx-0 mt-1 text-sm sm:text-base md:text-base">
                        {user[index].testimonial}
                    </p>
                    <RiDoubleQuotesR className="text-2xl sm:text-3xl text-violet-600 mt-2" />
                </div>

                {/* Navigation buttons */}
                <div className="flex gap-3 mt-5">
                    <FaAngleLeft
                        className="text-2xl sm:text-3xl cursor-pointer text-violet-600 hover:bg-gray-300 hover:rounded p-1"
                        onClick={leftClick}
                    />
                    <FaAngleRight
                        className="text-2xl sm:text-3xl cursor-pointer text-violet-600 hover:bg-gray-300 hover:rounded p-1"
                        onClick={rightClick}
                    />
                </div>

                <button
                    className="bg-violet-500 text-white rounded px-4 sm:px-6 py-1 mt-4 font-semibold hover:bg-violet-600 transition-all duration-200 text-sm sm:text-base md:text-lg"
                    onClick={handleClick}
                >
                    Surprise Me
                </button>
            </div>
        </div>
    );

};
export default Card;
