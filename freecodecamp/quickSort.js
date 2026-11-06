// 

function quickSort(array) {
    // 只修改这一行下面的代码
  
    if(array.length <= 1) {
        return array;
    }

    const pivot = array[0];
    const left = [];
    const right = [];

    for(let i = 1; i < array.length; i++) {
        if(array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
    
    // 只修改这一行上面的代码
  }

  console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))