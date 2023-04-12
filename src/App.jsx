import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';

const ImageWrapper = styled(Box)`
  position: relative;

  & img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: slide 1s forwards;
  }

  @keyframes slide {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const backgroundColors = ['#ffef96', '#ff9696', '#96baff'];

const Background = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ colorindex }) => backgroundColors[colorindex]};
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export default function App() {

  const [colorindex, setColorIndex] = React.useState(0);

  const items = [ { src: 'https://placehold.co/600x400', index: 0 }, { src: 'https://placehold.co/600x400', index: 1 }, { src: 'https://placehold.co/600x400', index: 2 } ];

  const handleSwipe = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % backgroundColors.length);
  };


  React.useEffect(() => {
    const backgroundElement = document.getElementById('background');
    gsap.to(backgroundElement, {
      backgroundColor: backgroundColors[colorindex],
      duration: 1,
      ease: 'power2.inOut',
    });
  }, [colorindex]);


  return (

    <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ mx: 'auto', textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Vite.js example
        </Typography>
        <Carousel 
        autoPlay ={false}
          onChange={handleSwipe}
          sx={{ height: '400px', width: '600px', mx: 'auto' }}
        >
          <img src="https://placehold.co/600x400" alt="Your image description" />
          <img src="https://placehold.co/600x400" alt="Your image description" />
          <img src="https://placehold.co/600x400" alt="Your image description" />
        </Carousel>
        <Background id='background' colorindex={colorindex} />

      </Box>
    </Container>


  );
}