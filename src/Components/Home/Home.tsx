import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Card,
  CardMedia,
  CardContent,
  Container,
  Collapse,
  Divider,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* ================= DESTINATION SWIPER DATA ================= */
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

/* ================= INDIA STATES — EXACTLY 3 CITIES ================= */
const indianStates = [
  { state: "Andhra Pradesh", cities: ["Amaravati", "Visakhapatnam", "Vijayawada"] },
  { state: "Arunachal Pradesh", cities: ["Itanagar", "Tawang", "Ziro"] },
  { state: "Assam", cities: ["Dispur", "Guwahati", "Dibrugarh"] },
  { state: "Bihar", cities: ["Patna", "Gaya", "Bhagalpur"] },
  { state: "Chhattisgarh", cities: ["Raipur", "Bhilai", "Bilaspur"] },
  { state: "Goa", cities: ["Panaji", "Margao", "Vasco da Gama"] },
  { state: "Gujarat", cities: ["Gandhinagar", "Ahmedabad", "Surat"] },
  { state: "Haryana", cities: ["Chandigarh", "Gurugram", "Faridabad"] },
  { state: "Himachal Pradesh", cities: ["Shimla", "Manali", "Dharamshala"] },
  { state: "Jharkhand", cities: ["Ranchi", "Jamshedpur", "Dhanbad"] },
  { state: "Karnataka", cities: ["Bengaluru", "Mysuru", "Mangaluru"] },
  { state: "Kerala", cities: ["Thiruvananthapuram", "Kochi", "Kozhikode"] },
  { state: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Gwalior"] },
  { state: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur"] },
  { state: "Manipur", cities: ["Imphal", "Churachandpur", "Bishnupur"] },
  { state: "Meghalaya", cities: ["Shillong", "Cherrapunji", "Tura"] },
  { state: "Mizoram", cities: ["Aizawl", "Lunglei", "Champhai"] },
  { state: "Nagaland", cities: ["Kohima", "Dimapur", "Mokokchung"] },
  { state: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Puri"] },
  { state: "Punjab", cities: ["Chandigarh", "Ludhiana", "Amritsar"] },
  { state: "Rajasthan", cities: ["Jaipur", "Udaipur", "Jodhpur"] },
  { state: "Sikkim", cities: ["Gangtok", "Namchi", "Lachung"] },
  { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai"] },
  { state: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad"] },
  { state: "Tripura", cities: ["Agartala", "Udaipur", "Dharmanagar"] },
  { state: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Varanasi"] },
  { state: "Uttarakhand", cities: ["Dehradun", "Haridwar", "Rishikesh"] },
  { state: "West Bengal", cities: ["Kolkata", "Howrah", "Siliguri"] },
];

/* ================= COUNTRIES ================= */
const countries = ["USA", "UAE", "France", "Japan", "Germany", "Thailand"];

/* ================= MAJOR AIRPORT CITIES ================= */
const airportCities = [
  "New Delhi", "Gurugram", "Noida",
  "Mumbai", "Pune", "Nagpur",
  "Bengaluru", "Mangaluru",
  "Hyderabad",
  "Chennai", "Coimbatore", "Madurai",
  "Kolkata", "Siliguri",
  "Panaji", "Vasco da Gama",
  "Ahmedabad", "Surat", "Vadodara",
  "Kochi", "Trivandrum", "Kozhikode",
  "Jaipur", "Udaipur", "Jodhpur",
  "Amritsar", "Chandigarh",
  "Lucknow", "Varanasi",
  "Indore", "Bhopal",
  "Guwahati",
  "Bhubaneswar",
  "Visakhapatnam", "Vijayawada"
];

/* ================= COMBINED OPTIONS ================= */
const combinedInsideOptions = indianStates.flatMap((s) =>
  s.cities.map((city) => ({
    value: `${s.state}-${city}`,
    label: `${s.state} — ${city}`,
    city,
  }))
);

const combinedOutsideOptions = countries.map((c) => ({
  value: `country-${c}`,
  label: c,
  city: c,
}));

/* ================= SMALL MUI STYLE ================= */
const smallStyle = {
  background: "white",
  borderRadius: 1,
  "& .MuiInputBase-root": { height: "42px", fontSize: "14px" },
  "& .MuiInputLabel-root": { fontSize: "13px" },
} as const;

/* ================= PRICING RULES ================= */
const costPerKm = {
  bus: 2, // ₹2 per km
  train: 1.2, // ₹1.2 per km
  flight: 6, // ₹6 per km
} as const;

const childMultiplier = 0.6; // child pays 60% of adult
const gstRate = 0.05; // 5% GST
const airportFeePerPassenger = 250; // ₹250 per passenger (flight)
const flightSurchargePerPerson = 500; // additional flight fee per person

const roomCostByQuality: Record<string, number> = {
  basic: 1200,
  mid: 2500,
  premium: 5000,
};

/* ================= HELPER: Estimate distance (simple model) ================= */
const estimateDistance = (fromValue: string, toValue: string): number | null => {
  if (!fromValue || !toValue) return null;

  const fromIsCountry = fromValue.startsWith("country-");
  const toIsCountry = toValue.startsWith("country-");

  if (!fromIsCountry && !toIsCountry) {
    // both inside India
    const fromState = fromValue.split("-")[0];
    const toState = toValue.split("-")[0];
    const fromCity = fromValue.split("-")[1] ?? "";
    const toCity = toValue.split("-")[1] ?? "";

    if (fromState === toState) return 100; // within same state
    const bothAirport = airportCities.includes(fromCity) && airportCities.includes(toCity);
    return bothAirport ? 1200 : 800;
  }

  if (fromIsCountry && toIsCountry) {
    const f = fromValue.replace("country-", "");
    const t = toValue.replace("country-", "");
    return f === t ? 800 : 8000;
  }

  // one inside, one outside
  return 4000;
};

/* ================= CALCULATE PRICE ================= */
type PriceBreakdown = {
  distance: number;
  perKm: number;
  adultFarePerPerson: number;
  childFarePerPerson: number;
  adultsCount: number;
  childrenCount: number;
  subtotalPassengers: number;
  roomCostTotal: number;
  gstAmount: number;
  airportFeesTotal: number;
  finalTotal: number;
  nights: number;
  roomQuality: string;
  details: string[];
};

const calculatePrice = (
  fromValue: string,
  toValue: string,
  transportMode: string,
  adultsCnt: number,
  childrenCnt: number,
  roomsCnt: number,
  nights: number,
  roomQualityKey: string
): PriceBreakdown | null => {
  const dist = estimateDistance(fromValue, toValue);
  if (dist === null) return null;
  if (!transportMode) return null;

  const mode = transportMode as keyof typeof costPerKm;
  const perKm = costPerKm[mode];

  // base fare per adult = dist * perKm + flight surcharge (if flight)
  const adultFarePerPerson = Math.round(dist * perKm + (mode === "flight" ? flightSurchargePerPerson : 0));
  const childFarePerPerson = Math.round(adultFarePerPerson * childMultiplier);

  const subtotalAdults = adultFarePerPerson * adultsCnt;
  const subtotalChildren = childFarePerPerson * childrenCnt;
  const subtotalPassengers = subtotalAdults + subtotalChildren;

  // airport fees apply per passenger on flights
  const airportFeesTotal = mode === "flight" ? airportFeePerPassenger * (adultsCnt + childrenCnt) : 0;

  // rooms price
  const roomRate = roomCostByQuality[roomQualityKey] ?? roomCostByQuality.basic;
  const roomCostTotal = roomRate * roomsCnt * Math.max(1, nights);

  // GST on (passenger fares + airport fees + room cost)
  const taxable = subtotalPassengers + airportFeesTotal + roomCostTotal;
  const gstAmount = Math.round(taxable * gstRate);

  // distance multiplier
  let distanceMultiplier = 1;
  if (dist >= 4000) distanceMultiplier = 1.12;
  else if (dist >= 1200) distanceMultiplier = 1.08;
  else if (dist >= 800) distanceMultiplier = 1.04;

  const totalBeforeGst = Math.round((subtotalPassengers + airportFeesTotal + roomCostTotal) * distanceMultiplier);
  const finalTotal = Math.round(totalBeforeGst + gstAmount);

  const details: string[] = [
    `Distance estimated: ${dist} km`,
    `Mode: ${mode}`,
    `Per km rate: ₹${perKm}/km`,
    `Adult fare (per person before distance adj): ₹${adultFarePerPerson}`,
    `Child fare (per person before distance adj): ₹${childFarePerPerson}`,
    `Subtotal passengers (adult+child): ₹${subtotalPassengers}`,
    `Airport fees total: ₹${airportFeesTotal}`,
    `Room cost total (${roomsCnt} rooms × ${Math.max(1, nights)} nights @ ₹${roomRate}/room/night): ₹${roomCostTotal}`,
    `Distance multiplier applied: x${distanceMultiplier.toFixed(2)}`,
    `Taxable amount before GST: ₹${Math.round((subtotalPassengers + airportFeesTotal + roomCostTotal) * distanceMultiplier)}`,
    `GST @ ${(gstRate * 100).toFixed(0)}%: ₹${gstAmount}`,
  ];

  return {
    distance: dist,
    perKm,
    adultFarePerPerson,
    childFarePerPerson,
    adultsCount: adultsCnt,
    childrenCount: childrenCnt,
    subtotalPassengers,
    roomCostTotal,
    gstAmount,
    airportFeesTotal,
    finalTotal,
    nights: Math.max(1, nights),
    roomQuality: roomQualityKey,
    details,
  };
};

/* ================= MAIN COMPONENT ================= */
const Home: React.FC = () => {
  const [fromPlace, setFromPlace] = useState<string>("");
  const [toPlace, setToPlace] = useState<string>("");
  const [transport, setTransport] = useState<string>("");

  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(1);

  const [checkIn, setCheckIn] = useState<string>(""); // yyyy-mm-dd
  const [checkOut, setCheckOut] = useState<string>(""); // yyyy-mm-dd

  const [roomQuality, setRoomQuality] = useState<string>("basic"); // basic | mid | premium

  const [priceResult, setPriceResult] = useState<PriceBreakdown | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  // helper: extract city string from combined option
  const extractCity = (value: string): string => {
    if (!value) return "";
    if (value.startsWith("country-")) return value.replace("country-", "");
    return value.split("-")[1] ?? "";
  };

  const fromCity = extractCity(fromPlace);
  const toCity = extractCity(toPlace);
  const fromIsCountry = fromPlace.startsWith("country-");
  const toIsCountry = toPlace.startsWith("country-");
  const isInternational = fromIsCountry || toIsCountry;

  // flight allowed when both cities have airports OR when either side is country (we treat outside countries as airport-capable)
  const fromHasAirport = fromIsCountry ? true : airportCities.includes(fromCity);
  const toHasAirport = toIsCountry ? true : airportCities.includes(toCity);
  const flightAllowed = fromHasAirport && toHasAirport;

  // transport options: if international involved, only show flight
  const transportOptions = isInternational
    ? [{ value: "flight", label: "Flight" }]
    : [
        { value: "bus", label: "Bus" },
        { value: "train", label: "Train" },
        { value: "flight", label: "Flight" },
      ];

  const calcNights = (inDate: string, outDate: string): number => {
    if (!inDate || !outDate) return 1;
    try {
      const a = new Date(inDate);
      const b = new Date(outDate);
      const diff = Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
      return diff > 0 ? diff : 1;
    } catch {
      return 1;
    }
  };

  const formatCurrency = (n: number): string =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  const onFindPrice = () => {
    if (!fromPlace || !toPlace) {
      alert("Please select both From and To.");
      return;
    }

    if (!transport) {
      alert("Please select a transport mode.");
      return;
    }

    if (transport === "flight" && !flightAllowed) {
      alert("Flight not available for selected route. Please change cities or choose another transport.");
      return;
    }

    const nights = calcNights(checkIn, checkOut);
    const result = calculatePrice(fromPlace, toPlace, transport, adults, children, rooms, nights, roomQuality);
    if (!result) {
      alert("Could not calculate price. Check your selections.");
      return;
    }
    setPriceResult(result);
    setShowDetails(false);
  };

  // readable label for room quality
  // const roomQualityLabel = (key: string) => {
  //   if (key === "basic") return `Basic — ₹${roomCostByQuality.basic}/room/night`;
  //   if (key === "mid") return `Mid — ₹${roomCostByQuality.mid}/room/night`;
  //   return `Premium — ₹${roomCostByQuality.premium}/room/night`;
  // };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        px: 2,
        py: 4,
        color: "white",
      }}
    >
      {/* SEARCH BAR */}
      <Box
        sx={{
          background: "rgba(255,255,255,0.95)",
          p: 2,
          borderRadius: 2,
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          alignItems: "center",
        }}
      >
        {/* FROM */}
        <TextField
          select
          fullWidth
          label="From"
          value={fromPlace}
          onChange={(e) => setFromPlace(e.target.value)}
          SelectProps={{ native: true }}
          InputLabelProps={{ shrink: true }}
          sx={smallStyle}
        >
          <option value="">Select</option>
          <optgroup label="Inside India">
            {combinedInsideOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </optgroup>
          <optgroup label="Outside India">
            {combinedOutsideOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </optgroup>
        </TextField>

        {/* TO */}
        <TextField
          select
          fullWidth
          label="To"
          value={toPlace}
          onChange={(e) => setToPlace(e.target.value)}
          SelectProps={{ native: true }}
          InputLabelProps={{ shrink: true }}
          sx={smallStyle}
        >
          <option value="">Select</option>
          <optgroup label="Inside India">
            {combinedInsideOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </optgroup>
          <optgroup label="Outside India">
            {combinedOutsideOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </optgroup>
        </TextField>

        {/* TRANSPORT */}
        <TextField
          select
          fullWidth
          label="Transport"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          SelectProps={{ native: true }}
          InputLabelProps={{ shrink: true }}
          sx={smallStyle}
        >
          <option value="">Select</option>
          {transportOptions.map((t) => {
            const disabled = t.value === "flight" && !flightAllowed;
            return (
              <option key={t.value} value={t.value} disabled={disabled}>
                {t.label} {disabled ? " (Not available)" : ""}
              </option>
            );
          })}
        </TextField>

        {/* CHECK-IN */}
        <TextField
          fullWidth
          type="date"
          label="Check-in"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={smallStyle}
        />

        {/* CHECK-OUT */}
        <TextField
          fullWidth
          type="date"
          label="Check-out"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={smallStyle}
        />

      <Box
  sx={{
    background: "white",
    color: "black",
    borderRadius: 1,
    px: 2,
    py: 1.5,

    display: "grid",
    gridTemplateColumns: {
      xs: "1fr 1fr",   // 2 columns on mobile
      sm: "repeat(3, 1fr)", // 3 columns on tablets/desktops
    },
    gap: 2,
    width: "100%",
  }}
>
  {/* Adults */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 0.5,
      alignItems: "center",
    }}
  >
    <Typography sx={{ fontSize: 13 }}>Adults</Typography>

    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <button
        onClick={() => setAdults(Math.max(1, adults - 1))}
        style={{
          width: 28,
          height: 28,
          borderRadius: 4,
          border: "1px solid #ccc",
          background: "white",
          cursor: "pointer",
        }}
      >
        -
      </button>

      <Typography sx={{ width: 24, textAlign: "center" }}>{adults}</Typography>

      <button
        onClick={() => setAdults(adults + 1)}
        style={{
          width: 28,
          height: 28,
          borderRadius: 4,
          border: "1px solid #ccc",
          background: "white",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </Box>
  </Box>

  {/* Children */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 0.5,
      alignItems: "center",
    }}
  >
    <Typography sx={{ fontSize: 13 }}>Children</Typography>

    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <button
        onClick={() => setChildren(Math.max(0, children - 1))}
        style={{
          width: 28,
          height: 28,
          borderRadius: 4,
          border: "1px solid #ccc",
          background: "white",
          cursor: "pointer",
        }}
      >
        -
      </button>

      <Typography sx={{ width: 24, textAlign: "center" }}>{children}</Typography>

      <button
        onClick={() => setChildren(children + 1)}
        style={{
          width: 28,
          height: 28,
          borderRadius: 4,
          border: "1px solid #ccc",
          background: "white",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </Box>
  </Box>

  {/* Rooms */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 0.5,
      alignItems: "center",
    }}
  >
    <Typography sx={{ fontSize: 13 }}>Rooms</Typography>

    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <button
        onClick={() => setRooms(Math.max(1, rooms - 1))}
        style={{
          width: 28,
          height: 28,
          borderRadius: 4,
          border: "1px solid #ccc",
          background: "white",
          cursor: "pointer",
        }}
      >
        -
      </button>

      <Typography sx={{ width: 24, textAlign: "center" }}>{rooms}</Typography>

      <button
        onClick={() => setRooms(Math.min(6, rooms + 1))}
        style={{
          width: 28,
          height: 28,
          borderRadius: 4,
          border: "1px solid #ccc",
          background: "white",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </Box>
  </Box>
</Box>


        {/* ROOM QUALITY (small dropdown) */}
        <TextField
          select
          fullWidth
          label="Room Type"
          value={roomQuality}
          onChange={(e) => setRoomQuality(e.target.value)}
          SelectProps={{ native: true }}
          InputLabelProps={{ shrink: true }}
          sx={{ ...smallStyle, minWidth: 180 }}
        >
          <option value="basic">Basic — ₹1200 / room / night</option>
          <option value="mid">Mid — ₹2500 / room / night</option>
          <option value="premium">Premium — ₹5000 / room / night</option>
        </TextField>

        {/* FIND / PRICE BUTTON */}
        <Button variant="contained" color="primary" onClick={onFindPrice} sx={{ height: 42 }}>
          Find Price
        </Button>
      </Box>

      {/* ALERT-STYLE PRICE BOX (Option C) */}
      <Box sx={{ maxWidth: 1200, mx: "auto", mt: 2 }}>
        {priceResult ? (
          <Box
            sx={{
              background: "linear-gradient(90deg,#fff9e6,#e8f8ff)",
              borderLeft: "6px solid #1976d2",
              color: "black",
              p: 2,
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Price: {formatCurrency(priceResult.finalTotal)}
                </Typography>
                <Typography variant="body2">
                  {priceResult.adultsCount} adults, {priceResult.childrenCount} children • {priceResult.nights} nights • {rooms} room(s)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button
                  variant="outlined"
                  onClick={() => setShowDetails((s) => !s)}
                  size="small"
                >
                  {showDetails ? "Hide breakdown" : "View breakdown"}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    // Placeholder for proceed/booking action
                    alert(`Proceeding to booking — total ${formatCurrency(priceResult.finalTotal)}`);
                  }}
                  size="small"
                >
                  Book
                </Button>
              </Box>
            </Box>

            <Collapse in={showDetails}>
              <Divider sx={{ my: 1 }} />
              <Box>
                {priceResult.details.map((d, i) => (
                  <Typography key={i} variant="caption" display="block" sx={{ mb: 0.5 }}>
                    {d}
                  </Typography>
                ))}

                <Typography sx={{ mt: 1 }}><strong>Final Total: </strong>{formatCurrency(priceResult.finalTotal)}</Typography>
              </Box>
            </Collapse>
          </Box>
        ) : (
          <Box sx={{ color: "white", py: 1 }}>
            <Typography>No price calculated yet — use Find Price.</Typography>
          </Box>
        )}
      </Box>

      {/* HERO */}
      <Box textAlign="center" mt={4}>
        <Typography variant="h3" fontWeight="bold">
          Explore The World With Us
        </Typography>
        <Typography mt={1} fontSize={18}>
          Find your next destination & best deals
        </Typography>
      </Box>

      {/* SWIPER */}
      <Container sx={{ py: 5 }}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {allDestinations.map((place, idx) => (
            <SwiperSlide key={idx}>
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "rgba(255,255,255,0.9)",
                }}
              >
                <CardMedia component="img" height="200" className="h-50 w-50" image={place.img} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {place.title}
                  </Typography>
                  <Typography variant="body2">Discover amazing experiences.</Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Home;
