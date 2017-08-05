<template>
  <!-- <div class="content center-content">
    <h2>Please fill this blank with total position that needed in this Mpp</h2>
    <br>
      <input type="number" name="" id="" v-model="totalPositionNeeded" required="true">
      <button class="btn btn-primary" v-on:click="verifyTotalData()"> -->
         <!-- <router-link :to="{ path: 'create-new/detail', query: { positionNeeded: totalPositionNeeded }}">Next</router-link> -->
         <!-- Next -->
      <!-- </button> -->
  <!-- </div> -->
  <div class="content" v-if="department === 'Technology'">
    <h4>Technology</h4>
    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#jobSystemDev">Sr. System Development Engineer</a>
      <div id="jobSystemDev" class="collapse container-fluid">
        <button class="btn btn-primary">Create Mpp for this Position</button>
      </div>

      <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#jobMobieDev">Mobile Development Engineer</a>
      <div id="jobMobieDev" class="collapse container-fluid">
        <button class="btn btn-primary">Create Mpp for this Position</button>
      </div>

       <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#sysDevEng">System Development Engineer</a>
      <div id="sysDevEng" class="collapse container-fluid">
        <button class="btn btn-primary">Create Mpp for this Position</button>
      </div>

       <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#sysDevEngTest">System Development Engineer Testing</a>
      <div id="sysDevEngTest" class="collapse container-fluid">
        <button class="btn btn-primary">Create Mpp for this Position</button>
      </div>

       <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#techSupp">Technical Support Staff</a>
      <div id="techSupp" class="collapse container-fluid">
        <button class="btn btn-primary">Create Mpp for this Position</button>
      </div>
    </div>
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
      totalPositionNeeded: '',
      department: ''
    }
  },
  props: ['content'],
  beforeMount () {
    this.department = JSON.parse(window.sessionStorage.getItem('user')).department
    // alert(this.department)
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
