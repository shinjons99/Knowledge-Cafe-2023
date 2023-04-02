import React from 'react';

const BookedContainer = ({b}) => {
    return (
        <div className='px-12 mt-4'>
             <p className='p-[15px] bg-white rounded-lg font-semibold'>{b}</p>
        </div>
    );
};

export default BookedContainer;