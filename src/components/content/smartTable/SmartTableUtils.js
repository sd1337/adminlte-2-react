const getSortDirection = (sortObject) => {
  let param = 'none';
  if (sortObject) {
    let isAsc;
    let isDesc;
    const { direction } = sortObject;
    if (typeof direction === 'string') {
      isAsc = direction.toLowerCase() === 'asc';
      isDesc = direction.toLowerCase() === 'desc';
    } else if (typeof direction === 'number') {
      isAsc = direction === 1;
      isDesc = direction === -1;
    }
    if (isAsc) {
      param = 'asc';
    } else if (isDesc) {
      param = 'desc';
    }
  }
  return param;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getSortDirection,
};
