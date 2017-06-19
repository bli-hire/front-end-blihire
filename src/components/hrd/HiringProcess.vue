<template>
  <div class="listContent col-md-12">
  <h2>Hiring Process</h2>
    <h4>Nama : Alfons Manggala</h4>
    <h4>Posisi : Jr. Accounting</h4>
    <form class="form-group" method="POST">
    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#Interview1">Interview 1</a>
    </div>
    <div id="Interview1" class="collapse container">
        Tanggal : <input type="date" name="tanggal"><br/><br/>
        PIC : <select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#Interview2">Interview 2</a>
    </div>
    <div id="Interview2" class="collapse container">
        Tanggal : <input type="date" name="tanggal"><br/><br/>
        PIC : <select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#TechnicalTest">Technical Test</a>
    </div>
    <div id="TechnicalTest" class="collapse container">
        Tanggal : <input type="date" name="tanggal"><br/><br/>
        PIC : <select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#PsychoTest">Psikotes</a>
    </div>
    <div id="PsychoTest" class="collapse container">
        Tanggal : <input type="date" name="tanggal"><br/><br/>
        PIC : <select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
     </div>

     <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#medicalCheckup">Medical Checkup</a>
    </div>
    <div id="medicalCheckup" class="collapse container">
        Tanggal : <input type="date" name="tanggal"><br/><br/>
        PIC : <select id="listofHR">
          <option>Chandra Arko</option>
          <option>Clara</option>
          <option>Eunike</option>
        </select><br/><br/>
     </div>

     <input type="submit" class="btn btn-primary" value="OK"/>
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
</style>
