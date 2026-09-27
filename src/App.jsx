import Navbar from './components/Navbar';
import Home from './components/Home';
// import Register from './components/Register'; // Hito 2
// import Login from './components/Login'; // Hito 2
import Cart from './components/Cart'; // Hito 3
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Navbar />
      <div className='flex-grow-1'>
        {/* Tips del Hito 2: Comenta o descomenta según la vista que quieras mostrar */}
        <Home />
        {/* <Cart />  Hito 3 */}
        {/* <Register /> */}    
        {/* <Login /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;