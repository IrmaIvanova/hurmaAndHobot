import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PropTypes from 'prop-types'; 
import Authorization from '../Authorization/Authorization'
import { cn } from '@bem-react/classname'
import './AuthAndRegistration.scss'

export const cnAuthAndRegistration = cn("AuthAndRegistration");

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        
          <div>{children}</div>
       
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const AuthAndRegistration = () =>{
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div className={cnAuthAndRegistration("")}> 
       <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Войти" {...a11yProps(0)} />
          <Tab label="Зарегистрироваться" {...a11yProps(1)} />
        </Tabs>
         <TabPanel value={value} index={0}>
          <Authorization type="authorization"/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Authorization type="registration"/>
        </TabPanel>
      </div>
  )
}

export default AuthAndRegistration;