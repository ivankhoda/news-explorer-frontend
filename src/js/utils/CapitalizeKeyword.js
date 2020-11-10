function capitalize(word) {
  return word.split(' ')[0].charAt(0).toUpperCase() + word.split(' ')[0].substring(1);
}

export { capitalize };
