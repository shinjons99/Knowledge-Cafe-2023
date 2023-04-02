import React from 'react';
import BookmarkedContainer from './BookedContainer/BookmarkedContainer/BookmarkedContainer';

const Bookmarked = ({booked}) => {
    
    return (
        <>
           <div className='px-12 mt-14'>
                 <h3 className='text-xl font-bold'>Bookmarked Blogs : {booked.length}</h3>
            </div>
            {
                booked.map((b, index) => <BookmarkedContainer 
                key = {index}
                b = {b}
                />)
            }
        </>
    );
};

export default Bookmarked;