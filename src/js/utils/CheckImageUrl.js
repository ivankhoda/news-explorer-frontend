import {
  imageUrlBackendRegex, linkToDefaultImage, linkUrlBackendRegex,
  linkToDefaultPage,
} from '../constants/Constants';

const ImageRegEx = new RegExp(imageUrlBackendRegex);
function checkImageUrl(link) {
  if (ImageRegEx.test(link)) {
    return link;
  }
  return linkToDefaultImage;
}
const PageRegEx = new RegExp(linkUrlBackendRegex);
function checkPageUrl(link) {
  if (PageRegEx.test(link)) {
    return link;
  }
  return linkToDefaultPage;
}

export { checkImageUrl, checkPageUrl };
