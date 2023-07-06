import React,{ useState } from "react";
import Header from '../header'
// iconify
import { Icon } from '@iconify/react';

function Dashboard() {
  const [open, setOpen] = useState(false);

    return (
      <div >
         <Icon icon="mdi:github" style={{ fontSize: '24px', zIndex:2 }} />
        <Header onOpenNav={() => setOpen(true)} />
      </div>
    );
  }
  
  export default Dashboard;

