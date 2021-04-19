import {
    makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import type { FC } from 'react';
import React from 'react';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

interface RegisetrItem2 {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const RegisetrItem2: FC<RegisetrItem2> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { register } = useAuth() as any;
  const isMountedRef = useIsMountedRef();

  return (
    <>
    </>
  );
};

RegisetrItem2.propTypes = {
  className: PropTypes.string
};

export default RegisetrItem2;
