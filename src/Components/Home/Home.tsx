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

// INSIDE INDIA – STATES
const indianStates = [
  "Delhi", "Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu",
  "Rajasthan", "Gujarat", "Punjab", "Haryana", "Bihar", "West Bengal",
  "Telangana", "Kerala", "Madhya Pradesh", "Assam", "Odisha", "Goa",
  "Uttarakhand", "Jharkhand", "Chhattisgarh"
];

// OUTSIDE INDIA – COUNTRIES
const countries = [
  "USA", "France", "Japan", "Australia", "UAE", "Italy", "Singapore",
  "Canada", "Germany", "Thailand", "Maldives", "Turkey"
];

const Home: React.FC = () => {
  const [query, setQuery] = useState("");

  // NEW STATES
  const [placeType, setPlaceType] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

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

      {/* SEARCH BAR SECTION */}
      <div>
        <Box
          sx={{
            background: "rgba(255,255,255,0.9)",
            p: 3,
            borderRadius: 2,
            maxWidth: 950,
            mx: "auto",
            mt: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >

          {/* WHERE TO */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              select
              fullWidth
              label="Where to?"
              value={placeType}
              onChange={(e) => setPlaceType(e.target.value)}
              SelectProps={{ native: true }}
              InputLabelProps={{ shrink: true }}   // ✅ FIX
              sx={{ background: "white", borderRadius: 1 }}
            >
              <option value="">Select</option>
              <option value="inside">Inside India</option>
              <option value="outside">Outside India</option>
            </TextField>


            {/* STATES / COUNTRIES */}
            <TextField
              select
              fullWidth
              label={placeType === "inside" ? "Select State" : "Select Country"}
              value={selectedPlace}
              onChange={(e) => setSelectedPlace(e.target.value)}
              disabled={!placeType}
              SelectProps={{ native: true }}
              sx={{ background: "white", borderRadius: 1 }}
            >
              <option value="">Select</option>
              {(placeType === "inside" ? indianStates : countries).map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </TextField>
          </Box>

          {/* DATES */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              type="date"
              label="Check-in"
              InputLabelProps={{ shrink: true }}
              sx={{ background: "white", borderRadius: 1 }}
            />
            <TextField
              fullWidth
              type="date"
              label="Check-out"
              InputLabelProps={{ shrink: true }}
              sx={{ background: "white", borderRadius: 1 }}
            />
          </Box>

          {/* ADULTS / CHILDREN / ROOMS */}
          <Box sx={{ display: "flex", gap: 2 }}>

            {/* Adults */}
            <Box

              sx={{
                background: "white",
                p: 1.5,
                borderRadius: 1,
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className=" text-black px-1">Adults</span>
              <Box sx={{ display: "flex", gap: 1 }}>
                <button className=" text-black" onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                <span className=" text-black">{adults}</span>
                <button className=" text-black" onClick={() => setAdults(adults + 1)}>+</button>
              </Box>
            </Box>

            {/* Children */}
            <Box
              sx={{
                background: "white",
                p: 1.5,
                borderRadius: 1,
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className=" text-black px-1">Children</span>
              <Box sx={{ display: "flex", gap: 1 }}>
                <button className=" text-black" onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                <span className=" text-black">{children}</span>
                <button className=" text-black" onClick={() => setChildren(children + 1)}>+</button>
              </Box>
            </Box>

            {/* Rooms */}
            <TextField
              select
              fullWidth
              label="Rooms"
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              SelectProps={{ native: true }}
              sx={{ background: "white", borderRadius: 1 }}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </TextField>
          </Box>

          {/* SEARCH BUTTON */}
          <Box
            component="button"
            sx={{
              px: 3,
              py: 1.5,
              background: "#1976d2",
              color: "white",
              borderRadius: 1,
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              ":hover": { background: "#125bab" },
              width: "200px",
              alignSelf: "center",
            }}
          >
            Search
          </Box>

        </Box>
      </div>

      {/* HERO */}
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
                  <CardMedia component="img" height="200" image={place.img} />
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
