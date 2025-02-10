import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Base, ScrollToTop } from './components';
import { Error, Homepage, Login, Signup, Terms_and_Conditions, Gallery } from './pages';
import { AuthProvider } from './utils';

export default function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Base />}>
              <Route path='' element={<Homepage />} />
              <Route path='gallery' element={<Gallery />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='terms_and_conditions' element={<Terms_and_Conditions />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter >
      </AuthProvider>
    </>
  )
}

