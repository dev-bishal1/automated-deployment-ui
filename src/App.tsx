import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './page/Home';

function App() {
  return (
    <>
      <ToastContainer />
      <main className="bg-[#0f172b] min-h-screen text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
