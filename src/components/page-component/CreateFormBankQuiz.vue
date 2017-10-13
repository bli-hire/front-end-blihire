<template>
  <div>
    <div v-if="content === 'multipleChoice'" class="listContent col-md-12">
      <div class="form-group">
        <h2>Create multiple choice question</h2>
        <br>
        <label for="inputQuestion">Your Question</label>
        <textarea cols="30" rows="3" class="form-control" id="inputQuestion" type="text" placeholder="Your question's problem" v-model="problem"></textarea>
        <br>
        <label for="">Department</label>
        <select name="" id="" class="form-control" v-model="department">
          <option value="HumanResource">Human Resource</option>
          <option value="Marketing">Marketing</option>
          <option value="TradePartnership">Trade Partnership</option>
          <option value="Technology">Technology</option>
          <option value="BusinessDevelopment">Business Development</option>
          <option value="Finance">Finance</option>
          <option value="ProjectManagement">Product Management</option>
          <option value="ProductManagement">Product Management</option>
          <option value="Operation">Operation</option>
        </select>
        <br>
        <label for="">Difficulty</label>
        <select name="" id="" class="form-control" v-model="difficulty">
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <br>
        <div class="multipleChoice">
          <label for="">Choice A</label>
          <textarea class="form-control" name="problemQuestion" id="" cols="30" rows="6" v-model="choiceA"></textarea>  
          <br>
          <label for="">Choice B</label>
          <textarea class="form-control" name="problemQuestion" id="" cols="30" rows="6" v-model="choiceB"></textarea>  
          <br>
          <label for="">Choice C</label>
          <textarea class="form-control" name="problemQuestion" id="" cols="30" rows="6" v-model="choiceC"></textarea>  
          <br>
          <label for="">Choice D</label>
          <textarea class="form-control" name="problemQuestion" id="" cols="30" rows="6" v-model="choiceD"></textarea> 
        </div>
        <br>
        <label for="">Right Answer</label>
        <select class="form-control" name="" id="" v-model="answer">
          <option v-bind:value="choiceA">{{choiceA}}</option>
          <option v-bind:value="choiceB">{{choiceB}}</option>
          <option v-bind:value="choiceC">{{choiceC}}</option>
          <option v-bind:value="choiceD">{{choiceD}}</option>
        </select>
        <br>
        <button class="btn btn-primary pull-right" v-on:click="createAnswer()">Create</button>
        <button class="btn btn-warning pull-right">Reset</button>
      </div>
    </div>

    <div v-if="content === 'essay'" class="listContent col-md-12">
      <h2>Create essay question</h2>
      <br>
      <label for="inputQuestion">Your Question</label>
      <textarea cols="30" rows="3" class="form-control" id="inputQuestion" type="text" placeholder="Your question's problem" v-model="problem"></textarea>
      <br>
      <label for="">Department</label>
      <select name="" id="" class="form-control" v-model="department">
        <option value="HumanResource">Human Resource</option>
        <option value="Marketing">Marketing</option>
        <option value="TradePartnership">Trade Partnership</option>
        <option value="Technology">Technology</option>
        <option value="BusinessDevelopment">Business Development</option>
        <option value="Finance">Finance</option>
        <option value="ProjectManagement">Product Management</option>
        <option value="ProductManagement">Product Management</option>
        <option value="Operation">Operation</option>
      </select>
      <br>
      <label for="">Difficulty</label>
      <select name="" id="" class="form-control" v-model="difficulty">
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <br>
      <button class="btn btn-primary pull-right" v-on:click="createAnswer()">Create</button>
      <button class="btn btn-warning pull-right">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-form-bank-quiz',
  data () {
    return {
      problem: '',
      answer: '',
      choiceA: '',
      choiceB: '',
      choiceC: '',
      choiceD: '',
      department: '',
      difficulty: ''
    }
  },
  props: ['content', 'edit'],
  beforeMount () {

  },
  methods: {
    createAnswer () {
      if (this.content === 'multipleChoice') {
        if (this.validateFormMultiple() === false) {
          return
        }
        this.$http.post('http://localhost:8080/online-test/multiple-choices/add-problem', {
          'department': this.department,
          'problem': this.problem,
          'answerA': this.choiceA,
          'answerB': this.choiceB,
          'answerC': this.choiceC,
          'answerD': this.choiceD,
          'realAnswer': this.answer,
          'difficulty': this.difficulty
        }).then(response => {
          alert('Success')
          this.$router.push('/hrd/bank/quiz')
        })
      } else if (this.content === 'essay') {
        if (this.validateFormEssay() === false) {
          return
        }
        this.$http.post('http://localhost:8080/online-test/essay/add-problem', {
          'department': this.department,
          'problem': this.problem,
          'answer': this.answer,
          'difficulty': this.difficulty
        }).then(response => {
          alert('Success')
          this.$router.push('/hrd/bank/quiz')
        })
      }
    },
    validateFormMultiple () {
      if (
        this.department === '' || this.problem === '' || this.choiceA === '' || this.answer === '' ||
        this.choiceB === '' || this.choiceC === '' || this.choiceD === '' || this.difficulty === '') {
        alert('Please Fill the blank')
        return false
      }
      return true
    },
    validateFormEssay () {
      if (this.department === '' || this.problem === '' || this.difficulty === '') {
        alert('Please Fill the blank')
        return false
      }
      return true
    }
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
