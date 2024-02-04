import { Routes, Route } from 'react-router-dom';

import 'bootstrap'

import FrontLayout from './FrontLayout';
import LoginLayout from '../components/LoginLayout';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import Home from './Home';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FrontLayout />}>
          <Route path='' element={<Home />}></Route>
          <Route path='/auth' element={<LoginLayout />}>
            <Route path='sign_up' element={<RegisterForm />} />
            <Route path='login' element={<LoginForm />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
