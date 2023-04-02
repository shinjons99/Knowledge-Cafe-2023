import React from 'react';
import profilePic from '../../assets/images/afraem.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 max-w-7xl mx-auto border-b border-[#dbdbdb] px-4 md:px-12">
                 <div className="flex-1">
                   <a className="btn btn-ghost normal-case text-4xl font-bold">Knowledge Cafe</a>
                 </div>
                 <div className="flex-none gap-2">
                   <div className="dropdown dropdown-end">
                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                       <div className="w-10 rounded-full">
                         <img src={profilePic}/>
                       </div>
                     </label>
                     <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                       <li>
                         <a className="justify-between">
                           Profile
                           <span className="badge">New</span>
                         </a>
                       </li>
                       <li><a>Settings</a></li>
                       <li><a>Logout</a></li>
                     </ul>
                   </div>
                 </div>
               </div>
        </div>
    );
};

export default Navbar;