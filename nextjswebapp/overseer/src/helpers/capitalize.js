// create a function that takes a string and makes it capitalized case
export default function capitalize(str) {
  str = str.replaceAll("_", " ");
  let words = str.split(" ");

  let ret = "";
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    ret += words[i] + " ";
  }
  return ret;
}
