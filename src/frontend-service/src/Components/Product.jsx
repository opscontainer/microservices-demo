import { useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import "../main.css";

const Product = ({ cartCount, setCartCount }) => {
  const [quantity, setQuantity] = useState(1);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const product = {
    id: 1,
    image:
      "https://cymbal-shops.retail.cymbal.dev/static/img/products/sunglasses.jpg",
    name: "Product 1",
    description: "This is a great product!",
    price: 19.99,
  };

  const additionalProducts = [
    {
      id: 2,
      image:
        "https://cymbal-shops.retail.cymbal.dev/static/img/products/sunglasses.jpg",
      name: "Product 2",
      description: "This is another great product!",
      price: 29.99,
    },
    {
      id: 3,
      image:
        "https://cymbal-shops.retail.cymbal.dev/static/img/products/sunglasses.jpg",
      name: "Product 3",
      description: "This is a fantastic product!",
      price: 39.99,
    },
  ];

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    setNotificationOpen(true);
    setTimeout(() => setNotificationOpen(false), 3000);
  };

  return (
    <>
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              style={{ height: 650, width: 650, borderRadius: "150px" }}
            />
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography variant="h2" component="h2" sx={{ paddingBottom: 2 }}>
                {product.name}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  paddingTop: 2,
                  fontFamily: "Roboto",
                  fontStyle: "italic",
                }}
              >
                ${product.price}
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                sx={{ paddingTop: 1, fontFamily: "Roboto" }}
              >
                {product.description}
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Grid item xs={6}>
                  <Input
                    type="number"
                    label="Quantity"
                    value={quantity}
                    onChange={(event) =>
                      setQuantity(event.target.valueAsNumber)
                    }
                    inputProps={{ min: 1, max: 10 }}
                    sx={{
                      paddingTop: 2,
                      borderRadius: "10px",
                      "& input": { textAlign: "center" },
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button
                    onClick={handleAddToCart}
                    sx={{
                      color: "white",
                      backgroundColor: "#7030A0",
                      fontFamily: "Arial",
                      fontWeight: "bold",
                    }}
                  >
                    Add To Cart
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CardContent>
          <Grid
            container
            direction="column"
            sx={{
              height: "100vh",
              borderRadius: "10px",
            }}
          >
            <Grid item sx={{ textAlign: "center", marginBottom: 20 }}>
              <hr style={{ border: "2px solid #FFFFF", width: "100%" }} />

              <Typography
                variant="h3"
                component="h1"
                sx={{ padding: 1, top: 2 }}
              >
                You May Also Like
              </Typography>
            </Grid>
            <Grid
              item
              container
              spacing={5}
              justifyContent="center"
              alignItems="center"
            >
              {additionalProducts.map(
                ({ id, image, name, description, price: priceString }) => (
                  <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                    <Link to={`/product/${id}`} className="no-underline">
                      <Card>
                        <CardMedia
                          component="img"
                          image={image}
                          alt={name}
                          sx={{
                            height: 250,
                            width: 250,
                            "&:hover": {
                              transform: "scale(1.5)",
                              transition: "transform 0.2s ease-in-out",
                            },
                          }}
                        />
                        <CardContent>
                          <Typography variant="h5" component="h2">
                            {name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
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
        </CardContent>
      </Card>
    </>
  );
};

export default Product;
