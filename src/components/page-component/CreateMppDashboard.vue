<template>
  <div class="content center-content">
    <h2>Please fill this blank with total position that needed in this Mpp</h2>
    <br>
      <input type="number" name="" id="" v-model="totalPositionNeeded" required="true">
      <button class="btn btn-primary" v-on:click="verifyTotalData()">
         <!-- <router-link :to="{ path: 'create-new/detail', query: { positionNeeded: totalPositionNeeded }}">Next</router-link> -->
         Next
      </button>  
  </div>
</template>

<script>
import BoxComponent from '@/components/page-component/BoxComponent'
export default {
  components: {
    BoxComponent
  },
  name: 'department-dashboard',
  data () {
    return {
      totalPositionNeeded: ''
    }
  },
  props: ['content'],
  beforeMount () {
  },
  methods: {
    goToMppDetail () {
      this.$router.push({
        path: 'create-new/detail',
        query: {positionNeeded: this.totalPositionNeeded}
      })
    },
    verifyTotalData () {
      if (this.totalPositionNeeded === '') {
        alert('Please fill how many job position that needed')
      } else {
        this.goToMppDetail()
      }
    }
  }
}
</script>

<style>
.center-content {
  padding-top: 25vh;
}
</style>
