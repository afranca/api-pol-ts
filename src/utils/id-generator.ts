export const idGenerator = (): number => {
  let range = { min: 1, max: 10000 };
  let delta = range.max - range.min;
  const randomId = Math.round(range.min + Math.random() * delta);

  return randomId;
};
