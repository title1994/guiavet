import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Link,
  makeStyles
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { useHistory } from "react-router-dom";

interface JWTLoginProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {},
  loginBtn: {
    display: "flex",
    justifyContent: "center"
  }
}));

const JWTLogin: FC<JWTLoginProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { login } = useAuth() as any;
  const isMountedRef = useIsMountedRef();
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        email: 'demo@devias.io',
        password: 'Password123',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required')
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          history.push('/');
          await login(values.email, values.password);
          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form
          noValidate
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            autoFocus
            helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Senha"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>
                {errors.submit}
              </FormHelperText>
            </Box>
          )}
          <Link
            component={RouterLink}
            to="/forgot"
            variant="body2"
            color="secondary"
          >
            Esqueci minha senha.
            </Link>
          <Box mt={2} className={classes.loginBtn}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              size="large"
              type="submit"
              variant="contained"
            >
              ENTRAR
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

JWTLogin.propTypes = {
  className: PropTypes.string,
};

export default JWTLogin;
