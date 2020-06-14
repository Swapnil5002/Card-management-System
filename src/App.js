import React, { useState, useEffect} from 'react';
import './App.scss';
import Routing from './routing';
import Sidebar from './components/Sidebar/sidebar';
import Headers from './components/Header/header';
// import Footer from './components/Footer/Footer';
import BreadCrumbs from './common/BreadCrumb/breadcrumb';


function App() {
  const [shouldShow, setshouldShow] = useState(false);

  useEffect(() => {
    if(window.location.pathname !== '/login' || window.location.pathname == '') {
      setshouldShow(true);
    }
  }, [window.location.pathname]);

  return (
    <div>
      {shouldShow && <Headers/>}
      <div className='pages'>
        {shouldShow && <Sidebar/>}
        {shouldShow && <div className='bread_crumb'><BreadCrumbs/></div>}
        <div className='routing'>
          <Routing/>
        </div>
      </div>
      {/* {shouldShow && <div className='foot'><Footer/></div>} */}
    </div>
  );
}

export default App;
