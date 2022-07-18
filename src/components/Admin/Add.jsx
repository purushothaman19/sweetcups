import * as React from 'react';
import Paper from '@mui/material/Paper';
import Swal from 'sweetalert2';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./add.css";
import * as axios from 'axios';


export default function AddItem(props) {

    const [cake, setCake] = React.useState({
        availableSizes: [],
        prices: {},
        image: File
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

    // const [err, setErr] = React.useState('');

    const handleSumbit = (e) => {

        setCake(prevState => ({
            ...prevState,
            cakeName: cakeName,
            cakeImgUrl: img,
            availableSizes: sSizes,
            prices: prices
        }));

        console.log(cake);

        const headers = {
            'Authorization': window.sessionStorage.getItem('token'),
            "Content-Type": "multipart/form-data",
        };

        Swal.fire({
            title: 'Ready to Upload?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios({
                    method: 'post',
                    url: 'https://sweetcups-server.herokuapp.com/dashboardAdd',
                    data: {
                        'cakeName': cakeName,
                        'cakeImgUrl': img,
                        'prices': JSON.stringify(prices)
                    },
                    headers: headers,
                }).then(Swal.fire('Added!', '', 'success')) 
                .catch( (e) => {
                    console.log(e.message);
                    // setErr(e.message);
                if(e.message != null)  Swal.fire(`${e.message}`, '', 'info')
                else     Swal.fire('Added!', '', 'success')
                })
            }
        })
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
                                <span style={{ fontSize: '0.7rem' }}> Please select all the Available sizes of this cake </span>
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
                            <span style={{ fontSize: '0.7rem' }}> Enter all the respective prices </span>

                            {sSizes.length ?
                                <div>


                                    {sSizes.map((option) => (

                                        <>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text border-0" id="basic-addon3" style={{ textTransform: 'capitalize' }}> {option} : </span>
                                                <input
                                                    required
                                                    type="number"
                                                    value={Object.keys(prices) ? prices[String(option) + 'value'] : 0}
                                                    name={option + "value"}
                                                    onChange={handlePrice}
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
                                        <img src='https://cdn.dribbble.com/users/129972/screenshots/2888283/74_03_smile.gif' alt='' />
                                        <p> Please select sizes to set prices </p>
                                    </Paper>
                                </>

                            }

                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12' style={{ marginTop: '5%' }}>
                            <button type='button' onClick={handleSumbit} disabled={canSubmit} className='btn' style={{ borderRadius: '20px', background: 'yellow', fontSize: '1rem' }}> Submit </button>
                        </div>

                    </div>
                </div>

            </form>

        </section>
    )

}