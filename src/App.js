/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {

  let [title, setTitle] = useState([
    'state는 변경되면 HTML이 자동 재렌더링 됨 = HTML이 새로고침없어도 변경됨', 
    '자주 바뀌는, 중요한 변수는 state에 넣자',
    'state 변경함수로 변경해야 재렌더링이 잘 일어남'
  ]);
  let [like, setLike] = useState(0);
  
  // function changeTitle() {
  //   var newArray = [...title];
  //   newArray[0] = 'state의 item을 변경하고 싶으면 deep copy한 후 수정';
  //   newArray[1] = 'deep copy: 값 공유x, 서로 독립적인 값을 가지는 복사';
  //   newArray[2] = '리액트 대원칙: immutable data'
  //   setTitle( newArray );
  // }

  return (
    <div className="App">
      <Hello />
      <Welcome />
      <div className='black-nav'>
        <div>React Basic</div>
      </div>
      {/* <button onClick={ changeTitle } >버튼</button> */}
      <div className='list'>
        <h3> { title[0] } <span onClick={ ()=>{ setLike(like + 1) } }> 👍 </span> { like } </h3> 
        <p>2월 1일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { title[1] } </h3>
        <p>2월 2일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { title[2] } </h3>
        <p>2월 3일 발행</p>
        <hr/>
      </div>
      
      <Modal />

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
    <h2>Component</h2>
    <p>반복출현하는 HTML 덩어리</p>
    <p>자주 변경되는 HTML UI들</p>
    <p>다른 페이지 만들때</p>
    <p>state쓸 때 복잡해짐</p>
  </div>
  )
}

export default App;
