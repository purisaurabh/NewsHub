import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const App = () => {

  const [progress, setProgress] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}

      />
          <Routes>
            <Route exact path="/" element={ <News setProgress={setProgress} key="general" pageSize = {6}  category='general'/>} />
            <Route exact path="/business" element={ <News setProgress={setProgress} key="business" pageSize = {6}  category='business' />} />
            <Route exact path="/entertainment" element={ <News setProgress={setProgress} key="entertainment" pageSize = {6}  category='entertainment'/>} />
            <Route exact path="/general" element={ <News setProgress={setProgress} key="general" pageSize = {6}  category='general'/>} />
            <Route exact path="/health" element={ <News setProgress={setProgress} key="health" pageSize = {6}  category='health'/>} />
            <Route exact path="/science" element={ <News setProgress={setProgress} key="science" pageSize = {6}  category='science'/>} />
            <Route exact path="/sports" element={ <News setProgress={setProgress} key="sports" pageSize = {6}  category='sports'/>} />
            <Route exact path="/technology" element={ <News setProgress={setProgress} key="technology" pageSize = {6}  category='technology'/>} />
          </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
