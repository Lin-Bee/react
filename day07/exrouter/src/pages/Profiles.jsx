import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h2>회원목록</h2>
            <ul>
                <li><Link to ="/profile/asth"/>asth</li>
                <li><Link to ="/profile/bsth"/>bsth</li>
            </ul>
            <Route path= "/profiles" exact render={()=> <div>회원을 선택해주세요</div>}/>
            <Route path="/profiles/:username" component={Profile} />
        </div>
    )
}

export default Profiles;