---
sidebar: auto
---

## 插入排序
```js
// 默认第一个元素已经排序好，第一层循环选中从1开始
// 第二层循环让指定的元素 arr[j] 与它之前一位的元素 arr[j-1] 相比, 如 arr[j] < arr[j-1]则调换位置
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            }
        }
    }
    return arr
}

// 合并条件判断
// j进入循环必须满足2个条件: j>0 ,且要比前一位元素要小
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            let temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
        }
    }
}

```


## 选择排序
```js
// 选择排序
// 第一层循环指定从下标为0开始指定元素: arr[i]
// 第二层循环从i+1开始，让第一层循环中的元素arr[i]分别于第二层比较,小于arr[i]则进行替换
// minIndex保存最小值的索引

function selectionSort(arr) {
    let minIndex
    for (let i = 0; i < arr.length; i++) {
        // 寻找到[i,n) 区间里的最小值，并记录
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr
}
```
