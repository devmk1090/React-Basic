import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [a, b] = useState([
    'state는 변경되면 HTML이 자동 재렌더링 됨= HTML이 새로고침없어도 변경됨', 
    '자주 바뀌는, 중요한 변수는 state에 넣자'
  ]);

  let posts = '강남 고기 맛집';  
  
  return (
    <div className="App">
      <div className='black-nav'>
        <div>React Basic</div>
      </div>
      <div className='list'>
        <h3> { a[0] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { a[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
