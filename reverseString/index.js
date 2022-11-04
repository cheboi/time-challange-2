function contains(r) {
  return (
    r == "a" ||
    r == "A" ||
    r == "e" ||
    r == "E" ||
    r == "i" ||
    r == "I" ||
    r == "o" ||
    r == "O" ||
    r == "u" ||
    r == "U"
  );
}
function reverseVowel(str) {
  let i = 0;
  let j = str.length - 1;
  let k = str.split("");
  while (i < j) {
    if (!contains(k[i])) {
      i++;
      continue;
    }
    if (!contains(k[j])) {
      j--;
      continue;
    }

    let t = k[i];
    k[i] = k[j];
    k[j] = t;

    i++;
    j--;
  }
  let l = k.join("");
  return l;
}

let str = "hello";
console.log(reverseVowel(str));
