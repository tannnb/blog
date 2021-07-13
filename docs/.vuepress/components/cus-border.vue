<template>
  <div>
    <button @click="handle">待续...</button>
  </div>
</template>

<script>
export default {
  name: "cus-border",
  data() {
    return {
      state: false
    }
  },
  mounted() {
    let arr = [
      {id: 1, name: '部门1', pid: 0},
      {id: 2, name: '部门2', pid: 1},
      {id: 3, name: '部门3', pid: 1},
      {id: 4, name: '部门4', pid: 3},
      {id: 5, name: '部门5', pid: 4},
    ]

    let a = this.arrayToTree(arr)
    console.log(a)

  },
  methods: {
    arrayToTree(data, pid = 0) {
      return data.reduce((result, item) => {
        if (item.pid === pid) {
          result.push({
            item,
            ...{children: this.arrayToTree(data, item.id)}
          })
        }
        return result
      }, [])
    },
    handle() {

    },
  }
}
</script>

<style scoped>

</style>
