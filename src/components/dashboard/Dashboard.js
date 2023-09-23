import React,{ useState } from "react";
import "../../style.css"
import Header from '../header'
import InrtoPage from "./IntroPage";
import DetailsPage from "./DetailsPage";


function Dashboard() {
  const [open, setOpen] = useState(false);

    return (
      <div className="dashboard" >
        <Header onOpenNav={() => setOpen(true)}  />
        <div>
        <InrtoPage  />
        {/* <DetailsPage/> */}
        </div>
      </div>
    );
  }
  
  export default Dashboard;

