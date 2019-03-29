
const splitIcon = icon => (icon ? icon.match(/^([fab|fas|far]*)-?(.+)/).splice(1, 2).filter(p => p.length > 0) : null);
const arrayEquals = (a, b) => {
  if (a === undefined && b === undefined) {
    return true;
  }
  
  if (a === null && b === null) {
    return true;
  }

  // if the other array is a falsy value, return
  if (!b) {
    return false;
  }

  if (!a) {
    return false;
  }

  // compare lengths - can save a lot of time
  if (a.length !== b.length) {
    return false;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0, l = a.length; i < l; i++) {
    // Check if we have nested arrays
    if (a[i] instanceof Array && b[i] instanceof Array) {
      // recurse into the nested arrays
      if (!arrayEquals(a[i], b[i])) {
        return false;
      }
    } else if (a[i] !== b[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};

export { splitIcon, arrayEquals };
