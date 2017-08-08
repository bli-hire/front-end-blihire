<template>
  <div>
    <div v-if="content === 'multipleChoice'" class="listContent col-md-12">
      <div class="form-group">
        <h2>Create multiple choice question</h2>
        <br>
        <label for="inputQuestion">Your Question</label>
        <textarea cols="30" rows="3" class="form-control" id="inputQuestion" type="text" placeholder="Your question's problem"></textarea>
        <br>
        <label for="">Department</label>
        <select name="" id="" class="form-control">
          <option value="">Dep A</option>
        </select>
        <br>
        <label for="">Dificulty</label>
        <select name="" id="" class="form-control">
          <option value="">Easy</option>
          <option value="">Medium</option>
          <option value="">Hard</option>
        </select>
        <br>
        <div class="multipleChoice">
          <label for="">Choice A</label>
          <textarea class="form-control" name="problemQuestion" id="" cols="30" rows="6"></textarea>  
          <br>
          <label for="">Choice B</label>
          <textarea class="form-control" name="problemQuestion" id="" cols="30" rows="6"></textarea>  
          <br>
          <label for="">Choice C</label>
          <textarea class="form-control" name="problemQuestion" id="" cols="30" rows="6"></textarea>  
          <br>
          <label for="">Choice D</label>
          <textarea class="form-control" name="problemQuestion" id="" cols="30" rows="6"></textarea> 
        </div>
        <br>
        <label for="">Right Answer</label>
        <select class="form-control" name="" id="">
          <option value="">Choice A</option>
          <option value="">Choice B</option>
          <option value="">Choice C</option>
          <option value="">Choice D</option>
        </select>
        <br>
        <label for="">Generated</label>
        <select class="form-control" name="" id="">
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
        <br>
        <button class="btn btn-primary pull-right">Create</button>
        <button class="btn btn-warning pull-right">Reset</button>
      </div>
    </div>

    <div v-if="content === 'essay'" class="listContent col-md-12">
      <h2>Create essay question</h2>
      <br>
      <label for="inputQuestion">Your Question</label>
      <textarea cols="30" rows="3" class="form-control" id="inputQuestion" type="text" placeholder="Your question's problem"></textarea>
      <br>
      <label for="">Department</label>
      <select name="" id="" class="form-control">
        <option value="">Dep A</option>
      </select>
      <br>
      <label for="">Dificulty</label>
      <select name="" id="" class="form-control">
        <option value="">Easy</option>
        <option value="">Medium</option>
        <option value="">Hard</option>
      </select>
      <br>
      <label for="">Generated</label>
      <select class="form-control" name="" id="">
        <option value="">No</option>
        <option value="">Yes</option>
      </select>
      <br>
      <button class="btn btn-primary pull-right">Create</button>
      <button class="btn btn-warning pull-right">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-form-bank-quiz',
  data () {
    return {
    }
  },
  props: ['content', 'edit'],
  beforeMount () {
  },
  methods: {
  }
}
</script>

<style scoped>
.listContent{
  margin-top:55px;
  margin-left:-59px;
  padding-left: 240px;
  text-align: left;
  padding-bottom: 5vh;
}
h2{
  text-align: left;
}
.multipleChoice {
}
.pull-right {
  margin-right: 1vw;
}
</style>
