function reverseWords(s) {
    const words = s.trim().split(/\s+/).reverse();
    return words.join(' ');
}

const Str = "the sky is blue";
const Output = reverseWords(Str);
console.log(Output) // blue is sky the
