import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GithubProvider } from './context/GithubContext';
import { AlertProvider } from './context/AlertContext';

import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Alert from './component/layout/Alert';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './pages/User';

function App() {
  return (

    <GithubProvider>
      <AlertProvider>

        <Router >

          <div className='flex flex-col justify-between  h-screen'>

            <Navbar />

            <main className='container p-10 mx-auto' >
              <Alert />
              <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/*' element={<NotFound />} />

              </Routes>


            </main>



            <Footer />
          </div>


        </Router>
      </AlertProvider>


    </GithubProvider>



  );
}

export default App;
