<template>
  <div class="content content-job">
      <div v-if="this.role != 'HeadHR'">
        <h2>Pembuatan MPP</h2>
        <h3>Department : {{department}}</h3>
        <h4>Pengaju MPP : {{surename}}</h4>
        <br><br>
          <p>Berikut ini adalah posisi pekerjaan yang tersedia untuk department anda. Silahkan pilih salah satu untuk melanjutkan pembuatan MPP detail. </p>
          <p>Jika sudah selesai mengisikan detail, silahkan melanjutkan dengan menekan tombol "Send MPP"</p>
          <p>Jika sudah selesai mengosongkan seluruh data mpp yang hendak dibuat, silahkan tekan tombol "Clear MPP"</p>
          <br>
      </div>
    <div class=""v-if="department === 'Technology'">
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#jobSystemDev">Sr. System Development Engineer</a>
        <div id="jobSystemDev" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Sr. System Development Engineer') === true" @click="goToCreateMppDetail('Sr. System Development Engineer')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Sr. System Development Engineer') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Sr. System Development Engineer')" class="btn-primary btn">Edit Detail Mpp</button>
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
      <!-- <h4>Business Developement</h4> -->
      <h2>Pembuatan MPP</h2>
      <h3>Department : {{department}}</h3>
      <h4>Pengaju MPP : {{surename}}</h4>
      <br><br>
        <p>Berikut ini adalah posisi pekerjaan yang tersedia untuk department anda. Silahkan pilih salah satu untuk melanjutkan pembuatan MPP detail. </p>
        <p>Jika sudah selesai mengisikan detail, silahkan melanjutkan dengan menekan tombol "Send MPP"</p>
        <p>Jika sudah selesai mengosongkan seluruh data mpp yang hendak dibuat, silahkan tekan tombol "Clear MPP"</p>
        <br>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#productManager"  v-model="jobPosition">Product Manager</a>
        <div id="productManager" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Product Manager') === true" @click="goToCreateMppDetail('Product Manager')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Product Manager') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Product Manager')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>
        <a class="list-group-item" data-toggle="collapse" href="#businessDevStaff" v-model="jobPosition">Business Development Staff</a>
        <div id="businessDevStaff" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Business Development Staff') === true" @click="goToCreateMppDetail('Business Development Staff')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Business Development Staff') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Business Development Staff')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>
      </div>
    </div>

    <div v-if="department === 'Marketing'">
      <!-- <h4>Marketing</h4> -->
      <h2>Pembuatan MPP</h2>
      <h3>Department : {{department}}</h3>
      <h4>Pengaju MPP : {{surename}}</h4>
      <br><br>
        <p>Berikut ini adalah posisi pekerjaan yang tersedia untuk department anda. Silahkan pilih salah satu untuk melanjutkan pembuatan MPP detail. </p>
        <p>Jika sudah selesai mengisikan detail, silahkan melanjutkan dengan menekan tombol "Send MPP"</p>
        <p>Jika sudah selesai mengosongkan seluruh data mpp yang hendak dibuat, silahkan tekan tombol "Clear MPP"</p>
        <br>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#srConsumer" v-model="jobPosition">Sr. Consumer Market Insight Analyst</a>
        <div id="srConsumer" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Sr. Consumer Market Insight Analyst') === true" @click="goToCreateMppDetail('Sr. Consumer Market Insight Analyst')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Sr. Consumer Market Insight Analyst') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Sr. Consumer Market Insight Analyst')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#performanceAdvertist" v-model="jobPosition">Performance Advertising Analyst</a>
        <div id="performanceAdvertist" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Performance Advertising Analyst') === true" @click="goToCreateMppDetail('Performance Advertising Analyst')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Performance Advertising Analyst') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Performance Advertising Analyst')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>
      </div>
    </div>

    <div v-if="department === 'ProductManagement'">
      <h4>Product Management</h4>
      <h2>Pembuatan MPP</h2>
      <h3>Department : {{department}}</h3>
      <h4>Pengaju MPP : {{surename}}</h4>
      <br><br>
        <p>Berikut ini adalah posisi pekerjaan yang tersedia untuk department anda. Silahkan pilih salah satu untuk melanjutkan pembuatan MPP detail. </p>
        <p>Jika sudah selesai mengisikan detail, silahkan melanjutkan dengan menekan tombol "Send MPP"</p>
        <p>Jika sudah selesai mengosongkan seluruh data mpp yang hendak dibuat, silahkan tekan tombol "Clear MPP"</p>
        <br>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#srUxDesigner" v-model="jobPosition">Sr. UX Designer</a>
        <div id="srUxDesigner" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Sr. UX Designer') === true" @click="goToCreateMppDetail('Sr. UX Designer')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Sr. UX Designer') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Sr. UX Designer')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#uxCopyWritter" v-model="jobPosition">UX Copywriter</a>
        <div id="uxCopyWritter" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('UX Copywriter') === true" @click="goToCreateMppDetail('UX Copywriter')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('UX Copywriter') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('UX Copywriter')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>
      </div>
    </div>

    <div v-if="department === 'TradePartnership'">
      <h4>Trade Partnership</h4>
      <h2>Pembuatan MPP</h2>
      <h3>Department : {{department}}</h3>
      <h4>Pengaju MPP : {{surename}}</h4>
      <br><br>
        <p>Berikut ini adalah posisi pekerjaan yang tersedia untuk department anda. Silahkan pilih salah satu untuk melanjutkan pembuatan MPP detail. </p>
        <p>Jika sudah selesai mengisikan detail, silahkan melanjutkan dengan menekan tombol "Send MPP"</p>
        <p>Jika sudah selesai mengosongkan seluruh data mpp yang hendak dibuat, silahkan tekan tombol "Clear MPP"</p>
        <br>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#digitalImaging" v-model="jobPosition">Digital Imaging</a>
        <div id="digitalImaging" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Digital Imaging') === true" @click="goToCreateMppDetail('Digital Imaging')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Digital Imaging') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Digital Imaging')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#contentPromotionStrategist" v-model="jobPosition">Content & Promotion Strategist</a>
        <div id="contentPromotionStrategist" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Content & Promotion Strategist') === true" @click="goToCreateMppDetail('Content & Promotion Strategist')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Content & Promotion Strategist') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Content & Promotion Strategist')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#merchandisingManager" v-model="jobPosition">Merchandising Manager</a>
        <div id="merchandisingManager" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Merchandising Manager') === true" @click="goToCreateMppDetail('Merchandising Manager')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Merchandising Manager') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Merchandising Manager')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>
      </div>
    </div>

    <div v-if="department === 'HumanResource'">
      <h4>Human Resource</h4>
      <h2>Pembuatan MPP</h2>
      <h3>Department : {{department}}</h3>
      <h4>Pengaju MPP : {{surename}}</h4>
      <br><br>
        <p>Berikut ini adalah posisi pekerjaan yang tersedia untuk department anda. Silahkan pilih salah satu untuk melanjutkan pembuatan MPP detail. </p>
        <p>Jika sudah selesai mengisikan detail, silahkan melanjutkan dengan menekan tombol "Send MPP"</p>
        <p>Jika sudah selesai mengosongkan seluruh data mpp yang hendak dibuat, silahkan tekan tombol "Clear MPP"</p>
        <br>
      <div class="list-group">
        <a class="list-group-item" data-toggle="collapse" href="#talentAcquisition" v-model="jobPosition">Talent Acquisition Specialist</a>
        <div id="talentAcquisition" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Talent Acquisition Specialist') === true" @click="goToCreateMppDetail('Talent Acquisition Specialist')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Talent Acquisition Specialist') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Talent Acquisition Specialist')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>
      </div>
    </div>

    <div v-if="department === 'Operation'">
      <h4>Operation</h4>
      <h2>Pembuatan MPP</h2>
      <h3>Department : {{department}}</h3>
      <h4>Pengaju MPP : {{surename}}</h4>
      <br><br>
        <p>Berikut ini adalah posisi pekerjaan yang tersedia untuk department anda. Silahkan pilih salah satu untuk melanjutkan pembuatan MPP detail. </p>
        <p>Jika sudah selesai mengisikan detail, silahkan melanjutkan dengan menekan tombol "Send MPP"</p>
        <p>Jika sudah selesai mengosongkan seluruh data mpp yang hendak dibuat, silahkan tekan tombol "Clear MPP"</p>
        <br>
      <div class="list-group">

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#seniorExperienceSolutionManager" v-model="jobPosition">Senior Experience Solution Manager</a>
        <div id="seniorExperienceSolutionManager" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Senior Experience Solution Manager') === true" @click="goToCreateMppDetail('Senior Experience Solution Manager')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Senior Experience Solution Manager') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Senior Experience Solution Manager')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#inventoryControlAsset" v-model="jobPosition">Inventory Control & Asset Recovery (Return) Staff</a>
        <div id="inventoryControlAsset" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Inventory Control & Asset Recovery (Return) Staff') === true" @click="goToCreateMppDetail('Inventory Control & Asset Recovery (Return) Staff')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Inventory Control & Asset Recovery (Return) Staff') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Inventory Control & Asset Recovery (Return) Staff')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#blitsCollegeAssistantManager" v-model="jobPosition">BLITS College Assistant Manager</a>
        <div id="blitsCollegeAssistantManager" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('BLITS College Assistant Manager') === true" @click="goToCreateMppDetail('BLITS College Assistant Manager')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('BLITS College Assistant Manager') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('BLITS College Assistant Manager')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#srFleetManagementSpesialist" v-model="jobPosition">Sr. Fleet Management Specialist(To be Located in Bandung)</a>
        <div id="srFleetManagementSpesialist" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Sr. Fleet Management Specialist(To be Located in Bandung)') === true" @click="goToCreateMppDetail('Sr. Fleet Management Specialist(To be Located in Bandung)')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Sr. Fleet Management Specialist(To be Located in Bandung)') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Sr. Fleet Management Specialist(To be Located in Bandung)')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#fleetManagementSpecialist" v-model="jobPosition">Fleet Management Specialist(To be Located in Bandung)</a>
        <div id="fleetManagementSpecialist" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Fleet Management Specialist(To be Located in Bandung)') === true" @click="goToCreateMppDetail('Fleet Management Specialist(To be Located in Bandung)')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Fleet Management Specialist(To be Located in Bandung)') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Fleet Management Specialist(To be Located in Bandung)')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>

        <a class="list-group-item" v-on:click="" data-toggle="collapse" href="#processImprovementAndReengineering" v-model="jobPosition">Process Improvement and Reengineering Specialist</a>
        <div id="processImprovementAndReengineering" class="collapse container-fluid">
          <button v-if="checkExistJobPosition('Process Improvement and Reengineering Specialist') === true" @click="goToCreateMppDetail('Process Improvement and Reengineering Specialist')" class="btn btn-primary">Create Mpp for this Position</button>
          <div v-if="checkExistJobPosition('Process Improvement and Reengineering Specialist') === false">
            <p>You are already assign detail for this job position for mpp</p>
            <button @click="editMppDetail('Process Improvement and Reengineering Specialist')" class="btn-primary btn">Edit Detail Mpp</button>
          </div>
          <!-- <button @click="goToMppDetail()" class="btn btn-primary">Create Mpp for this Position</button> -->
        </div>
      </div>
    </div>
    <br>
    <br>
    <button class="btn btn-primary pull-right" @click="sendMpp()">Send MPP</button>
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
      role: '',
      surename: '',
      detailMpp: [],
      idRequested: ''
    }
  },
  props: ['content'],
  beforeMount () {
    this.department = JSON.parse(window.sessionStorage.getItem('user')).department
    this.role = JSON.parse(window.sessionStorage.getItem('user')).role
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
          if (this.detailMpp[i].position === jobPosition) {
            return false
          }
        }
        if (this.department === 'Marketing') {
          if (this.detailMpp[i].position === jobPosition) {
            return false
          }
        }
        if (this.department === 'HumanResource') {
          if (this.detailMpp[i].position === jobPosition) {
            return false
          }
        }
        if (this.department === 'TradePartnership') {
          if (this.detailMpp[i].position === jobPosition) {
            return false
          }
        }
        if (this.department === 'Operation') {
          if (this.detailMpp[i].position === jobPosition) {
            return false
          }
        }
        if (this.department === 'BusinessDevelopment') {
          if (this.detailMpp[i].position === jobPosition) {
            return false
          }
        }
        if (this.department === 'Finance') {
          if (this.detailMpp[i].position === jobPosition) {
            return false
          }
        }
        if (this.department === 'ProjectManagement') {
          if (this.detailMpp[i].position === jobPosition) {
            return false
          }
        }
        if (this.department === 'ProductManagement') {
          if (this.detailMpp[i].position === jobPosition) {
            return false
          }
        }
      }
      return true
    },
    sendMpp () {
      var self = this
      // ****
      // * idRequested = id Perquest
      // * detailMpp = array detail
      // * department = var department
      // ****
      var detailMppStringify = JSON.stringify(this.detailMpp)
      alert(detailMppStringify)
      self.$http.post('http://localhost:8080/mpp', {
        idRequested: self.idRequested,
        mppDetails: this.detailMpp}, (json) => {
          alert('Sukses Terkirim')
          localStorage.removeItem('detailMpp')
          window.localStorage.clear
          this.$router.go(0)
        })
    },
    clearLoc () {
      localStorage.removeItem('detailMpp')
      window.localStorage.clear
    },
    getIndexEditMpp (jobPosition) {
      for (var i = 0; i < this.detailMpp.length; i++) {
        if (this.detailMpp[i].position === jobPosition) {
          return i
        }
      }
    },
    editMppDetail (jobPosition) {
      this.getIndexEditMpp(jobPosition)
      this.$router.push({
        path: 'create-new/detail-edit',
        query: {indeksEditMpp: this.getIndexEditMpp(jobPosition), jobPosition: jobPosition}
      })
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
