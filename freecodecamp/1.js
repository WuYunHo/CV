const sym1 = ([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
const sym2 = ([1, 2, 3], [5, 2, 1, 4])  //[3, 4, 5]

function sym(...args) {

    console.log(args);

    const sym2 = (a, b) => {

        console.log(a, b);
        const A = [...new Set(a)];
        const B = [...new Set(b)];

        // const left = A.filter((x) => !B.includes(x));
        // const right = B.filter((x) => !A.includes(x));
        // return [...left, ...right];
    };
  
    
    return [...new Set(args.reduce(sym2))];
}

console.log(sym(sym2));