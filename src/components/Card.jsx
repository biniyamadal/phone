import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Button from '@mui/material/Button';
//import { Link } from 'react-router-dom';

export default function ActionAreaCard({ product, addToCart }) {
  return (
    <Grid item className='box' key={product.id} xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: 345, boxShadow: 3, margin: 2, padding: 2, }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={product.image}
            alt={product.name}
           
          />
          <CardContent sx={{ '&:hover': {
                backgroundColor: 'gray',
              },bgcolor:"white"}}>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="" style={{color:"yellowgreen",fontSize:"1.2rem"}}>
              {`${product.price} ETB`} 
            </Typography>
          </CardContent>
            
          <Button
            variant="contained"
            onClick={() => addToCart(product)} // Update prop name to match
            sx={{
              position: 'absolute',
              bottom: 34,
              borderRadius: '5px',
              left: '75%',
              width: '45%',
              transform: 'translateX(-50%)',
              '&:hover': {
                backgroundColor: 'darkblue',
              },
            }}
          >
            Add To Cart
          </Button>
         
        </CardActionArea>
      </Card>
    </Grid>
  );
}
