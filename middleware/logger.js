export default function(req, res, next) {
  // eslint-disable-next-line
  console.log(`[${req.method}] ${req.url}`);

  next();
}
