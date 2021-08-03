# 仿写扁平数据结构转Tree

```js
function arrayToTree(data, pid = 0) {
    return data.reduce((result, item) => {
        if (item.pid === pid) {
            result.push({
                item,
                ...{children: arrayToTree(data, item.id)}
            })
        }
        return result
    }, [])
}
```
