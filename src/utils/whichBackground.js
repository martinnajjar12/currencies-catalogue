const whichBackground = counter => {
  if (counter === 2 || counter === 3) {
    return { backgroundColor: '#cf4278' };
  }
  return { backgroundColor: '#db4681' };
};

export default whichBackground;
