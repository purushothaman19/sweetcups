import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import "./dash.css";
import Edit from './edit';
import Orders from './Orders';
import AddItem from './Add';


export default function AdminDasboard() {
    const [value, setValue] = React.useState('1');

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <section id='dashboard'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                            <Tab label="Orders" value="1" />
                            <Tab label="Add Product" value="2" />
                            <Tab label="Edit Product" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Orders />
                    </TabPanel>

                    <TabPanel value="2">
                        <AddItem />
                    </TabPanel>

                    <TabPanel value="3">
                        <Edit />
                    </TabPanel>

                </TabContext>
            </Box>
        </section>
    );
}
