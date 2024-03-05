import React from 'react';
import Card from './Card';
import Footer from './contact/Footer';
import { Grid } from '@mui/material';
import { productData } from './products';

const Services = ({ addToCart }) => {
  return (
    <div className="services-page">
      <h2 style={{ textAlign:'center', justifyContent:'center', fontSize:'34px', marginBottom:"20px", marginTop:'90px', color:'#3366cc' }}>
        Our Services
      </h2>
      <Grid container spacing={2}>
        {productData.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </Grid>
      <Footer/>
    </div>
  );
};

export default Services;
