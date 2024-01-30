import './index.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import { LanguageProvider } from './LanguageContext';

import { 
  Route,
  Routes
 } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <LanguageProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard/*' element={<Dashboard/>}/>
      </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
