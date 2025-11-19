import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const allDestinations = [
  { title: "Bali, Indonesia", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { title: "Paris, France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
  { title: "Tokyo, Japan", img: "https://observer.com/wp-content/uploads/sites/2/2025/03/getty-images-Sowzfe6mbGM-unsplash.jpg?quality=80&w=635" },
  { title: "New York, USA", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401" },
  { title: "Dubai, UAE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpJkz3lPjVjOCCR23C_KNMvUI02GRIiXOZg&s" },
  { title: "Santorini, Greece", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjvNoo8n9dK7p3tJVLNi3CStxV7JZ9Yv8UA&s" },
  { title: "Sydney, Australia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRIq_aHMWP8bOKTu3Qh6Juy0JLBbcFGFhMA&s" },
  { title: "Rome, Italy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxuBiToNWGz54-CdfJNMnl-BXf-wgrWr4UA&s" },
];

const Home: React.FC = () => {
  const [query, setQuery] = useState("");

  const filtered = allDestinations.filter((place) =>
    place.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        px: 2,
        py: 4,
        color: "white",
      }}
    >
      {/* HERO + SEARCH */}
      <Box textAlign="center" mt={4}>
        <Typography variant="h3" fontWeight="bold">
          Explore The World With Us
        </Typography>
        <Typography mt={1} fontSize={18}>
          Find your next destination & best deals
        </Typography>

        {/* LIVE SEARCH BAR */}
        <Box
          mt={3}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: 2,
            width: { xs: "90%", sm: "60%", md: "40%" },
            margin: "0 auto",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search destinations..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
            }}
          />
        </Box>
      </Box>

      {/* DESTINATIONS SWIPER */}
      <Container sx={{ py: 5 }}>
        {filtered.length > 0 ? (
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
          >
            {filtered.map((place, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    backgroundColor: "rgba(255,255,255,0.85)",
                  }}
                >
                  <CardMedia component="img" height="200" className="h-50 w-50" image={place.img} />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {place.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Discover amazing culture, food & unforgettable experiences.
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Typography
            variant="h6"
            textAlign="center"
            color="white"
            mt={3}
            fontWeight="bold"
          >
            No destinations found.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Home;
