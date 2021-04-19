import {
    makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import type { FC } from 'react';
import React from 'react';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

interface RegisetrItem3 {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const RegisetrItem3: FC<RegisetrItem3> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { register } = useAuth() as any;
  const isMountedRef = useIsMountedRef();

  return (
    <>
    </>
  );
};

RegisetrItem3.propTypes = {
  className: PropTypes.string
};

export default RegisetrItem3;
