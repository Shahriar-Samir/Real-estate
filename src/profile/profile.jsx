import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
        <div role="tablist" className="tabs tabs-boxed">
        <NavLink role="tab" to='/profile/favorites' className="tab">Favorite</NavLink>
        <NavLink role="tab" className="tab" to='/profile/news'>News</NavLink>
      </div>
        <Outlet/>
        </div>
    );
};

export default Profile;