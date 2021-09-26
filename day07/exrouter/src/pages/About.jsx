import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    
    console.log(`검색할때`+location.search);

    const query = qs.parse(location.search,{
        ignoreQueryPrefix:true
    });

    const detail = query.detail === 'true';

    return (
        <div>
            <h1>소개페이지</h1>
            <p>이런 사람이라며 소개</p>
            {detail && <p>출력되는문구</p>} {/* /about?detail=true  검색시 확인가능*/}
        </div>
    )
}

export default About;