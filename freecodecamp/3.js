
// 算法
// 请不要重复
// 返回没有重复连续字母的提供字符串的总排列数。 假设提供的字符串中的所有字符都是唯一的。

// 例如，aab 应该返回 2，因为它有 6 个排列（aab、aab、aba、aba、baa 和 baa），但其中只有 2 个（aba 和 aba）没有重复相同字符（即 a）。

function permAlone(str) {

    const checkIfReStr = (str) => {
        for(let i = 0; i < str.length; i++) {
            if(str[i] === str[i + 1]) {
                return false;
            }
        }
        return true;
    }    

    const permute = (str) => {
        if(str.length <= 1) {
            return [str];
        }

        const result = [];
        for(let i = 0; i < str.length; i++) {
            const head = str[i];
            const rest = str.slice(0, i) + str.slice(i + 1);

            for(const p of permute(rest)) {
                result.push(head + p);
            }
         
        }

        return result;
    }

    return permute(str).filter(checkIfReStr).length;
}
  
console.log(permAlone('aab'));