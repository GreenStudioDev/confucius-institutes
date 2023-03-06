import "../App.css";
import { InstituteList } from ".";


export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="heading">
          <h2>Confucius Institutes in Latin America and the Caribbean</h2>
        </div>
        <div className="listings">
        <InstituteList/>
        </div> 
      </div>
    </>
  );
};

