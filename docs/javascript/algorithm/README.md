---
sidebar: auto
---

## 插入排序
```js
// 插入排序
// 第一个默认已经排好, 从下标为1开始
// 依次与前面进行对比, 如 arr[j - 1] < arr[j] 刚好为排序顺序
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
// 从一组数组中,选择最小的值将 arr[i] 与arr[i+1]... 依次进行对比,若小于 arr[i] ,则记录当前j值并赋值 minIndex
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
