import logo from './logo.svg';
import './App.css';
import First from './First';
import Cource from './Cource';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Second from './Second';
import Userlogin from './User/Userlogin';
import Userreg from './User/Userreg';
import Dashboard from './User/Dashboard';
import Mycources from './User/Mycources';
import Favcource from './User/Favcource';
import Recommendedcource from './User/Recommendedcource';
import Profilesettings from './User/Profilesettings';
import Changepassword from './User/Changepassword';
import Loginteacher from './Teacher/Loginteacher';
import Regteacher from './Teacher/Regteacher';
import Dashteacher from './Teacher/Dashteacher';
import Teachercource from './Teacher/Teachercource';
import Courceadd from './Teacher/Courceadd';
import Myuser from './Teacher/Myuser';
import Teacherpro from './Teacher/Teacherpro';
import Passwordchange from './Teacher/Passwordchange';
import Latestcource from './Latestcource';
import Popularcource from './Popularcource';
import Featuredteachers from './Featuredteachers';
import About from './About';
import Teacherdetails from './Teacherdetails';
import Categorycource from './Categorycource';
import New from './New';

function App() {
  return (
    <BrowserRouter>
      <First/>
      <Routes>
        <Route path='/' element={<Second/>} />
        <Route path='/detail/:course_id' element= {<Cource/>} />
        <Route path='/latestcourses' element={<Latestcource/>} />
        <Route path='/popularcourses' element={<Popularcource/>} />
        <Route path='/popularteachers' element={<Featuredteachers/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/teacherdetail/:teacher_id' element={<Teacherdetails/>}/>
        <Route path='/category/:categoty_slug' element={<Categorycource/>} />
        <Route path="/new" element={<New/>} />




        <Route path="/userlogin" element={<Userlogin/>} />
        <Route path="/userreg" element={<Userreg/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/mycources' element={<Mycources/>} />
        <Route path='/favcourses' element={<Favcource/>} />
        <Route path='/recommendedcourses' element={<Recommendedcource/>} />
        <Route path='/profile' element={<Profilesettings/>} />
        <Route path='/changepassword' element={<Changepassword/>} />


        <Route path="/teacherlogin" element={<Loginteacher/>} />
        <Route path="/teacherrreg" element={<Regteacher/>} />
        <Route path="/teacherboard" element={<Dashteacher/>} />
        <Route path='/teachercourses' element={<Teachercource/>} />
        <Route path='/add-course' element={<Courceadd/>} />
        <Route path='/teacherusers' element={<Myuser/>} />
        <Route path='/teacherprofile' element={<Teacherpro/>} />
        <Route path='/resetpassword' element={<Passwordchange/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
