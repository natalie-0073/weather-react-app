
import "./App.css";
import "./main.css";

import Search from "./Search";
import Info from "./Info";
import Weather from "./Weather";
import Footer from "./Footer";
export default function App() {
  return (
    <div>
    <div className="content">
      <div className="container">
        <Search />
        <Info />
        <Weather />
        
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}

