/* eslint-disable */
import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import CreateWord from "./component/CreateWord";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from "./component/EmptyPage";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList></DayList>} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
