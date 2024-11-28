import React from 'react';
import {Icon} from '@iconify/react';
import winner from '../../public/comunity/winner.png';
import Image from 'next/image';
export default function Leaderboard() {
    const leaderboardData = [
        { name: 'Person1', wallet: '0x01234...def01234', deposits: '10 SUI', position: '1st', reward: '50%' },
        { name: 'Person2', wallet: '0x01234...def01235', deposits: '10 SUI', position: '2nd', reward: '30%' },
        { name: 'Person3', wallet: '0x01234...def01236', deposits: '10 SUI', position: '3rd', reward: '20%' },
        { name: 'Person4', wallet: '0x01234...def01237', deposits: '10 SUI', position: '4th', reward: '' },
        { name: 'Person5', wallet: '0x01234...def01238', deposits: '10 SUI', position: '5th', reward: '' },
        { name: 'Person6', wallet: '0x01234...def01239', deposits: '10 SUI', position: '6th', reward: '' },
        { name: 'Person7', wallet: '0x01234...def01240', deposits: '10 SUI', position: '7th', reward: '' },
    ];

    return (
        <div>
            <div className={'flex ml-[180px] gap-3'}>
                <div className={'rounded-lg text-[13px] items-center bg-[#09A896] flex gap-2  mt-10 px-6 py-2'}>
                    <h1 className="text-white  md:text-3xl">Leaderboard</h1>
                    <Image src={winner} alt={'winnerImage'} className={'w-6 h-6'}/>
                </div>
                <div className={'bg-[#09A896] mt-10 text-center py-1 rounded-lg px-3 flex items-center'}>
                <Icon icon={'ic:baseline-arrow-drop-up'} className={'text-center text-white h-8 w-8'}/>
                </div>
            </div>

            <div className="bg-[#073A45] min-h-screen flex flex-col items-center">
                <div className="mt-6 w-full max-w-4xl">
                    <table className="min-w-full bg-[#09A896]">
                        <thead>
                        <tr>
                            <th className="py-2 text-black px-4 border-b">Name</th>
                            <th className="py-2 px-4 text-black border-b">Wallet Address</th>
                            <th className="py-2 px-4 text-black border-b">Deposits</th>
                            <th className="py-2 px-4 text-black border-b">Position</th>
                            <th className="py-2 px-4 border-b text-black">Reward</th>
                        </tr>
                        </thead>
                        <tbody>
                        {leaderboardData.map((user, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b">{user.name}</td>
                                <td className="py-2 px-4 border-b">{user.wallet}</td>
                                <td className="py-2 px-4 border-b">{user.deposits}</td>
                                <td className="py-2 px-4 border-b">{user.position}</td>
                                <td className="py-2 px-4 border-b">{user.reward}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
