<template>
    <div class="date-picker">
    <input type="datetime-local" />
  </div>
</template>

<script>
export default {
  inheritAttrs: true,
  created () {
    console.log(this.$attrs)
  }
}
</script>

<style>

</style>
