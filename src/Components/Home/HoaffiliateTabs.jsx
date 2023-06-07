import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import './Hometab.css'
import HomeAffiliated from './HomeAffiliated';
import Australia from './Australia';
import USA from './USA';
import Newzealand from './Newzealand';

export default function HoaffiliateTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className='Hometab__container'>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Australia" value="2" />
            <Tab label="USA" value="3" />
            <Tab label="New Zealand" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <HomeAffiliated/>
        </TabPanel>
        <TabPanel value="2">
            <Australia/>
        </TabPanel>
        <TabPanel value="3">
            <USA/>
        </TabPanel>
        <TabPanel value="4">
            <Newzealand/>
        </TabPanel>
      </TabContext>
    </Box>
    </div>
    </>
  );
}