import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

const splitIcon = (icon?: string): [IconPrefix, IconName] => {
  const match = icon ? icon.match(/^([fab|fas|far]*)-?(.+)/) : null;
  if (match != null) {
    const [one, two] = match.splice(1, 2).filter((p) => p.length > 0);
    return [one as IconPrefix, two as IconName];
  }
  return ['far', 'question-circle'];
};
const arrayEquals = (a: any, b: any) => {
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
