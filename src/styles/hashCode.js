const hashCode = string => {
  let hash = 0;
  if (string.length == 0) {
    return hash;
  }
  for (var i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash;
  }
  return hash;
}

export default hashCode
