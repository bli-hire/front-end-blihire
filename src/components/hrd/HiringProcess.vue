<template>
  <div class="listContent col-md-10">
  <h2>Hiring Process</h2>
    <h4>Nama : Alfons Manggala</h4>
    <h4>Posisi : Jr. Accounting</h4>
    <form class="form-group" method="POST">
    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#Interview1">Interview 1</a>
    </div>
    <div id="Interview1" class="collapse">
        <label for="">Tanggal : </label>
        <input type="date" name="tanggal"><br/><br/>
        <label for="">PIC : </label><select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
        <button class="btn btn-primary">Send</button>
        <br>
        <br>
    </div>
    
    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#Interview2">Interview 2</a>
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
        <button class="btn btn-primary">Send</button>
        <br>
        <br>
    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#TechnicalTest">Technical Test</a>
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
        <button class="btn btn-primary">Send</button>
        <br>
        <br>
    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#PsychoTest">Psikotes</a>
    </div>
    <div id="PsychoTest" class="collapse">
        <label for="">Tanggal : </label><input type="date" name="tanggal"><br/><br/>
        <label for="">PIC : </label><select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
        <button class="btn btn-primary">Send</button>
        <br>
        <br>
     </div>

     <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#medicalCheckup">Medical Checkup</a>
    </div>

    <div id="medicalCheckup" class="collapse">
        <label for="">Tanggal : </label><input type="date" name="tanggal"><br/><br/>
        <label for="">PIC : </label><select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
        <button class="btn btn-primary">Send</button>
        <br>
        <br>
     </div>

     <!-- <input type="submit" class="btn btn-primary" value="OK"/> -->
      <p class="hint"><i>*Notifikasi akan langsung terkirimkan ke email kandidat dan PIC yang terpilih</i></p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'hiring-process',
  props: ['department']
}
</script>

<style scoped>
label {
  margin-right: 0.4vw;
}
.technicalQuestion {
  text-align: center;
}
</style>
