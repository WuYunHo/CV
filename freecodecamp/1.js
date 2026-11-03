// 找到对称差异
// 两个集合的数学术语 对称差异 （△ 或 ⊕）是指存在于两个集合中的任意一个集合，但不同时存在于两个集合中的元素的集。 例如集合 A = {1, 2, 3} 和 B = {2, 3, 4}，那么 A △ B = {1, 4}。

// 对称差异是一种二元操作，这意味着它只能在两个元素上操作。 所以要评估一个涉及三个元素的表达式（A △ B △ C），你必须一次完成一个操作。 因此，对于上述 A 和 B 两个集合，如果 C = {2, 3}，那么 A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}。

function sym(...args) {

    const sym2 = (arr1, arr2) => {
        const newArr1 = [...new Set(arr1)];
        const newArr2 = [...new Set(arr2)];

        const result1 = newArr1.filter((item) => !newArr2.includes(item));
        const result2 = newArr2.filter((item) => !newArr1.includes(item));

        return [...result1, ...result2];
    }

    const result3 = [...new Set(args.reduce(sym2))];
    return result3.sort((a, b) => a - b);

  }
  
  console.log(sym([1, 2, 3], [5, 2, 1, 4]));