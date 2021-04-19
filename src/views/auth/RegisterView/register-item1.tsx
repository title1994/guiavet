import {
    makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import type { FC } from 'react';
import React from 'react';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

interface RegisetrItem1 {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const RegisetrItem1: FC<RegisetrItem1> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { register } = useAuth() as any;
  const isMountedRef = useIsMountedRef();
  const handleNext = () => {

  }

  return (
    <>
    </>
  );
};

RegisetrItem1.propTypes = {
  className: PropTypes.string
};

export default RegisetrItem1;
