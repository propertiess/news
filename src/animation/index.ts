export const fadeInOutRight = {
  initial: {
    opacity: 0,
    x: 300
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    x: 300,
    transition: { duration: 0.5 }
  }
};

export const fadeInOut = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
};

export const fadeInOutDown = {
  initial: {
    opacity: 0,
    y: -13
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 16,
  }
};
