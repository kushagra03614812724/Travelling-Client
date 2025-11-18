import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FlightIcon from '@mui/icons-material/Flight';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Tours', href: '#tours' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      {/* Close button in drawer header */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, py: 1 }}>
        <IconButton 
          onClick={() => setIsMenuOpen(false)}
          sx={{ 
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'primary.light',
              color: 'black'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.label} 
            component="a" 
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            sx={{
              color: 'text.primary',
              py: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
              '&:hover': {
                backgroundColor: 'primary.light',
                color: 'black' // Changed to black on hover
              }
            }}
          >
            <ListItemText 
              primary={item.label} 
              primaryTypographyProps={{
                fontWeight: 'medium',
                fontSize: '1.1rem'
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: 'center', mt: 3 }}>
          <Button 
            variant="contained" 
            color="primary"
            size="large"
            startIcon={<FlightIcon />}
            onClick={() => setIsMenuOpen(false)}
            sx={{
              borderRadius: 3,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'primary.dark',
                color: 'white'
              }
            }}
          >
            Book Now
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'background.paper', 
        color: 'text.primary',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo with icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FlightIcon sx={{ color: 'primary.main', fontSize: 28 }} />
            <Typography 
              variant="h5" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold', 
                color: 'primary.main',
                background: 'linear-gradient(45deg, #1976d2, #00bcd4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              GLOBEX
            </Typography>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 'medium',
                    borderRadius: 2,
                    px: 2,
                    '&:hover': {
                      color: 'black', // Changed to black on hover
                      backgroundColor: 'primary.light',
                      transform: 'translateY(-1px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                startIcon={<FlightIcon />}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1,
                  fontWeight: 'bold',
                  ml: 2,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                    backgroundColor: 'primary.dark'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Book Now
              </Button>
            </Box>
          )}

          {/* Mobile menu button - shows cross when menu is open */}
          {isMobile && (
            <IconButton
              edge="end"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              sx={{ 
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'black' // Changed to black on hover
                }
              }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer - closes when clicking outside or on cross */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'background.paper',
            backgroundImage: 'linear-gradient(180deg, #f8fdff 0%, #ffffff 100%)'
          }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}