import { Slide, useScrollTrigger } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
