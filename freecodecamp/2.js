// 库存更新
// 将存储在二维数组中的库存与新交货的二维数组进行比较和更新。 更新当前现有库存物料数量（在 arr1）。 如果找不到商品，请将新商品和数量添加到库存数组中。 返回的库存数组应按项目的字母顺序排列。

function updateInventory(arr1, arr2) {

    const oldArr = arr1.map(item => [...item]);

    for (const [num, name] of arr2) {
        let found = false;
        for(let i = 0; i < oldArr.length; i++) {
			if(oldArr[i][1] === name) {
				oldArr[i][0] += num;
				found = true;
				break;
			}
		}
		if(!found) {
			oldArr.push([num, name]);
		}
    }
    return oldArr.sort((a, b) => a[1].localeCompare(b[1]));
}

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) );