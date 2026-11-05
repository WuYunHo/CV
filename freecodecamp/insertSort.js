// 实现插入排序
// 我们将要研究的下一个排序方法是插入排序。 此方法的工作原理是通过在数组的开头构建排序数组。 它从第一个元素开始创建排序数组。 然后，它检查下一个元素并将其向后交换到已排序的数组中，直到它处于已排序的位置为止。 它继续遍历列表，并将新项目向后交换到已排序的部分中，直到到达末尾为止。 这种算法在平均和最坏的情况下都有二次方的时间复杂性。

// 说明： 编写一个函数insertionSort ，它将一个整数数组作为输入，并按照从最小到最大的排序顺序返回这些整数的数组。

function insertionSort(array) {
    // 只修改这一行下面的代码

    for(let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }

    return array;
    // 只修改这一行上面的代码
  }