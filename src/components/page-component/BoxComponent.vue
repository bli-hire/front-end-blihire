<template>
  <div col-md-12>
    <div class="box-content">
      <h3>{{title}}</h3>
      <h4>{{message}}</h4>
      <h4>{{status}}</h4>
      <button class="btn btn-primary">
        <router-link :to="{ path: '/'+loginStatus+'/'+content+'/detail/'+id , params: { id: id }}">detail</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'box',
  data () {
    return {
      status: ''
    }
  },
  props: ['title', 'message', 'loginStatus', 'content', 'dataContent', 'id', 'statusAccept', 'statusReject'],
  beforeMount () {
    if (this.statusAccept === false && this.statusReject === false) {
      this.status = 'Not Yet Accepted'
    } else if (this.statusAccept === true && this.statusReject === false) {
      this.status = 'Accepted'
    } else if (this.statusAccept === false && this.statusReject === true) {
      this.status = 'Rejected'
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
