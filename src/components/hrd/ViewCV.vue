<template>
  <div class="listContent col-md-10">

  <h2 style="text-align:center;">Formulir Lamaran</h2>
  <br/>

  <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#position">Position Applied</a>
    </div>
    <div id="position" class="collapse">
    <table class="table table-bordered table-condensed">
        <tr>
            <th>Position Applied</th>
            <td>{{detailCV.jobTitle}}</td>
        </tr>
    </table>
  </div>
    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#data-pribadi">I. Data Pribadi</a>
    </div>
    <div id="data-pribadi" class="collapse ">
    <table class="table table-bordered table-condensed">
        <tr>
          <th>Nama lengkap</th>
          <td>{{detailCV.fullname}}</td>
        </tr>
      <tr>
        <th>Tempat Tanggal Lahir</th>
        <td>{{detailCV.placeDateOfBirth}}</td>
      </tr>

      <tr>
      <th>KTP</th>
      <td>{{detailCV.idCardNumber}}</td>
      </tr>

      <tr>
        <th>SIM C/A/B1</th>
        <td>{{detailCV.drivingLicense}}</td>
        </tr>

     <tr>
        <th>Email</th>
        <td>{{detailCV.email}}</td>
      </tr>

      <tr>
        <th>Linkedin</th>
        <td>{{detailCV.linkedIn}}</td>
      </tr>

      <tr>
        <th>Telepon Seluler</th>
        <td>{{detailCV.handphone}}</td>
      </tr>

      <tr>
        <th>Agama</th>
        <td>{{detailCV.religion}}</td>
      </tr>

      <tr>
        <th>Suku Bangsa</th>
        <td>{{detailCV.ethnicity}}</td>
      </tr>

      <tr>
        <th>Status Pernikahan</th>
        <td>{{detailCV.maritalStatus}}</td>
      </tr>

      <tr>
        <th>Alamat Saat ini</th>
        <td>{{detailCV.currentAddress}}</td>
      </tr>


      <tr>
        <th>Telepon Rumah</th>
        <td>{{detailCV.homePhone}}</td>
      </tr>

      <tr>
        <th>Kontak Darurat</th>
        <td>{{detailCV.emergencyCall}}</td>
      </tr>
      </table>
      </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#data-keluarga">II.Latar Belakang Keluarga</a>
    </div>
    <div id="data-keluarga" class="collapse ">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Hubungan</th>
            <th>Nama</th>
            <th>Tanggal Lahir</th>
            <th>Pendidikan Terakhir</th>
            <th>Pekerjaan</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <th>Ayah</th>
          <td>{{detailCV.fatherName}}</td>
          <td>{{detailCV.fatherBirthday}}</td>
          <td>{{detailCV.fatherLatestEducation}}</td>
          <td>{{detailCV.fatherCurrentJob}}</td>
        </tr>
        <tr>
          <th>Ibu</th>
          <td>{{detailCV.motherName}}</td>
          <td>{{detailCV.motherBirthday}}</td>
          <td>{{detailCV.motherLatestEducation}}</td>
          <td>{{detailCV.motherCurrentJob}}</td>
        </tr>
        <tr v-for="bro in detailCV.bro">
          <th rowspan="detailCV.bro.length" style="text-align: center;">Saudara</th>
          <td>{{bro.brothersName}}</td>
          <td>{{bro.brothersBirthday}}</td>
          <td>{{bro.brothersLastEducation}}</td>
          <td>{{bro.brothersCurrentJob}}</td>
        </tr>

        <tr>
          <th>Pasangan</th>
          <td>{{detailCV.spouseName}}</td>
          <td>{{detailCV.spousebirthDay}}</td>
          <td>{{detailCV.spouseLastEducation}}</td>
          <td>{{detailCV.spouseCurrentJob}}</td>
        </tr>

        <tr v-for="chil in detailCV.chil">
          <th>Anak</th>
          <td>{{chil.childrenName}}</td>
          <td>{{chil.childrenBirthday}}</td>
          <td>{{chil.childrenLastEducation}}</td>
          <td>{{chil.childrenCurrentJob}}</td>
        </tr>

        <tr>
          <th>Tanggungan selain anak dan istrri</th>
          <td colspan=5>Tidak</td>
        </tr>
      </tbody>
      </table>
    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#data-pendidikan">III. Latar Belakang Pendidikan dan Kemampuan Berbahasa</a>
    </div>
    <div id="data-pendidikan" class="collapse ">
      <table class="table table-bordered">
      <thead>
        <tr>
            <th>Pendidikan</th>
            <th>Sekolah/Perguruan Tinggi</th>
            <th>Jurusan</th>
            <th>Kota</th>
            <th>Periode</th>
            <th>IPK</th>
          </tr>
        </thead>
          <tbody>
            <tr v-for="school in detailCV.school">
              <td>SLTA</td>
              <td>{{school.schoolName}}</td>
              <td>{{school.major}}</td>
              <td>{{school.city}}</td>
              <td>{{school.periode}}</td>
              <td>{{school.gpa}}</td>
            </tr>
          </tbody>
        </tr>
      </table>
      <p>Apakah alasan anda memilih jurusan pada Perguruan Tinggi tersebut?</p>
      <p><i><strong>{{detailCV.reasonMajor}}</strong></i></p>
      <p>Apa judul karya tulis ilmiah/skripsi/thesis Anda?</p>
      <p><i><strong>{{detailCV.titleThesis}}</strong></i></p><br/>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Nama Kursus atau Pelatihan</th>
            <th>Penyelenggara</th>
            <th>Tahun</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{detailCV.nonFrmlCrs[0].nameOfCourse}}</td>
            <td>{{detailCV.nonFrmlCrs[0].organizer}}</td>
            <td>{{detailCV.nonFrmlCrs[0].year}}</td>
            <td>{{detailCV.nonFrmlCrs[0].notes}}</td>
          </tr>
        </tbody>
      </table>

        <table class="table table-bordered">
        <thead>
          <tr>
            <th>Nama Organisasi</th>
            <th>Bidang</th>
            <th>Periode Keikutsertaan</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{detailCV.socialact[0].nameOrganization}}</td>
            <td>{{detailCV.socialact[0].fieldOfOrganization}}</td>
            <td>{{detailCV.socialact[0].attendancePeriod}}</td>
            <td>{{detailCV.socialact[0].notes}}</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Penghargaan</th>
            <th>Tahun</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{detailCV.achievements[0].achievement}}</td>
            <td>{{detailCV.achievements[0].year}}</td>
            <td>{{detailCV.achievements[0].notes}}</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Bahasa Asing yang Dikuasai</th>
            <th>Lisan</th>
            <th>Tulisan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{detailCV.language[0].nameOfLanguage}}</td>
            <td>{{detailCV.language[0].spokenLanguage}}</td>
            <td>{{detailCV.language[0].writtenLanguage}}</td>
          </tr>
        </tbody>
      </table>

    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#data-pekerjaan">IV. Pengalaman Kerja</a>
    </div>
    <div id="data-pekerjaan" class="collapse ">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Nama Perusahaa</th>
            <td>{{detailCV.workExp[0].companyName}}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Bidang Usaha</th>
            <td>{{detailCV.workExp[0].companyField}}</td>
          </tr>
          <tr>
            <th>Jabatan</th>
            <td>{{detailCV.workExp[0].position}}</td>
          </tr>
          <tr>
            <th>Periode</th>
            <td>{{detailCV.workExp[0].period}}</td>
          </tr>
          <tr>
            <th>Alasan Berhenti</th>
            <td>{{detailCV.workExp[0].reasonToLeave}}</td>
          </tr>
          <tr>
            <th colspan=2 style="text-align:center">Referensi</th>
          </tr>
          <tr>
            <th>Nama</th>
            <td>{{detailCV.workExp[0].referenceName}}</td>
          </tr>
          <tr>
            <th>Jabatan</th>
            <td>{{detailCV.workExp[0].referencePosition}}</td>
          </tr>
          <tr>
            <th>No Telepon</th>
            <td>{{detailCV.workExp[0].referencePhoneNumber}}</td>
          </tr>
          <tr>
            <td colspan=2 rowspan=5 >{{detailCV.workExp[0].organizationalChart}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#data-konsep">V. Minat dan Konsep Pribadi</a>
    </div>
    <div id="data-konsep" class="collapse ">
      <p>Mengapa Anda berminat bekerja di PT. Global Digital Niaga(blibli.com) ?</p>
      <p><strong><i>{{detailCV.reasonInterestedInGDN}}</i></strong></p><br/>
      <p>Mengapa Anda ingin bekerja pada jabatan yang Anda lamar?</p>
      <p><strong><i>{{detailCV.reasonApplyOnThatPosition}}</i></strong></p><br/>
      <p>Faktor apa yang akan mendorong Anda untuk bertahan dalam suatu pekerjaan?</p>
      <p><strong><i>{{detailCV.factorEncourageYouOnThatJob}}</i></strong></p><br/>
      <p>Lingkungan kerja seperti apa yang Anda harapkan?</p>
      <p><strong><i>{{detailCV.kindOfEnvirontment}}</i></strong></p><br/>
      <p>Tuliskan value hidup anda!</p>
      <p><strong><i>{{detailCV.lifeValue}}</i></strong></p><br/>
      <p>Sebutkan keterampilan khusus yang Anda miliki!</p>
      <p><strong><i>{{detailCV.spesificSkill}}</i></strong></p><br/>
      <p>Sebutkan hobi/kegemaran Anda!</p>
      <p><strong><i>{{detailCV.hobbies}}</i></strong></p><br/>
      <p>Deskripsikan informasi lain mengenai diri Anda pada kolom ini!</p>
      <p><strong><i>{{detailCV.describeAboutYou}}</i></strong></p><br/>
    </div>

    <div class="list-group">
      <a class="list-group-item" data-toggle="collapse" href="#data-lain">VI. Lain-Lain</a>
    </div>
    <div id="data-lain" class="collapse ">
      <p>Dimana Anda memperoleh informasi mengenai lowongan pekerjaan di PT. Global Digital Niaga(blibli.com)?</p>
      <p><strong><i>{{detailCV.placeGetInformationGDN}}</i></strong></p><br/>
      <p>Apakah Anda memiliki keluarga, kerabat, atau teman yang bekerja di PT. Global Digital Niaga (blibli.com)?</p>
      <p><strong><i>{{detailCV.relativeWorkingOnGDN}}</i></strong></p><br/>
      <p>Apakah Anda pernah melamar ke PT. Global Digital Niaga (blibli.com) sebelumnya?</p>
      <p><strong><i>{{detailCV.haveAppliedOnGDN}}</i></strong></p><br/>
      <p>Apakah Anda memiliki pekerjaan sampingan/part time? Sebutkan!</p>
      <p><strong><i>{{detailCV.havePartTimejob}}</i></strong></p><br/>
      <p>Jika Anda diterima, kapan Anda dapat mulai bekerja ?</p>
      <p><strong><i>{{detailCV.timeStartWork}}</i></strong></p><br/>
    </div>

      <label>Comment</label>
      <textarea name="Text1" cols="140" rows="8" class="form-control" ></textarea>
       <br/>

    <button type="submit" class="btn btn-primary" name="">Accept CV</button>

    <button type="reset" class="btn btn-warning" name="">Reject</button>

  </div>
</template>

<script>
export default {
  name: 'view-cv',
  props: ['department'],
  data () {
    return {
      detailCV: {}
    }
  },
  beforeMount () {
    this.$http.get('http://localhost:8080/cv/getCVByUid', {}, {
      headers: {
        'uid': this.$route.params.id
      }
    }).success(response => {
      this.detailCV = response.data[0]
      // alert(JSON.stringify(this.detailCV.bro[1]))
    })
  }
}
</script>

<style scoped>
.listContent {
}
</style>
