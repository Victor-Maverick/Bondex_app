import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Image from "next/image";
import logo from "../../public/navbar/logo.png";
import heroImage from "../../public/hero/heroImage.png";
import Footer from '../../components/footer/footer';
export default function Page(){
    return(
        <div>
            <Navbar/>
            <div className={'bg-[#073A45] px-[24px] pb-5'}>
                <div className={'bg-[#073A45] mb-10'}>
                    <div className={'flex justify-between px-10'}>
                        <div className={'flex flex-col justify-center items-start w-full'}>
                            <p className={'ml-4 text-[13px] mb-5 md:text-[40px]'}>About</p>
                            <Image src={logo} alt={'bondexLogo'}
                                   className={'left-[-7] w-[120px] h-[60px] md:h-[120px] md:w-[300px]'}/>
                        </div>
                        <Image src={heroImage} alt={'heroImage'} className={'h-[200px] w-[200px] md:h-[400px] md:w-[400px]'}/>
                    </div>
                </div>
                <p className={' whitespace-nowrap overflow-hidden justify-center flex text-[15px] md:text-2xl font-bold  text-[#089A8C]'}>Bondex <span
                    className={'ml-2 text-[15px] md:text-2xl text-white font-bold'}>Mission And Vision</span></p>

                <div className={' justify-center whitespace-normal overflow-hidden text-center p-3 mt-10 px-10'}>
                    <div className={'bg-[#09A896] p-8 overflow-visible'}>
                        <p className={'whitespace-nowrap px-[50px] text-[13px]  md:text-2xl font-bold text-white'}>Our <span
                            className={'text-[#073A45] whitespace-nowrap '}>Mission</span></p>
                        <p>At <span className={'text-[#073A45]'}>Bondex</span>, our mission is to build a secure,
                            transparent, and user-friendly platform that enables individuals to participate in
                            community-based
                            financial activities while leveraging on blockchain technology to revolutionize traditional
                            financial systems and democratize access to
                            financial services. The aim is to foster a strong and supportive community of like-minded
                            individuals who share a common goal of financial prosperity.</p>
                    </div>
                    <div className={'bg-[#09A896] mt-10 p-8'}>
                        <p className={'whitespace-nowrap  font-bold md:text-2xl text-[13px]  text-white'}>Our <span
                            className={'text-[#073A45]'}>Vision</span></p>
                        <p className={'text-white '}>
                            At <span className={'text-[#073A45]'}>Bondex</span>, our vision is to revolutionize
                            community
                            finance by empowering individuals and
                            communities worldwide through secure, transparent, and accessible decentralized financial
                            solutions.
                            We aim to create a future where everyone has the opportunity to participate in the global
                            economy,
                            regardless of their geographic location or socioeconomic status.
                        </p>
                        <p className={'pt-5 text-12px md:text-[16px] text-white'}>By leveraging the power of blockchain
                            technology, we will foster financial inclusion, economic
                            growth, and social impact.</p>
                    </div>
                </div>
                <div className={'text-center mt-[60px]'}>
                    <p className={'text-[#09A896] font-extrabold text-3xl'}>Bondex <span
                        className={'text-white font-extrabold text-3xl'}>Team Member</span></p>
                    <div className={'mt-8 mb-10'}>
                        <p>At <span className={'text-[#09A896]'}>Bondex</span>, we're driven by a passionate and
                            talented
                            team who are dedicated to revolutionizing community finance. Our team members bring a wealth
                            of
                            experience in blockchain technology, decentralized finance, and financial innovation.
                            Together, we're working tirelessly to build a future where finance is accessible,
                            transparent,
                            and empowering for everyone.
                        </p>
                    </div>
                    <Footer/>

                </div>
            </div>
        </div>
    );
}