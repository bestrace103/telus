import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack, Button, BoxProps, Paper, Card, CardHeader, CardContent, IconButton } from '@mui/material';
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// _mock
import { _mock } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import CarouselAnimation from 'src/sections/one/carousel-animation';
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------
const _descriptions = [
  `Fast & Secure Online Money Transfer`,
  `Move Your Money In Easy Secured Steps`,
  `Secured & Easy Online Payment Solution `,
];

const _postTitles = [
  'Simple. Transparent. Secure',
  'Reliable. Zero Service Charge',
  'Easy. Fastest. Secure',
];

const _id = [...Array(40)].map(
  (_, index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`
);

const description = (index: number) => _descriptions[index];
const cover = (index: number) => `https://nextyunion.com/assets/img/hero/hero-slide-${index + 4}.png`;
const postTitle = (index: number) => _postTitles[index];
const id = (index: number) => _id[index];

const _carouselsExample = [...Array(3)].map((_, index) => ({
  id: id(index),
  title: postTitle(index),
  coverUrl: cover(index),
  description: description(index),
}));

const paymentService = [
  {
    icon: 'https://nextyunion.com/assets/img/feature/feature-icon-4.png',
    title: 'Protect Your Account',
    content: 'Your account is fully protected with the company, and please dont share your account with anyone'
  },
  {
    icon: 'https://nextyunion.com/assets/img/feature/feature-icon-5.png',
    title: 'Send Money',
    content: 'Every transactions on Nextyunion is safe and secure with the best data encryption you can ever imagine'
  },
  {
    icon: 'https://nextyunion.com/assets/img/feature/feature-icon-6.png',
    title: 'Online Banking',
    content: 'Take advantage of premium banking privileges, relationship benefits and access to the investment expertise and insights of Nextyunion, tailored to your needs.'
  }
]

const _carouselsMembers = [...Array(6)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.portrait(index),
}));

const _socials = [
  {
    value: 'facebook',
    name: 'FaceBook',
    icon: 'eva:facebook-fill',
    color: '#1877F2',
    path: 'https://www.facebook.com/caitlyn.kerluke',
  },
  {
    value: 'instagram',
    name: 'Instagram',
    icon: 'ant-design:instagram-filled',
    color: '#E02D69',
    path: 'https://www.instagram.com/caitlyn.kerluke',
  },
  {
    value: 'linkedin',
    name: 'Linkedin',
    icon: 'eva:linkedin-fill',
    color: '#007EBB',
    path: 'https://www.linkedin.com/caitlyn.kerluke',
  },
  {
    value: 'twitter',
    name: 'Twitter',
    icon: 'eva:twitter-fill',
    color: '#00AAEC',
    path: 'https://www.twitter.com/caitlyn.kerluke',
  },
];

export default function OneView() {
  const settings = useSettingsContext();
  const carousel = useCarousel({
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <>
      <Box
        sx={{
          // py: 5,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <CarouselAnimation data={_carouselsExample.slice(0, 3)} />
      </Box>

      <Container sx={{ my: 10, bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04), }}>
        <Box
          sx={{
            mt: 5,
            width: 1,
            borderRadius: 2,
          }}
        >
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
          >
            <Stack alignItems='center' justifyContent='center'>
              <Box component='img' src='https://nextyunion.com/assets/img/about/about-img-1.png' />
            </Stack>
            <Box>
              <Typography variant="body2" color='primary' gutterBottom>
                Smart Banking
              </Typography>
              <Typography variant="h3" gutterBottom>
                The Better Way To Save & Invest Online Banking
              </Typography>
              <Typography variant='body2'>
                Our local and internatuonal money transfer is the very best you can imagine as we have provided the very best avenue for you to transfer fund accros countries in minutes and our fund transfer is instantly, with over a million customer, we have stood the test of time and our customers base speaks the volume about us.
              </Typography>

              <Stack flexDirection='row' alignItems='center' gap={2} my={1}>
                <Iconify icon='solar:verified-check-bold' width={32} sx={{ color: 'primary.main' }} />
                <Typography variant='h6'>Cards that work all across the world.</Typography>
              </Stack>
              <Stack flexDirection='row' alignItems='center' gap={2} my={1}>
                <Iconify icon='solar:verified-check-bold' width={32} sx={{ color: 'primary.main' }} />
                <Typography variant='h6'>Highest Returns on your investments.</Typography>
              </Stack>
              <Stack flexDirection='row' alignItems='center' gap={2} my={1}>
                <Iconify icon='solar:verified-check-bold' width={32} sx={{ color: 'primary.main' }} />
                <Typography variant='h6'>No minimum balance. No overdrafts.</Typography>
              </Stack>

              <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                More About us
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container sx={{ my: 10, p: 6, bgcolor: (theme) => alpha(theme.palette.grey[500], 0.1), }}>
        <Box
          sx={{
            width: 1,
            borderRadius: 2,
          }}
        >
          <Typography variant='body1' color='primary' textAlign='center'>Our Feature</Typography>
          <Typography variant='h2' textAlign='center' my={3}>Payment Services Worldwide</Typography>
          <Grid>
            {paymentService.map((item, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  overflow: 'hidden',
                  textDecoration: 'none',
                  borderColor: (theme) => alpha(theme.palette.grey[500], 0.08),
                  p: 2
                }}
              >
                <Stack flexDirection='row' alignItems='center' gap={2}>
                  <Box component='img' src={item.icon} />
                  <Typography variant='h6'>{item.title}</Typography>
                </Stack>
                <Typography variant='body2' mt={2}>{item.content}</Typography>
              </Card>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container sx={{ my: 10, bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04), }}>
        <Box
          sx={{
            mt: 10,
            width: 1,
            borderRadius: 2,
          }}
        >
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
          >
            <Box>
              <Typography variant="body2" color='primary' gutterBottom>
                Banking Security
              </Typography>
              <Typography variant="h3" gutterBottom>
                The Safest Way To Transact Your Money Fast
              </Typography>
              <Typography variant='body2'>
                Every transactions on Nextyunion is safe and secure with the best data encryption you can ever imagine
              </Typography>

              <Stack flexDirection='row' alignItems='center' gap={2} my={2}>
                <Iconify icon='solar:verified-check-bold' width={32} sx={{ color: 'primary.main' }} />
                <Typography variant='h4'>Pay Online Securely</Typography>
              </Stack>
              <Stack flexDirection='row' alignItems='center' gap={2} my={2}>
                <Iconify icon="solar:shield-check-bold" width={32} sx={{ color: 'success.main' }} />
                <Typography variant='h4'>Convert Your Money In Seconds</Typography>
              </Stack>
            </Box>
            <Stack alignItems='center' justifyContent='center'>
              <Box component='img' src='https://nextyunion.com/assets/img/security/security-1.png' />
            </Stack>
          </Box>
        </Box>
      </Container>

      <Container sx={{ my: 10, p: 6, bgcolor: (theme) => alpha(theme.palette.grey[500], 0.1), }}>
        <Box
          sx={{
            width: 1,
            borderRadius: 2,
          }}
        >
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
          >
            <Stack flexDirection='row' justifyContent='center' gap={2}>
              <Stack gap={2}>
                <Card
                  variant="outlined"
                  sx={{
                    overflow: 'hidden',
                    textDecoration: 'none',
                    borderColor: (theme) => alpha(theme.palette.grey[500], 0.08),
                    p: 2,
                  }}
                >
                  <Box component='img' width={50} height={50} src='https://nextyunion.com/assets/img/service/service-icon-1.png' />
                  <Typography variant='h4' mt={2}>
                    Deadline Reminders
                  </Typography>
                </Card>
                <Card
                  variant="outlined"
                  sx={{
                    overflow: 'hidden',
                    textDecoration: 'none',
                    borderColor: (theme) => alpha(theme.palette.grey[500], 0.08),
                    p: 2,
                  }}
                >
                  <Box component='img' width={50} height={50} src='https://nextyunion.com/assets/img/service/service-icon-2.png' />
                  <Typography variant='h4' mt={2}>
                    Drag Functionality
                  </Typography>
                </Card>
              </Stack>
              <Stack gap={2} mt={6}>
                <Card
                  variant="outlined"
                  sx={{
                    overflow: 'hidden',
                    textDecoration: 'none',
                    borderColor: (theme) => alpha(theme.palette.grey[500], 0.08),
                    p: 2,
                  }}
                >
                  <Box component='img' width={50} height={50} src='https://nextyunion.com/assets/img/service/service-icon-3.png' />
                  <Typography variant='h4' mt={2}>
                    Simple Dashboard
                  </Typography>
                </Card>
                <Card
                  variant="outlined"
                  sx={{
                    overflow: 'hidden',
                    textDecoration: 'none',
                    borderColor: (theme) => alpha(theme.palette.grey[500], 0.08),
                    p: 2,
                  }}
                >
                  <Box component='img' width={50} height={50} src='https://nextyunion.com/assets/img/service/service-icon-4.png' />
                  <Typography variant='h4' mt={2}>
                    Email Notification
                  </Typography>
                </Card>
              </Stack>
            </Stack>
            <Box>
              <Typography variant="body2" color='primary' gutterBottom>
                Our Services
              </Typography>
              <Typography variant="h3" gutterBottom>
                Providing Services For Last 25 Years With Reputation
              </Typography>
              <Typography variant='body2'>
                With over 160 years of investment experience and $1.7 trillion in assets under management1 Footnote, access the world-class investment expertise of Nextyunion to help you meet your important financial goals
              </Typography>
              <Typography variant='body2' mt={2}>
                We ensure you exprerience the very best of internet banking ever provided by any financial institution.
              </Typography>

              <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                View All Services
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container sx={{ my: 10, bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04), }}>
        <Box
          sx={{
            mt: 5,
            py: 2,
            width: 1,
            borderRadius: 2,
          }}
        >
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
          >
            <Stack
              sx={{ alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: 'common.primary', backgroundImage: 'url(https://nextyunion.com/assets/img/app/app-shape-1.png)' }}
            >
              <Box component='img' src='https://nextyunion.com/assets/img/app/app-1.png' />
            </Stack>
            <Stack justifyContent='center'>
              <Typography variant="h3" gutterBottom>
                We Bring Everything In One Place
              </Typography>
              <Typography variant='body2'>
                Convenient account options for businesses of all sizes. Plus, take advantage of human resource and investment solutions delivered by Nextyunion®. Offer your customers a variety of secure and convenient payment options that make it easy to do business.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Container sx={{ my: 10, p: 6, bgcolor: (theme) => alpha(theme.palette.grey[500], 0.1), }}>
        <Box
          sx={{
            width: 1,
            borderRadius: 2,
          }}
        >
          <Typography variant='body1' color='primary' textAlign='center'>Our Testimonials</Typography>
          <Typography variant='h2' textAlign='center' my={3}>What Client Says About Us</Typography>
          <Box sx={{ position: 'relative' }}>
            <CarouselArrows
              filled
              shape="rounded"
              onNext={carousel.onNext}
              onPrev={carousel.onPrev}
              leftButtonProps={{
                sx: {
                  left: 24,
                  ...(_carouselsMembers.length < 5 && { display: 'none' }),
                },
              }}
              rightButtonProps={{
                sx: {
                  right: 24,
                  ...(_carouselsMembers.length < 5 && { display: 'none' }),
                },
              }}
            >
              <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                {_carouselsMembers.map((member) => (
                  <Box
                    key={member.id}
                    component={m.div}
                    variants={varFade().in}
                    sx={{
                      px: 1.5,
                      py: { xs: 1, md: 3 },
                    }}
                  >
                    <MemberCard member={member} />
                  </Box>
                ))}
              </Carousel>
            </CarouselArrows>
          </Box>
        </Box>
      </Container>

      <Container sx={{ my: 10, p: 6, bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04), }}>
        <Box
          sx={{
            width: 1,
            borderRadius: 2,
          }}
        >
          <Typography variant='body1' color='primary' textAlign='center'>Contact Us</Typography>
          <Typography variant='h2' textAlign='center' my={2}>Nextyunion Is A Quick Solution <br />For Business Payments</Typography>

          <Stack flexDirection='row' justifyContent='center' gap={3}>
            <Button variant="contained" color="primary">
              More About us
            </Button>
            <Button variant="contained">
              More About us
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

function Grid({ children }: BoxProps) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={2.5}
    >
      {children}
    </Box>
  );
}

type MemberCardProps = {
  member: {
    name: string;
    role: string | undefined;
    avatarUrl: string;
  };
};

function MemberCard({ member }: MemberCardProps) {
  const { name, role, avatarUrl } = member;
  return (
    <Card key={name}>
      <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5, textAlign: 'center' }}>
        {name}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2.5, color: 'text.secondary', textAlign: 'center' }}>
        {role}
      </Typography>

      <Box sx={{ px: 1 }}>
        <Image alt={name} src={avatarUrl} ratio="1/1" sx={{ borderRadius: 2 }} />
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
        {_socials.map((social) => (
          <IconButton
            key={social.name}
            sx={{
              color: social.color,
              '&:hover': {
                bgcolor: alpha(social.color, 0.08),
              },
            }}
          >
            <Iconify icon={social.icon} />
          </IconButton>
        ))}
      </Stack>
    </Card>
  );
}
