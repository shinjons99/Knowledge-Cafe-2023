import React from 'react';
import Bookmarked from './Bookmarked/Bookmarked';
import SpentTime from './SpentTime/SpentTime';

const Sidebar = ({readTime, booked}) => {

    

    return (
        <div className='bg-[rgba(101,101,101,0.1)] py-8 rounded-lg md:sticky md:top-0 min-h-[100vh]'>
            <SpentTime readTime = {readTime}/>
    
            <Bookmarked booked = {booked}/>
             
        </div>
    );
};

export default Sidebar;