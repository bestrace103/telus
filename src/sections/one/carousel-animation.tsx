import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
// theme
import { bgGradient } from 'src/theme/css';
// components
import Image from 'src/components/image';
import { MotionContainer, varFade } from 'src/components/animate';
import Carousel, { CarouselArrowIndex, useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = {
  data: {
    id: string;
    title: string;
    coverUrl: string;
    description: string;
  }[];
};

export default function CarouselAnimation({ data }: Props) {
  const carousel = useCarousel({
    speed: 800,
    autoplay: true,
  });

  return (
    <Card sx={{ height: '100%' }}>
      <Image dir="ltr" alt="" src="https://nextyunion.com/assets/img/hero/hero-shape-1.png" sx={{ position: 'absolute' }} />
      <Image dir="ltr" alt="" src="https://nextyunion.com/assets/img/hero/hero-shape-4.png" sx={{ position: 'absolute', width: '100%', height: '100%' }} />
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {data.map((item, index) => (
          <CarouselItem key={item.id} item={item} active={index === carousel.currentIndex} />
        ))}
      </Carousel>

      <CarouselArrowIndex
        index={carousel.currentIndex}
        total={data.length}
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  item: {
    title: string;
    description: string;
    coverUrl: string;
  };
  active: boolean;
};

function CarouselItem({ item, active }: CarouselItemProps) {
  const theme = useTheme();

  const { coverUrl, title } = item;

  const variants = theme.direction === 'rtl' ? varFade().inLeft : varFade().inRight;

  return (
    <Paper sx={{ position: 'relative', height: '100%', background: 'transparent' }}>
      <Box component='img' src={coverUrl} sx={{
        float: 'right',
      }} />

      {/* <Box
        sx={{
          top: 0,
          width: 1,
          height: 1,
          position: 'absolute',
          ...bgGradient({
            direction: 'to top',
            startColor: `${theme.palette.grey[900]} 0%`,
            endColor: `${alpha(theme.palette.grey[900], 0)} 100%`,
          }),
        }}
      /> */}

      <CardContent
        component={MotionContainer}
        animate={active}
        action
        sx={{
          left: 0,
          bottom: 0,
          maxWidth: 720,
          textAlign: 'left',
          // color: 'common.white',
          paddingTop: '40vh',
          paddingLeft: '10%'
        }}
      >
        <m.div variants={variants}>
          <Typography variant="body2" gutterBottom>
            {item.title}
          </Typography>
        </m.div>

        <m.div variants={variants}>
          <Typography variant="h3" gutterBottom>
            {item.description}
          </Typography>
        </m.div>

        <m.div variants={variants}>
          <Button variant="contained" sx={{ mt: 3 }}>
            Get Started
          </Button>
        </m.div>
      </CardContent>
    </Paper>
  );
}
