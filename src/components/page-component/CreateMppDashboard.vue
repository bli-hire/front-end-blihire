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
  <div class="content">
    <div v-if="department === 'Technology'">
      <h4>Technology</h4>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#jobSystemDev" v-model="jobPosition">Sr. System Development Engineer</a>
        <div id="jobSystemDev" class="collapse container-fluid">
          <button @click="goToCreateMppDetail('Sr. System Development Engineer')" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#jobMobieDev" v-model="jobPosition">Mobile Development Engineer</a>
        <div id="jobMobieDev" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#sysDevEng" v-model="jobPosition">System Development Engineer</a>
        <div id="sysDevEng" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#sysDevEngTest" v-model="jobPosition">System Development Engineer Testing</a>
        <div id="sysDevEngTest" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#techSupp" v-model="jobPosition">Technical Support Staff</a>
        <div id="techSupp" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>
      </div>
    </div>

    <div v-if="department === 'BusinessDevelopment'">
      <h4>Business Developement</h4>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#productManager"  v-model="jobPosition">Product Manager</a>
        <div id="productManager" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>
        <a class="list-group-item" data-toggle="collapse" href="#businessDevStaff" v-model="jobPosition">Business Development Staff</a>
        <div id="businessDevStaff" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>
      </div>
    </div>

    <div v-if="department === 'Marketing'">
      <h4>Marketing</h4>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#srConsumer" v-model="jobPosition">Sr. Consumer Market Insight Analyst</a>
        <div id="srConsumer" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#performanceAdvertist" v-model="jobPosition">Performance Advertising Analyst</a>
        <div id="performanceAdvertist" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>
      </div>
    </div>

    <div v-if="department === 'ProductManagement'">
      <h4>Product Management</h4>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#srUxDesigner" v-model="jobPosition">Sr. UX Designer</a>
        <div id="srUxDesigner" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#uxCopyWritter" v-model="jobPosition">UX Copywriter</a>
        <div id="uxCopyWritter" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>
      </div>
    </div>

    <div v-if="department === 'TradePartnership'">
      <h4>Trade Partnership</h4>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#digitalImaging" v-model="jobPosition">Digital Imaging</a>
        <div id="digitalImaging" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#contentPromotionStrategist" v-model="jobPosition">Content & Promotion Strategist</a>
        <div id="contentPromotionStrategist" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#merchandisingManager" v-model="jobPosition">Merchandising Manager</a>
        <div id="merchandisingManager" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>
      </div>
    </div>

    <div v-if="department === 'HumanResource'">
      <h4>Human Resource</h4>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#talentAcquisition" v-model="jobPosition">Talent Acquisition Specialist</a>
        <div id="talentAcquisition" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>
      </div>
    </div>
    
    <div v-if="department === 'Operation'">
      <h4>Operation</h4>
      <div class="list-group">

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#seniorExperienceSolutionManager" v-model="jobPosition">Senior Experience Solution Manager</a>
        <div id="seniorExperienceSolutionManager" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#inventoryControlAsset" v-model="jobPosition">Inventory Control & Asset Recovery (Return) Staff</a>
        <div id="inventoryControlAsset" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#blitsCollegeAssistantManager" v-model="jobPosition">BLITS College Assistant Manager</a>
        <div id="blitsCollegeAssistantManager" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#srFleetManagementSpesialist" v-model="jobPosition">Sr. Fleet Management Specialist(To be Located in Bandung)</a>
        <div id="srFleetManagementSpesialist" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#fleetManagementSpecialist" v-model="jobPosition">Fleet Management Specialist(To be Located in Bandung)</a>
        <div id="fleetManagementSpecialist" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#processImprovementAndReengineering" v-model="jobPosition">Process Improvement and Reengineering Specialist</a>
        <div id="processImprovementAndReengineering" class="collapse container-fluid">
          <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button>
        </div>
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
      department: '',
      indicatorData: '',
      detailMpp: []
    }
  },
  props: ['content'],
  beforeMount () {
    this.department = JSON.parse(window.sessionStorage.getItem('user')).department
    this.idRequested = JSON.parse(window.sessionStorage.getItem('user')).id
    if (JSON.parse(window.localStorage.getItem('detailMpp')) === null) {
      this.indicatorData = false
    } else {
      this.indicatorData = true
      alert(window.localStorage.getItem('detailMpp'))
    }
  },
  methods: {
    goToCreateMppDetail (jobPosition) {
      if (JSON.parse(window.localStorage.getItem('detailMpp')) === null) {
        window.localStorage.setItem('detailMpp', [])
      }
      this.$router.push({
        path: 'create-new/detail',
        query: {jobPosition: jobPosition}
      })
    }
  }
}
</script>

<style>
.center-content {
  padding-top: 25vh;
}
</style>
