import React, { useEffect, useState } from 'react';

const SpentTime = ({readTime}) => {

    const [time, setTime] = useState(readTime);

    useEffect(() => {
        const getReadTime = localStorage.getItem('readTime');
        setTime(getReadTime);
    } , [readTime])
    return (
        <>
        <div className='px-12'>
            <h4 className='text-[#6047EC] py-[20px] border font-bold border-[#6047EC] px-[40px] text-center rounded-lg'>Spent time on read : {time} min</h4>
        </div>
        
        </>
    );
};

export default SpentTime;