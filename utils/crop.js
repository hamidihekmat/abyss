export const crop = (imageURL) => {
  const splitUrl = imageURL.split('media/');
  splitUrl.splice(1, 0, 'media/crop/600/400/');
  return splitUrl.join('');
};
