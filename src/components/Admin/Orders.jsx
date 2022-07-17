import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Orders() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [cakes, fetchCakes] = React.useState([])
  const [loaded, isloaded] = React.useState(false)
  // const [err, setErr] = React.useState('')

  const getData = async () => {
    fetch('https://sweetcups-server.herokuapp.com/cakeDetails')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        fetchCakes(res)
      })
  }

  React.useEffect(() => {
    if (cakes.length !== 0) {
      isloaded(true);
    }
    getData()
  }, [cakes])

  return (

    <section id='orders'>


      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Completed" value="1" />
              <Tab label="Pending" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">

            <div id='completed'>

              <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                  <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Position</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          style={{ width: '45px', height: ' 45px' }}
                          class="rounded-circle"
                        />
                        <div class="ms-3">
                          <p class="fw-bold mb-1">John Doe</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="fw-normal mb-1">Software engineer</p>
                    </td>
                    <td>
                      <span class="badge badge-success rounded-pill d-inline">Completed</span>
                    </td>
                    <td>Senior</td>
                    <td>
                      <button type="button" class="btn btn-link btn-sm btn-rounded">
                        Edit
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>

            </div>

          </TabPanel>

          <TabPanel value="2">
            <div id='pending'>

              <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                  <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Position</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          style={{ width: '45px', height: ' 45px' }}
                          class="rounded-circle"
                        />
                        <div class="ms-3">
                          <p class="fw-bold mb-1">John Doe</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="fw-normal mb-1">Software engineer</p>
                    </td>
                    <td>
                      <span class="badge badge-success rounded-pill d-inline">Completed</span>
                    </td>
                    <td>Senior</td>
                    <td>
                      <button type="button" class="btn btn-link btn-sm btn-rounded">
                        Edit
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>

            </div>


          </TabPanel>

        </TabContext>

      </Box>
    </section>

  );
}
