import React from 'react';
import Navbar from "../../components/navbar/Navbar";
export default function Staking(){
    return(
        <div className={'bg-[#073A45]'}>
            <Navbar/>
            <div className={'px-10 py-10'}>
                <p className={'md:text-3xl  font-extrabold text-[20px] whitespace-nowrap  '}>Staking information</p>
                <div className={'px-[60px] py-5 mt-8 border-[#077B74] border-4'}>
                    <p className={'text-[#077B74] md:text-[16px] text-[12px]'}>Select Details Carefully</p>

                    <div className={'flex gap-2'}>
                        <div className={'justify-items-center p-2   rounded-3xl border-2 border-[#09A896] h-7 w-7'}>
                            <p className={'rounded-2xl bg-[#09A896] w-3 h-3 '}></p>
                        </div>
                        <p>SUI</p>
                    </div>
                </div>
            </div>
        </div>
    );
}