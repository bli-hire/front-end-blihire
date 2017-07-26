<template>
	<div class="content">
		<h2>Apply Mpp</h2>
		<BoxComponent v-for="n in 3" v-bind:title="content" message="Please we need ..."></BoxComponent>
	</div>
</template>

<script>
import BoxComponent from '@/components/page-component/BoxComponent'
export default {
  components: {
    BoxComponent
  },
  name: 'MppApply',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>
	
</style>
