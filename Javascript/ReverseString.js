function reverseWords(str) {
    return str.split(" ").map(function(word) {
      return word.split("").reverse().join("");
    }).join(" ");
}
console.log(reverseWords("This is a sunny day"));
