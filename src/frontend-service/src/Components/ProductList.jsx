import React from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../main.css';


const ProductList = ({ products }) => {
  return (
    <>
        <Grid container direction="column" sx={{ height: '100vh' }}>
            <Grid item sx={{ textAlign: 'center', marginBottom: 20 }}>
            <Typography variant="h2" component="h1" sx={{ padding: 1, top: 5 }}>
                Trending Product's
            </Typography>
            <Typography variant="h4" component="h1" sx={{ top: 5, color: 'rgb(25, 106, 255)' }}>
                Checkout this treding products
            </Typography>
            </Grid>
            <Grid item container spacing={5} justifyContent="center" alignItems="center">
            {products.map(
                ({ id, image, name, description, price: priceString }) => (
                <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                    <Link to={`/product/${id}`} className="no-underline">
                    <Card>
                        <CardMedia
                        component="img"
                        image={image}
                        alt={name}
                        sx={{
                            height: 350,
                            width: 350,
                            '&:hover': {
                            transform: 'scale(1.5)',
                            transition: 'transform 0.2s ease-in-out',
                            },
                        }}
                        />
                        <CardContent>
                        <Typography variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                        <Typography variant="body1" component="p">
                            ${priceString}
                        </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>
                )
            )}
            </Grid>
        </Grid>
    </>
  )
};

export default ProductList;