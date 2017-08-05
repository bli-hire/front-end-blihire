<template>
  <div class="content content-job">
    <div class=""v-if="department === 'Technology'">
    <h2>Pembuatan MPP</h2>
    <h3>Department : {{department}}</h3>
    <h4>Pengaju MPP : {{surename}}</h4>
    <br><br>
      <p>Berikut ini adalah posisi pekerjaan yang tersedia untuk department anda. Silahkan pilih salah satu untuk melanjutkan pembuatan MPP detail. </p>
      <p>Jika sudah selesai mengisikan detail, silahkan melanjutkan dengan menekan tombol "Send MPP"</p>
      <p>Jika sudah selesai mengosongkan seluruh data mpp yang hendak dibuat, silahkan tekan tombol "Clear MPP"</p>
      <br>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#jobSystemDev">Sr. System Development Engineer</a>
        <div id="jobSystemDev" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Sr. System Development Engineer') === true" @click="goToCreateMppDetail('Sr. System Development Engineer')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Sr. System Development Engineer') === false">
            <p>You are already assign detail for this job position for mpp</p>  
            <button class="btn-primary btn">Edit Detail Mpp</button>
          </div>
        </div>
        <br>
        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#jobMobieDev">Mobile Development Engineer</a>
        <div id="jobMobieDev" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Mobile Development Engineer') === true" @click="goToCreateMppDetail('Mobile Development Engineer')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Mobile Development Engineer') === false">
            <p>You are already assign detail for this job position for mpp</p>  
            <button class="btn-primary btn">Edit Detail Mpp</button>
          </div>
        </div>
        <br>
        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#sysDevEng">System Development Engineer</a>
        <div id="sysDevEng" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('System Development Engineer') === true" @click="goToCreateMppDetail('System Development Engineer')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('System Development Engineer') === false">
            <p>You are already assign detail for this job position for mpp</p>  
            <button class="btn-primary btn">Edit Detail Mpp</button>
          </div>
        </div>
        <br>
        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#sysDevEngTest">System Development Engineer Testing</a>
        <div id="sysDevEngTest" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('System Development Engineer Testing') === true" @click="goToCreateMppDetail('System Development Engineer Testing')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('System Development Engineer Testing') === false">
            <p>You are already assign detail for this job position for mpp</p>  
            <button class="btn-primary btn">Edit Detail Mpp</button>
          </div>
        </div>
        <br>
        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#techSupp">Technical Support Staff</a>
        <div id="techSupp" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Technical Support Staff') === true" @click="goToCreateMppDetail('Technical Support Staff')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Technical Support Staff') === false">
            <p>You are already assign detail for this job position for mpp</p>  
            <button class="btn-primary btn">Edit Detail Mpp</button>
          </div>
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
    <br>
    <br>
    <button class="btn btn-primary pull-right" @click="">Send MPP</button>
    <button class="btn btn-warning pull-right" @click="initMppDetail()">Clear MPP</button>
    <!-- <button class="btn btn-primary pull-right">Send MPP</button>
    <button @click="clearLoc ()" class="btn btn-warning pull-right">Clear MPP</button> -->

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
      surename: '',
      detailMpp: []
    }
  },
  props: ['content'],
  beforeMount () {
    this.department = JSON.parse(window.sessionStorage.getItem('user')).department
    this.idRequested = JSON.parse(window.sessionStorage.getItem('user')).id
    this.surename = JSON.parse(window.sessionStorage.getItem('user')).name
    if (window.localStorage.getItem('detailMpp') === null || window.localStorage.getItem('detailMpp') === 'undefined' || window.localStorage.getItem('detailMpp') === []) {
      localStorage.removeItem('detailMpp')
      window.localStorage.clear
    }
    if (JSON.parse(window.localStorage.getItem('detailMpp')) === null || JSON.parse(window.localStorage.getItem('detailMpp')) === 'undefined' || JSON.parse(window.localStorage.getItem('detailMpp')) === []) {
      localStorage.removeItem('detailMpp')
      this.indicatorData = false
    } else {
      this.indicatorData = true
      this.detailMpp = JSON.parse(window.localStorage.getItem('detailMpp'))
      // alert(JSON.stringify(this.detailMpp))
    }
  },
  methods: {
    goToCreateMppDetail (jobPosition) {
      if (window.localStorage.getItem('detailMpp') === null || window.localStorage.getItem('detailMpp') === 'undefined' || window.localStorage.getItem('detailMpp') === []) {
        localStorage.removeItem('detailMpp')
        window.localStorage.setItem('detailMpp', [])
      }
      this.$router.push({
        path: 'create-new/detail',
        query: {jobPosition: jobPosition}
      })
    },
    initMppDetail () {
      window.localStorage.clear()
      alert('Data Mpp sementara berhasil dihapus')
      this.$router.go(0)
    },
    checkExistJobPosition (jobPosition) {
      var i
      for (i = 0; i < this.detailMpp.length; i++) {
        // alert(JSON.stringify(this.detailMpp[i].position.jobPosition))
        if (this.department === 'Technology') {
          if (this.detailMpp[i].position.jobPosition === jobPosition) {
            return false
          }
        }
      }
      return true
    },
    sendMpp () {
    },
    clearLoc () {
      localStorage.removeItem('detailMpp')
      window.localStorage.clear
    }
  }
}
</script>

<style>
.content-job {
  padding-top: 3vh;
  background: white;
  padding-left: 13vw;
  padding-right: 5vw;
  text-align: left;
  padding-bottom: 10vh;
}

.content-job>button {
  margin-right: 1vw;
}
</style>
