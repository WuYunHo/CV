function bubbleSort(array) {
    // 只修改这一行下面的代码

    for(let i = 0; i < array.length; i++) {

        let swapped = false;

        for(let j = 0; j < array.length - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }

        if(!swapped) {
            break;
        }
    }

    return array;
    // 只修改这一行上面的代码
  }



console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))