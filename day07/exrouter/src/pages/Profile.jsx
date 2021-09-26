import React from 'react';

const profileData = {
    asth : {
        id: '1',
        name: 'A씨',
        desc: '고기먹는직업'
    },
    
    bsth : {
        id: '2',
        name: 'B씨',
        desc: '고기굽는직업'
    }
}

const Profile = ({match}) => {
    
    const {username} = match.params;
    const profile = profileData[username]; // 숙제 map으로 id를 불러와서 찾기

    if(!profile){
        return <div>존재하지 않는 사용자 정보입니다.</div>
    }
    return (
        <div>
         {/* /profile/Asth   ← 프로그래밍쪽 파라미터
         /about?details = true ← 쿼리  ←pathname+search(?설명설명) */}
        
            <h3>{username} ({profile.name})</h3>
            <p>{profile.desc}</p>

        </div>
    )
}

export default Profile;