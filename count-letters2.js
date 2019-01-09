var input = "lighthouse in the house";

function countLetters(string) {
    var small = input.replace(/\s/gi, "").toLowerCase();

    var obj = {}

    for (let i = 0; i < small.length; i++) {
        if (!obj.hasOwnProperty(small[i])) {
            obj[small[i]] = [];
        }
        obj[small[i]].push(i);
    }
    return (obj)

}

console.log(countLetters(input));



// {
//     l: 1,
//     i: [1, 9]
//     g: 1,
//     h: [4, 5]
//     t: 2,
//     o: 2,
//     u: 2,
//     s: 2,
//     e: 3,
//     n: 1,
//   }