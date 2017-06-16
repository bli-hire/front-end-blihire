<template>
  <div class="content">
    <BoxComponent v-for="n in 4" v-bind:title="content" message="Please we need ..."></BoxComponent>
  </div>
</template>

<script>
import BoxComponent from '@/components/page-component/BoxComponent'

export default {
  components: {
    BoxComponent
  },
  name: 'department-dashboard',
  props: ['content']
}
</script>

<style>
</style>
