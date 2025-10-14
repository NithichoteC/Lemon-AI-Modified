export const svgUrl = (name) => {
  const key = name.endsWith('.svg') ? name : `${name}.svg`;
  const files = import.meta.glob('@/assets/svg/**/*.svg', { eager: true, as: 'url' });
  return files[`/src/assets/svg/${key}`];
};
