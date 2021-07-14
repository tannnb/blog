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
    new Promise((resolve, reject) => {
        resolve(1)
    }).then((res) => {

    },err => {

    })
  },
  methods: {
    handle() {

    },
  }
}
</script>

<style scoped>

</style>
