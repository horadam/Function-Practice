// ---------------------
// Define a function max() that takes two numbers as 
// arguments and returns the largest of them. Use the 
// if-then-else construct available in JavaScript.
// ---------------------

var max = (a,b) => {
    if (a>b) {
        return a
    } else if (b>a) {
        return b
    } else return "equal"
}

console.assert(max(2,3) === 3)
console.assert(max(23,24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three 
// numbers as arguments and returns the largest of them.
// ---------------------

var maxOfThree = (a,b,c) =>{
    if (a>b && a>c) {
        return a
    } else if (b>a && b>c) {
        return b
    } else if (c>b && c>a) {
        return c
    }
}
console.assert(maxOfThree(2,56,3) === 56)
console.assert(maxOfThree(12,3,4) === 12)
console.assert(maxOfThree(-12,4,-5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a 
// string of length 1) and returns true if it is a 
// vowel, false otherwise.
// ---------------------

var isVowel = (a) => {
    if (typeof a === 'string') {
        if (a.toLowerCase()==="a" || a.toLowerCase()==="e" || a.toLowerCase()==="i" || a.toLowerCase()==="o" || a.toLowerCase()==="u") {
            return true }
            else {
                return false
            }
        } else {
        return false
    } 
    
}
console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);
console.assert(isVowel("2") === false)

// // ---------------------
// // Write a function rovarspraket() that will translate 
// // a text into "Rovarspraket". That is, double every 
// // consonant and place an occurrence of "o" in between. 
// // For example, translate("this is fun") should return 
// // the string "tothohisos isos fofunon".
// // ---------------------

var rovarspraket = (word) => {
    if (typeof word !== 'string') { 
        return word + ''
    }
            var newStr = ''
            for (var i = 0; i < word.length; i++) {
            if (isVowel(word[i])!=true) {
            
                // if (word.toLowerCase(word[i]) !== "a" || word.toLowerCase(word[i]) !== "e" || word.toLowerCase(word[i]) !== "i" ||word.toLowerCase(word[i]) !== "o" || word.toLowerCase(word[i]) !== "u" || word.toLowerCase(word[i]) !== num || word.toLowerCase(word[i]) !== " ") {

                newStr = newStr + word[i] + "o" + word[i]
            } else {
                newStr = newStr + word[i]
            } 
            } 
            return newStr
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")


// // ---------------------
// // Define a function reverse() that computes the reversal 
// // of a string. For example, reverse("jag testar") should 
// // return the string "ratset gaj".
// // ---------------------

var reverse = (word) => {
    var wordSplit = word.split("");
    var reverseArray = wordSplit.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")