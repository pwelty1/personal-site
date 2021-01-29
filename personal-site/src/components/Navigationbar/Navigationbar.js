import React from 'react';
import {useNavigate} from '@reach/router'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const HOME = 0
const ABOUT = 1
const CONTACT = 2

export default function Navigationbar({currentPage}) {
  const history = useNavigate()

  const initialPage = (pathname) => {
    switch(pathname){
        case '/home':
            return 0
        case '/about':
            return 1
        case '/contact':
            return 2
        default:
            return 0 
    }
  }

  var curP = initialPage(currentPage.pathname)
  const [activeTab, setActiveTab] = React.useState(curP)

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
    switch(newValue){
        case HOME:
            history('/home')
            break
        case ABOUT:
            history('/about')
            break
        case CONTACT:
            history('/contact')
            break
        default:
            break
    }
  };

  return (
      <AppBar position="static" style={{ alignItems: 'center'}}>
        {/* <p>W</p> */}
        <Tabs value={activeTab} onChange={handleChange} >
          <Tab label="Home"/>
          <Tab label="About"/>
          <Tab label="Contact"/>
        </Tabs>
      </AppBar>
  );
}