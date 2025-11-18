import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";

const destinations = [
  {
    title: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Paris, France",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    title: "Tokyo, Japan",
    img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
  },
];

const Home: React.FC = () => {
  return (
    <Box>

      {/* HERO SECTION */}
      <Box
        sx={{
          height: "70vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Explore The World With Us
        </Typography>
        <Typography mt={1} fontSize={18}>
          Find your next destination & best travel deals
        </Typography>

        {/* Search Bar */}
        <Box
          mt={3}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            width: { xs: "90%", sm: "60%", md: "40%" },
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search destinations..."
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: "none" }}
          >
            Search
          </Button>
        </Box>
      </Box>

      {/* DESTINATIONS SECTION */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Popular Destinations
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {destinations.map((place, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                width: { xs: "100%", sm: "45%", md: "30%" },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={place.img}
                alt={place.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {place.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discover amazing places, culture, food & unforgettable
                  experiences.
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
