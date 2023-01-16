import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Layout/Routes';

function App() {
  return (
    <div className='md:w-[80%] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
