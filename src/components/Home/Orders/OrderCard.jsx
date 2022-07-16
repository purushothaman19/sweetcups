import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';


function OrderCard(props) {

    return (
        <Card sx={{ maxWidth: 345 }}>

            <CardMedia
                component="img"
                image={props.src}
                alt="Paella dish"
            />

            <CardHeader
                title={props.name}
                subheader={props.price}
            />
        </Card>
    )

}


export default OrderCard