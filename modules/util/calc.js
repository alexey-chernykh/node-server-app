const sum = (...o) => {
  return (
    o.length &&
    o.reduce((f, s) => {
      return f + s;
    })
  );
};
const diff = (abs, ...o) => {
  return abs === true || false
    ? (abs &&
        -(
          o.length &&
          o.reduce((f, s) => {
            return f - s;
          })
        )) ||
        (o.length &&
          o.reduce((f, s) => {
            return f - s;
          }))
    : abs -
        (o.length &&
          o.reduce((f, s) => {
            return f - s;
          }));
};
const fract = (...o) => {
  return (
    o.length &&
    o.reduce((f, s) => {
      return f / s;
    })
  );
};
const prod = (...o) => {
  return (
    o.length &&
    o.reduce((f, s) => {
      return f * s;
    })
  );
};

exports.sum = sum;
exports.difference = diff;
exports.fraction = fract;
exports.product = prod;
