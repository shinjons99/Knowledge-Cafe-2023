import React from 'react';

const BookmarkedContainer = ({b}) => {
    return (
        <div>
            <div className='px-12 mt-4'>
                <p className='p-[15px] bg-white rounded-lg font-semibold'>{b}</p>
            </div>
        </div>
    );
};

export default BookmarkedContainer;