<template>
  <div class="detail-box col-md-12">
    <h3>{{title}}</h3>
    <p>Position : {{position}}</p>
    <p>Number : {{number}}</p>
    <p>Reason : {{reason}}</p>
    <p>Main Responsibilty : {{main-responsibilty}}</p>
    <h3>Qualification</h3>
    <p>Education : {{education}}</p>
    <p>Knowledge Skill : {{knowledge-skill}}</p>
    <p>Experience : {{experience}}</p>
    <p>Employement Status : {{employement-status}}</p>
    <h3>Expected to Join in {{year}}</h3>
    <table class="table">
          <tbody><tr>
            <th>January</th>
            <th>February</th>
            <th>March</th>
            <th>April</th>
            <th>May</th>
            <th>June</th>
            <th>July</th>
            <th>August</th>
            <th>September</th>
            <th>October</th>
            <th>November</th>
            <th>December</th>
          </tr>
          <tr>
            <td>{{month-1}}</td>
            <td>{{month-2}}</td>
            <td>{{month-3}}</td>
            <td>{{month-4}}</td>
            <td>{{month-5}}</td>
            <td>{{month-6}}</td>
            <td>{{month-7}}</td>
            <td>{{month-8}}</td>
            <td>{{month-9}}</td>
            <td>{{month-10}}</td>
            <td>{{month-11}}</td>
            <td>{{month-12}}</td>
          </tr>
        </tbody>
      </table>
      <p>Computer Needed : {{computers}}</p>
      <p>Spesification : {{spesification}}</p>
      <h3>Comment :</h3>
      <textarea name="Text1" cols="140" rows="8"></textarea>
  </div>
</template>

<script>
export default{
  name: 'mpp-detail',
  props: ['title', 'position', 'number', 'reason', 'main-responsibilty', 'education', 'experience', 'knowledge-skill', 'employement-status', 'month-1', 'month-2', 'month-3', 'month-4', 'month-5', 'month-6', 'month-7', 'month-8', 'month-9', 'month-10', 'month-11', 'month-12', 'computers', 'spesification', 'year'
  ]
}
</script>

<style scooped>
</style>
