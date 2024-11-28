import React from 'react';
import Navbar from "../../components/navbar/Navbar";

export default function Page() {
    return (
        <div className="bg-[#073A45] min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className="px-5 mt-10 text-center">
                <p className="md:text-[16px] text-[12px] text-white">
                    <span className="text-[#086665]">Bondex</span> offers a revolutionary approach to finance,
                    empowering individuals and communities to take control of their financial destinies.
                    Create your own decentralized community, collaborate with like-minded individuals, and
                    unlock the power of blockchain technology. With <span className="text-[#086665]">Bondex</span>, you can
                </p>
                <div className="mt-10 flex flex-col items-center">
                    <p className="text-[10px] md:text-[16px] text-white rounded-2xl p-2 bg-[#07A896]">
                        Create a community
                    </p>
                    <div className="flex flex-wrap items-center gap-2 bg-teal-700 rounded-full p-1 w-full max-w-sm mt-5">
                        <input
                            type="text"
                            placeholder="Enter community link"
                            className="bg-transparent text-gray-300 px-3 py-2 flex-1 w-full md:w-auto text-sm md:text-base focus:outline-none placeholder:text-gray-400"
                        />
                        <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 text-sm md:text-base rounded-full w-full md:w-auto">
                            Join
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
