import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({article, handleMarkRead, handleBookmarked}) => {
    const {image, author, date, read_time, title, tags, description} = article;
    const [isBookmarked, setIsBookmarked] = useState(false);

    const notifyAdd = () => {
        toast(`Successfully Bookmarked`);
    };

    const notifyAlreadyAdded = () => {
        toast.error(`Already Bookmarked`);
    };

    const handleBookmarkClick = () => {
        if (!isBookmarked) {
            handleBookmarked(description);
            setIsBookmarked(true);
            notifyAdd();
        } else {
            notifyAlreadyAdded();
        }
    };

    return (
        <div className='w-full border  mb-4 rounded-lg'>
            <div className='flex justify-center'>
                <img className='w-[800px] rounded-lg' src={image} alt="" />
            </div>
            <div className='flex justify-between items-center px-2 mt-6'>
                <div className='flex justify-center items-center'>
                    <div>
                        <img className=' w-[60px] h-[60px] rounded-full' src={author.user_image} alt="" />
                    </div>
                    <div className='ml-6'>
                        <p className='font-bold text-xl md:text-2xl'>{author.name}</p>
                        <p  className='text-[#676767] font-normal md:font-semibold'>{date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p>{read_time} min to read </p>
                    <svg onClick={handleBookmarkClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                    </svg>
                    <ToastContainer/>
                </div>
            </div>
            <div className='px-2'>
                <h1 className='font-bold text-[28px] md:text-[40px] mt-[10px]'>{title}</h1>
            </div>
            <div className='px-2 py-4'>
                <p className='text-[#11111199]'>{tags}</p>
            </div>
            <div className='px-2 py-4 cursor-pointer'>
                <p onClick={()=>handleMarkRead(read_time)} className='text-[#6047EC] font-semibold underline'>Mark as read</p>
            </div>
        </div>
    );
};

export default Card;
