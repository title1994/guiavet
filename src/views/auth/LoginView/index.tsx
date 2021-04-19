import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Link,
  Tooltip,
  Typography,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import Page from 'src/components/Page';
import Logo from 'src/components/Logo';
import useAuth from 'src/hooks/useAuth';
import Auth0Login from './Auth0Login';
import FirebaseAuthLogin from './FirebaseAuthLogin';
import JWTLogin from './JWTLogin';
import backgroundImg from 'src/assets/img/background.jpg';
import loginRibbon from 'src/assets/img/login-ribbon.svg';

const methodIcons = {
  'Auth0': '/static/images/auth0.svg',
  'FirebaseAuth': '/static/images/firebase.svg',
  'JWT': '/static/images/jwt.svg'
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "100% 100%",
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  banner: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  bannerChip: {
    marginRight: theme.spacing(2)
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  authTitle: {
    textAlign: "center"
  },
  card: {
    marginTop: "45px",
  },
  cardContainer: {
    width: "25vw",
    padding: theme.spacing(0),
    marginTop: "180px",
    position: "relative"
  },
  cardRibbon: {
    width: "64px",
    height: "64px",
    position: "absolute",
    top: "90px",
    left: "32px"
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 470,
  },
  currentMethodIcon: {
    height: 40,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  }
}));

const LoginView: FC = () => {
  const classes = useStyles();
  const { method } = useAuth() as any;

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        mb={8}
        style={{ position: "absolute" }}
      >
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Box>
      <Container
        className={classes.cardContainer}
        maxWidth="sm"
      >
        <Typography variant="h1" color="textSecondary" className={classes.authTitle}>
          Seus pacientes
          <br />
          estão te esperando!
        </Typography>
        <div className={classes.cardRibbon}>
          <img src={loginRibbon}></img>
        </div>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              mb={3}
            >
              <div>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h2"
                >
                  Log in no Guia Vet
                </Typography>
                {/* <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  Sign in on the internal platform
                </Typography> */}
              </div>
              {/* <div className={classes.currentMethodIcon}>
                <img
                  alt="Auth method"
                  src={methodIcons[method]}
                />
              </div> */}
            </Box>
            <Box
              flexGrow={1}
            >
              {method === 'Auth0' && <Auth0Login />}
              {method === 'FirebaseAuth' && <FirebaseAuthLogin />}
              {method === 'JWT' && <JWTLogin />}
            </Box>
            <Box my={3}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              to="/register"
              variant="body2"
              color="textSecondary"
            >
              Create new account
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default LoginView;
