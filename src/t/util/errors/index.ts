export const raiseIf = (pred: boolean, message = 'error'): void => {
  if (pred) {
    throw new Error(message);
  }
};

export const raiseIfNot = (pred: boolean, message = 'error'): void => {
  if (!pred) {
    throw new Error(message);
  }
};
