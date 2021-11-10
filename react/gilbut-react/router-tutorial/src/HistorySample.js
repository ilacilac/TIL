import React from 'react'
import { useNavigate } from 'react-router';

const HistorySample = () => {
  const navigator = useNavigate();

  const handleGoBack = () => navigator(-1);
  const handleGoHome = () => navigator('/');
  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  )
}

export default HistorySample;
