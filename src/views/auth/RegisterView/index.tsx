import React, { useState } from 'react';
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
import JWTRegister from './JWTRegister';
import RegisterItem1 from './register-item1';
import RegisterItem2 from './register-item2';
import RegisterItem3 from './register-item3';
import backgroundImg from 'src/assets/img/background.jpg';
import rigsterRibbon from 'src/assets/img/register-ribbon.svg';

const methodIcons = {
  'Auth0': '/static/images/auth0.svg',
  'FirebaseAuth': '/static/images/firebase.svg',
  'JWT': '/static/images/jwt.svg'
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
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
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
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
    minHeight: 400
  },
  currentMethodIcon: {
    height: 40,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  }
}));

const RegisterView: FC = () => {
  const classes = useStyles();
  const { method } = useAuth() as any;

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        mb={8}
        display="flex"
        justifyContent="center"
      >
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Box>
      <Container
        className={classes.cardContainer}
        maxWidth="sm"
      >
        <Typography variant="h1" color="textSecondary">
          Seus pacientes est??o te esperando!
        </Typography>
        <div className={classes.cardRibbon}>
          <img src={rigsterRibbon}></img>
        </div>
        <Card>
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
              mt={3}
            >
              <JWTRegister />
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

export default RegisterView;
