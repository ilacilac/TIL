import React from "react";
import qs from 'qs';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const About = () => {
  // const params = useParams();
  // const navigate = useNavigate();
  const location = useLocation();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>소개 페이지</p>
      {showDetail && <p>detail값을 true로 설정하셨군용</p>}
    </div>
  );
};

export default About;
