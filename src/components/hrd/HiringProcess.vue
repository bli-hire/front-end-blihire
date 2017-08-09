<template>
  <div class="listContent col-md-10">
  <h2>Hiring Process</h2>
    <h4>Nama : Alfons Manggala</h4>
    <h4>Posisi : Jr. Accounting</h4>
    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#Interview1" v-bind:class="{'status-done': interview1 === true}">Interview 1</a>
    </div>
    <div id="Interview1" class="collapse">
        <label for="">Tanggal : </label>
        <input type="date" name="tanggal"><br/><br/>
        <label for="">PIC : </label><select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
        <button v-if="interview1 === false" v-on:click="interview1Process()" class="btn btn-primary">Send</button>
        <br>
        <br>
    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#Interview2" v-bind:class="{'status-done': interview2 === true}">Interview 2</a>
    </div>
    <div id="Interview2" class="collapse">
        <label for="">Tanggal : </label>
        <input type="date" name="tanggal"><br/><br/>
        <label for="">PIC : </label>
        <select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
        <button v-if="interview2 === false" v-on:click="interview2Process()" class="btn btn-primary">Send</button>
        <br>
        <br>
    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#TechnicalTest" v-bind:class="{'status-done': technicalTest === true}">Technical Test</a>
    </div>
    <br>
    <div id="TechnicalTest" class="collapse">
        <label for="">Tanggal : </label>
        <input type="date" name="tanggal"><br/><br/>
        <label for="">PIC : </label>
        <select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
        <div class="technicalQuestion">
          <label for="">Technical Test :</label><br>
          <label for="">Essay Question:</label><input type="number"><br>
          <label for="">Medium Question:</label><input type="number"><br>
          <label for="">Hard Question:</label><input type="number"><br>
          <label for="">Mutliple Choice:</label><input type="number"><br>
          <label for="">Essay</label><input type="number"><br>
        </div>
        <br>
        <button v-if="technicalTest === false" v-on:click="technicalProcess()" class="btn btn-primary">Send</button>
        <br>
        <br>
    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#PsychoTest" v-bind:class="{'status-done': psikoTest === true}">Psikotes</a>
    </div>
    <div id="PsychoTest" class="collapse">
        <label for="">Tanggal : </label><input type="date" name="tanggal"><br/><br/>
        <label for="">PIC : </label><select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
        <button v-if="psikoTest === false" v-on:click="psikoProcess()" class="btn btn-primary">Send</button>
        <br>
        <br>
     </div>

     <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#medicalCheckup" v-bind:class="{'status-done': medicalCheckup === true}">Medical Checkup</a>
    </div>

    <div id="medicalCheckup" class="collapse">
        <label for="">Tanggal : </label><input type="date" name="tanggal"><br/><br/>
        <label for="">PIC : </label><select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
        <button v-if="medicalCheckup === false" v-on:click="medicalProcess()" class="btn btn-primary">Send</button>
        <br>
        <br>
     </div>

     <div class="" v-if="interview1 === true && interview2 === true && technicalTest === true && psikoTest === true && medicalCheckup === true">
       <button v-if="accepted === false" v-on:click="acceptProcess()" class="btn btn-primary">Send</button>
     </div>

     <!-- <input type="submit" class="btn btn-primary" value="OK"/> -->
      <p class="hint"><i>*Notifikasi akan langsung terkirimkan ke email kandidat dan PIC yang terpilih</i></p>
  </div>
</template>

<script>
export default {
  name: 'hiring-process',
  props: ['department'],
  data () {
    return {
      interview1: false,
      interview2: false,
      technicalTest: false,
      psikoTest: false,
      medicalCheckup: false,
      accepted: false,
      detailCV: {}
    }
  },
  methods: {
    interview1Process () {
      var self = this
      var status = 'interview1'
      self.$http.post('http://localhost:8080/cv/updateStatusApplicant', {
        uid: this.$route.params.id,
        statusApplicant: status }, (json) => {
          this.sendEmail('Intervew  1 Blibli', 'Anda harus intervew 1')
        })
    },
    interview2Process () {
      var self = this
      var status = 'interview2'
      self.$http.post('http://localhost:8080/cv/updateStatusApplicant', {
        uid: this.$route.params.id,
        statusApplicant: status }, (json) => {
          this.sendEmail('Intervew  2 Blibli', 'Anda harus intervew 2')
        })
    },
    technicalProcess () {
      var self = this
      var status = 'technicalTest'
      self.$http.post('http://localhost:8080/cv/updateStatusApplicant', {
        uid: this.$route.params.id,
        statusApplicant: status }, (json) => {
          this.sendEmail('Technical Test Blibli', 'Anda harus tech test')
        })
    },
    psikoProcess () {
      var self = this
      var status = 'psikoTest'
      self.$http.post('http://localhost:8080/cv/updateStatusApplicant', {
        uid: this.$route.params.id,
        statusApplicant: status }, (json) => {
          this.sendEmail('Psycho Test Blibli', 'Anda harus Psycho test')
        })
    },
    medicalProcess () {
      var self = this
      var status = 'medicalCheckup'
      self.$http.post('http://localhost:8080/cv/updateStatusApplicant', {
        uid: this.$route.params.id,
        statusApplicant: status }, (json) => {
          this.sendEmail('Medical Checkup Blibli', 'Anda harus mengumpulkan medical checkup')
        })
    },
    acceptProcess () {
      var self = this
      var status = 'accepted'
      self.$http.post('http://localhost:8080/cv/acceptCandidate', {
        uid: this.$route.params.id,
        statusApplicant: status }, (json) => {
          this.sendEmail('SELAMAT', 'Selamat anda diterima')
        })
    },
    sendEmail (subjectEmail, message) {
      var self = this
      self.$http.post('http://localhost:8080/mail/send', {
        to: this.detailCV.emailAddress,
        subject: subjectEmail,
        text: message}, (json) => {
          window.location.href = this.$route.path
        })
    }
  },
  beforeMount () {
    this.$http.get('http://localhost:8080/cv/getCVByUid', {}, {
      headers: {
        'uid': this.$route.params.id
      }
    }).success(response => {
      this.detailCV = response.data[0]
      if (this.detailCV.applicantStatus === 'interview1') {
        this.interview1 = true
      }
      if (this.detailCV.applicantStatus === 'interview2') {
        this.interview1 = true
        this.interview2 = true
      }
      if (this.detailCV.applicantStatus === 'technicalTest') {
        this.interview1 = true
        this.interview2 = true
        this.technicalTest = true
      }
      if (this.detailCV.applicantStatus === 'psikoTest') {
        this.interview1 = true
        this.interview2 = true
        this.technicalTest = true
        this.psikoTest = true
      }
      if (this.detailCV.applicantStatus === 'medicalCheckup') {
        this.interview1 = true
        this.interview2 = true
        this.technicalTest = true
        this.psikoTest = true
        this.medicalCheckup = true
      }
      if (this.detailCV.applicantStatus === 'accepted') {
        this.interview1 = true
        this.interview2 = true
        this.technicalTest = true
        this.psikoTest = true
        this.medicalCheckup = true
        this.accepted = true
      }
      // alert(JSON.stringify(this.detailCV.bro[1]))
    })
  }
}
</script>

<style scoped>
label {
  margin-right: 0.4vw;
}
.technicalQuestion {
  text-align: center;
}
.status-done {
  background-color: #62f442;
}
</style>
