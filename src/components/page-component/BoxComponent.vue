<template>
  <div col-md-12>
    <div class="box-content">
      <div v-if="docType === 'fpk'">
        <h3>{{title}}</h3>
        <h4>{{message}}</h4>
        <h5>Head Approve : {{statusApproveHead}}</h5>
        <h5>CEO Approve : {{statusApproveCeo}}</h5>
        <h5>HRD Accept : {{status}}</h5>
        <button class="btn btn-primary">
          <router-link :to="{ path: '/'+loginStatus+'/'+content+'/detail/'+id , params: { id: id }, query: { ceoApprove: statusCeo, headApprove: statusHead, confirmToPublish: statusAccept , statusPublish: statusReject}}">Detail</router-link>
        </button>
      </div>
      <div v-if="docType === 'mpp'">
        <h3>{{title}}</h3>
        <h4>Requested By : {{requestedBy}}</h4>
        <h5>Mpp Status : {{mppStatus}}</h5>
        <h5 v-if="createdDateData != null">Created date: {{createdDateData}}</h5>
        <h5 v-if="published === true">{{publishedBy}}</h5>
        <button class="btn btn-primary">
          <router-link :to="{ path: '/'+loginStatus+'/'+content+'/detail/'+id , params: { id: id }, query: { ceoApprove: statusCeo, headApprove: statusHead, accept: statusAccept }}">Detail</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'box',
  data () {
    return {
      status: '',
      statusApproveCeo: '',
      statusApproveHead: '',
      statusCeoData: '',
      createdDateData: ''
    }
  },
  props: ['title', 'message', 'loginStatus', 'content', 'dataContent', 'id', 'statusAccept', 'statusReject', 'statusCeo', 'statusHead', 'docType', 'requestedBy', 'publishedBy', 'published', 'createdDate', 'mppStatus'],
  beforeMount () {
    this.createdDateData = this.createdDate
    if (this.statusAccept === false && this.statusReject === false) {
      this.status = 'Not Yet Accepted'
    } else if (this.statusAccept === true && this.statusReject === false) {
      this.status = 'Accepted'
    } else if (this.statusAccept === false && this.statusReject === true) {
      this.status = 'Rejected'
    }
    if (this.statusCeo === true) {
      this.statusApproveCeo = 'CEO already Approved'
    } else if (this.statusCeo === false) {
      this.statusApproveCeo = 'CEO not yet approve'
    }
    if (this.statusHead === true) {
      this.statusApproveHead = 'Head already Approved'
    } else if (this.statusHead === false) {
      this.statusApproveHead = 'Head not yet approve'
    }
    if (this.docType === 'fpk') {
      if (this.statusAccept === false && this.statusReject === false) {
        this.status = 'Not Yet Accepted'
      } else if (this.statusAccept === true && this.statusReject === true) {
        this.status = 'Accepted'
      } else if (this.statusAccept === true && this.statusReject === false) {
        this.status = 'Rejected'
      }
      if (this.statusCeo === true) {
        this.statusApproveCeo = 'CEO already Approved'
      } else if (this.statusCeo === false) {
        this.statusApproveCeo = 'CEO not yet approve'
      }
      if (this.statusHead === true) {
        this.statusApproveHead = 'Head already Approved'
      } else if (this.statusHead === false) {
        this.statusApproveHead = 'Head not yet approve'
      }
    } else if (this.docType === 'mpp') {
      if (this.statusAccept === false && this.statusReject === false) {
        this.statusCeoData = 'Not Yet Accepted'
      } else if (this.statusAccept === true && this.statusReject === false) {
        this.statusCeoData = 'Accepted'
      } else if (this.statusAccept === false && this.statusReject === true) {
        this.statusCeoData = 'Rejected'
      }
    }
  }
}
</script>

<style scoped>
.box-content {
    background-color: white;
    position: relative;
    box-shadow: 1px 1px 1px #888888;
    margin-left: 150px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-top: 5px;
    text-align: left;
    padding-left: 10px;
    padding-bottom: 10px;
    z-index: 5;
  }
</style>
