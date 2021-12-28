import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Dashboard from './Dashboard';
import Studentlist from './Studentlist';
import Addstudent from './Addstudent';
import Attendencelist from './Attendencelist';
import Addattend from './Addattend';

function App() {
  return (
 <>
 <BrowserRouter>
  <div id="wrapper">
   <Sidebar></Sidebar>

  <div id="content-wrapper" class="d-flex flex-column">
    <Topbar></Topbar>

  <div id="content">
    <div className='container-fluid'>
      <Routes>
      <Route path="/" element={<Dashboard></Dashboard>}></Route>
      <Route path="/student" element={<Studentlist></Studentlist>}></Route>
      <Route path="/addstudent" element={<Addstudent></Addstudent>}></Route>
      <Route path="/attendence/:id" element={<Attendencelist></Attendencelist>}></Route>
      <Route path="/addAttendence/:id" element={<Addattend></Addattend>}></Route>
      </Routes>
    </div>

  </div>
  </div>
  </div>
  </BrowserRouter>
 </>
  );
}

export default App;
