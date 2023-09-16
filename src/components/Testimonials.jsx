import { useState } from "react";
import data from "../data.js";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonials() {
    const [index, setIndex] = useState(0);

    function previousScrollHandler() {
        index - 1 < 0 ? setIndex(data.length - 1) : setIndex(index - 1);
    }

    function nextScrollHandler() {
        index + 1 >= data.length ? setIndex(0) : setIndex(index + 1);
    }

    function surpriseMeHandler() {
        setIndex(Math.floor(Math.random() * data.length));
    }

    return (
        <div className="w-11/12 md:w-10/12 max-w-3xl flex flex-col items-center gap-y-8 mx-auto py-12">
            <h2 className="font-bold text-4xl text-center">Our Testimonials</h2>
            <div className="w-1/4 h-1 bg-violet-400 -mt-6"></div>
            <div className="bg-white flex flex-col items-center gap-y-4 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 relative p-4 xsm:p-6 sm:p-8">
                <div className="relative md:absolute md:left-8 md:-top-16 my-6 md:my-0">
                    <img
                        src={data[index].image}
                        alt={`${data[index].name} Photo`}
                        className="w-36 aspect-square rounded-full relative z-10"
                    />
                    <div className="w-36 aspect-square rounded-full bg-violet-500 absolute left-2.5 -top-1.5"></div>
                </div>
                <div>
                    <h4 className="font-bold text-2xl text-center tracking-wider">
                        {data[index].name}
                    </h4>
                    <p className="text-sm text-violet-300 text-center uppercase">
                        {data[index].job}
                    </p>
                </div>
                <FaQuoteLeft className="text-violet-400 mt-4" />
                <p className="text-slate-500 text-center">{data[index].text}</p>
                <FaQuoteRight className="text-violet-400 mb-6" />
                <div className="flex items-center gap-x-5 mb-4">
                    <button
                        type="button"
                        onClick={previousScrollHandler}
                        className="text-3xl text-violet-400 hover:text-violet-500 transition-colors duration-300"
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        type="button"
                        onClick={nextScrollHandler}
                        className="text-3xl text-violet-400 hover:text-violet-500 transition-colors duration-300"
                    >
                        <FiChevronRight />
                    </button>
                </div>
                <button
                    type="button"
                    onClick={surpriseMeHandler}
                    className="font-bold text-lg text-white bg-violet-400 hover:bg-violet-500 shadow-md rounded-md transition-colors duration-300 px-8 py-2"
                >
                    Surprise me
                </button>
            </div>
        </div>
    );
}

export default Testimonials;
