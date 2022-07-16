import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';

import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./add.css";

import * as axios from 'axios';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));


export default function AddItem(props) {

    const [cake, setCake] = React.useState( {
        "cakeName" : "",
        prices: {},
        cakeImgUrl: File
    })

    const [img, setImg] = React.useState();

    const handleImg = (event) => {
        setImg(event.target.files[0])
    };

    const [canSubmit, setCanSubmit] = React.useState(true);

    const [cakeName, setcakeName] = React.useState('');
    const handleName = (event) => {
        setcakeName(event.target.value)
    };

    const [sizes, setSizes] = React.useState(() => []);

    const [sSizes, setsSizes] = React.useState([]);

    const handleSizes = (event, newSize) => {
        setSizes(newSize);
        setsSizes(newSize);
    };

    const [prices, setPrice] = React.useState({})

    const handlePrice = (e) => {
        console.log(e.target); 
        setPrice((preV) => ({
            ...preV,
            [e.target.name]: Number(e.target.value)
        }))
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        
        let formData = new FormData();
        formData.append("cakeName", cakeName);
        formData.append("prices", prices);
        formData.set("data", img);
        
        
        setCake(prevState => ({
            ...prevState,
            "cakeName": cakeName,
            cakeImgUrl: img,
            prices: prices
         }));

         console.log(cake);

         const headers = { 
            'Authorization': 'Bearer my-token',
            "Content-Type": "multipart/form-data",
        };

        axios({
            method: 'post',
            url: 'http://localhost:4000/dashboardAdd',
            data: formData
          }).then( res => console.log(res.data))
    .catch( err => console.log(err));
    } 

    React.useEffect(() => {
        console.log(prices);
        console.log(cake);

        if (sSizes.length && cakeName && img && Object.keys(prices)) setCanSubmit(false)
        else setCanSubmit(true)
    }, [canSubmit, sSizes, cakeName, img, prices, cake])

    // console.log((sSizes.length) === 0);

    return (
        <section id='add-item'>
            <form>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12' id='left-add'>

                            <div className="input-group mb-3" id='cakeimg'>
                                <span className="input-group-text border-0" id="basic-addon3">Cake Image: </span>
                                <input
                    
                                    type="file"
                                    accept='image/*'
                                    className="form-control rounded"
                                    id="basic-url3"
                                    aria-describedby="basic-addon3"
                                    onChange={handleImg}
                                />
                            </div>

                            <div className="input-group mb-3" id='cakename'>
                                <span className="input-group-text border-0" id="basic-addon3">Cake Name: </span>
                                <input
                                    required
                                    value={cakeName}
                                    onChange={handleName}
                                    type="text"
                                    className="form-control rounded"
                                    id="basic-url3"
                                    aria-describedby="basic-addon3"
                                />
                            </div>

                            <div style={{ paddingTop: '5%' }}>
                                <p> Available Sizes </p>
                                <Stack direction="row" spacing={4} style={{ justifyContent: 'center' }}>

                                    <ToggleButtonGroup
                                        value={sizes}
                                        onChange={handleSizes}
                                        aria-label="device"
                                    >
                                        <ToggleButton value="small" aria-label="small"> Small </ToggleButton>
                                        <ToggleButton value="medium" aria-label="medium"> Medium </ToggleButton>
                                        <ToggleButton value="mediumplus" aria-label="medium+"> Medium+ </ToggleButton>
                                        <ToggleButton value="large" aria-label="large"> Large </ToggleButton>
                                    </ToggleButtonGroup>
                                </Stack>
                            </div>


                        </div>

                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <p> Sizes </p>

                            {sSizes.length ?
                                <div>


                                    {sSizes.map((option) => (

                                        <>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text border-0" id="basic-addon3" style={{ textTransform: 'capitalize' }}> {option} : </span>
                                                <input
                                                    required
                                                    type="number"
                                                    value={ Object.keys(prices) ? prices[String(option)+'value'] : 0 }
                                                    name= {option + "value"}
                                                    onChange = {handlePrice}
                                                    className="form-control rounded"
                                                    id="basic-url3"
                                                    aria-describedby="basic-addon3"
                                                />
                                            </div>
                                            <br></br>
                                        </>
                                    ))
                                    }
                                </div>
                                :
                                <>
                                    <Paper elevation={3} style={{ margin: '15% 25%', width: '50%', padding: '5%' }}>
                                    <img src='https://cdn.dribbble.com/users/129972/screenshots/2888283/74_03_smile.gif' alt=''/>
                                        <p> Please select sizes to set prices </p>
                                    </Paper>
                                </>

                            }

                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12' style={{ marginTop: '5%' }}>
                            <button onClick={handleSumbit} disabled={canSubmit} className='btn' style={{ borderRadius: '20px', background: 'yellow', fontSize: '1rem' }}> Submit </button>
                        </div>

                    </div>
                </div>

            </form>

        </section>
    )

}
