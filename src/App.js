import './App.css';
import NavBar from './components/NavBar';
import { Notes } from './components/Notes';
function App() {
  return (
    <div className=" min-w-max min-h-screen bg-[#eee] bg-[url(https://www.transparenttextures.com/patterns/cubes.png)]">
            <NavBar/>
            <Notes/> 
    </div>
  );
}

export default App;
