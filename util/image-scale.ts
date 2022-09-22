export const imageScale = function (
  srcWidth: number,
  srcHeight: number,
  maxWidth: number,
  maxHeight: number
) {
  let resizeWidth = srcWidth;
  let resizeHeight = srcHeight;

  let aspect = resizeWidth / resizeHeight;
  let scaleX = maxWidth / srcWidth;
  let scaleY = maxHeight / srcHeight;
  let scale = Math.min(scaleX, scaleY);

  resizeWidth *= scale;
  resizeHeight *= scale;

  if (resizeWidth > maxWidth) {
    resizeWidth = maxWidth;
    resizeHeight = resizeWidth / aspect;
  }

  if (resizeHeight > maxHeight) {
    aspect = resizeWidth / resizeHeight;
    resizeHeight = maxHeight;
    resizeWidth = resizeHeight * aspect;
  }

  return {
    width: resizeWidth,
    height: resizeHeight,
  };
};
