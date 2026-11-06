// 实现归并排序
// 另一种常见的中间排序算法是归并排序。 像快速排序一样，合并排序也使用分而治之的递归方法对数组进行排序。 它基于这样一个事实：要将两个已经排好序的数组排在一起，是相对容易的。 但是我们只从一个数组作为输入开始，那么我们如何从中获得两个已排序的数组呢？ 好吧，我们可以递归地将原始输入分成两部分，直到我们到达每个数组只有一个元素的基本情况。 单项数组是自然排序的，因此我们可以开始组合。 这个组合将展开拆分原始数组的递归调用，最终生成所有元素的最终排序数组。 合并排序的步骤如下：

// 1) 将输入数组递归地分成两部分，直到生成仅包含一个元素的子数组。

// 2) 将每个已排序的子数组合并在一起以生成最终的排序的数组。

// 合并排序是一种有效的排序方法，时间复杂度为 O(nlog(n)) 。 该算法很受欢迎，因为它性能高且易于实现。

// 顺便说一句，这将是我们在此处介绍的最后一种排序算法。 但是，稍后在关于树型数据结构的部分中，我们将描述堆排序，这是另一种在其实现中需要二进制堆的有效排序方法。

// 说明： 编写一个函数 mergeSort，它以整数数组作为输入，并按从最小到最大的排序顺序返回这些整数的数组。 实现这一点的一个好方法是编写一个函数，例如 merge，它负责合并两个已排序的数组；以及另一个函数，例如 mergeSort，它负责递归，生成单项数组以提供给 merge。 祝你好运！

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(array) {
  // 只修改这一行下面的代码

  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);

  // 只修改这一行上面的代码
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

