<template>
  <div id="Navbar">
    <nav class="navbar navbar-default top-navbar navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#sideNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">BliHire</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li v-if="loginStatus === 'ceo'" v-on:click="chStatusToActive(); chStatePageToFpk(); setActive('ceo/fpk'); setActiveSide('ceo/fpk');" :class="{active: isActive('ceo/fpk')}"><router-link to="/ceo/fpk">FPK</router-link></li>
            <li v-if="loginStatus === 'ceo'" v-on:click="chStatusToActive(); chStatePageToMpp(); setActive('ceo/mpp'); setActiveSide('ceo/mpp');" :class="{active: isActive('ceo/mpp')}"><router-link to="/ceo/mpp">MPP</router-link></li>
             <li v-if="loginStatus === 'ceo'" v-on:click="chStatusToAccepted(); chStatePageToHrdAcceptedFpk(); chContentRequestToFpk(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('ceo/accepted/fpk');" :class="{active: isActive('ceo/accepted/fpk')}"><router-link to="/ceo/accepted/fpk/human-resource">Accepted FPK</router-link></li>
            <li v-if="loginStatus === 'ceo'" v-on:click="chStatusToAccepted(); chStatePageToHrdAcceptedMpp(); chContentRequestToMpp(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('ceo/accepted/mpp');" :class="{active: isActive('ceo/accepted/mpp')}"><router-link to="/ceo/accepted/mpp/human-resource">Accepted MPP</router-link></li>
            <li v-if="loginStatus === 'ceo'" v-on:click="chStatusToRejected(); chStatePageToHrdRejectedFpk(); chContentRequestToFpk(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('ceo/rejected/fpk');" :class="{active: isActive('ceo/rejected/fpk')}"><router-link to="/ceo/rejected/fpk/human-resource">Rejected FPK</router-link></li>
            <li v-if="loginStatus === 'ceo'" v-on:click="chStatusToRejected(); chStatePageToHrdRejectedMpp(); chContentRequestToMpp(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('ceo/rejected/mpp');" :class="{active: isActive('ceo/rejected/mpp')}"><router-link to="/ceo/rejected/mpp/human-resource">Rejected MPP</router-link></li>
            <li v-if="loginStatus === 'ceo'" v-on:click="chStatusToPublished(); chStatePageToHrdPublishedFpk(); chContentRequestToFpk(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('ceo/published/fpk');" :class="{active: isActive('ceo/published/fpk')}"><router-link to="/ceo/published/fpk/human-resource">Published FPK</router-link></li>
            <li v-if="loginStatus === 'ceo'" v-on:click="chStatusToPublished(); chStatePageToHrdPublishedMpp(); chContentRequestToMpp(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('ceo/published/mpp');" :class="{active: isActive('ceo/published/mpp')}"><router-link to="/ceo/published/mpp/human-resource">Published MPP</router-link></li>

            <li v-if="loginStatus === 'department'" v-on:click="chStatePageToFpk(); setActive('department/fpk'); setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActive('department/fpk')}"><router-link to="/department/fpk/dashboard">FPK</router-link></li>
            <li v-if="loginStatus === 'department' && role === 'DepartmentHead'" v-on:click="chStatePageToMpp(); setActive('department/mpp'); setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActive('department/mpp')}"><router-link to="/department/mpp/dashboard">MPP</router-link></li>
            <li v-if="loginStatus === 'department' && role === 'DepartmentHead'" v-on:click="chStatePagetToFpkProcess(); setActive('department/fpk/process'); setActiveSide({loginStatus}+'/'+{statePage}+'/accept');" :class="{active: isActive('department/fpk/process')}"><router-link to="/department/fpk/process/accept">Accept FPK</router-link></li>

            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToFpk(); setActive('hrd/fpk'); setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActive('hrd/fpk')}"><router-link to="/hrd/fpk/dashboard">FPK</router-link></li>
            <li v-if="loginStatus === 'hrd' && role === 'HeadHR'" v-on:click="chStatePageToMpp(); setActive('hrd/mpp'); setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActive('hrd/mpp')}"><router-link to="/hrd/mpp/dashboard">MPP</router-link></li>
            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToHrdRequestedFpk(); chContentRequestToFpk(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('hrd/requested/fpk');" :class="{active: isActive('hrd/requested/fpk')}"><router-link to="/hrd/requested/fpk/human-resource">Requested FPK</router-link></li>
            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToHrdRequestedMpp(); chContentRequestToMpp(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('hrd/requested/mpp');" :class="{active: isActive('hrd/requested/mpp')}"><router-link to="/hrd/requested/mpp/human-resource">Requested MPP</router-link></li>

             <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToHrdPublishedFpk(); chContentRequestToFpk(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('hrd/published/fpk');" :class="{active: isActive('hrd/published/fpk')}"><router-link to="/hrd/published/fpk/human-resource">Published FPK</router-link></li>
            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToHrdPublishedMpp(); chContentRequestToMpp(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('hrd/published/mpp');" :class="{active: isActive('hrd/published/mpp')}"><router-link to="/hrd/published/mpp/human-resource">Published MPP</router-link></li>

            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToHrdCandidates(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('hrd/candidates');" :class="{active: isActive('hrd/candidates')}"><router-link to="/hrd/candidates/human-resource">Candidates</router-link></li>

            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToHrdQuiz(); setActive('hrd/bank/quiz'); setActiveSide('hrd/bank/quiz');" :class="{active: isActive('hrd/bank/quiz')}"><router-link to="/hrd/bank/quiz">Bank Quiz</router-link></li>

          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li
              class="dropdown-toggle"
              data-toggle="dropdown"
              :class="{active: isActive('notification'), open: isNotifActive('notification')}"
              v-on:click="setNotifActive('notification')">
              <router-link to="">
                <span class="glyphicon glyphicon-comment"></span>
              </router-link>
              <ul class="dropdown-menu">
                <li><p>No FPK/MPP request</p></li>
              </ul>
            </li>
            <li :class="{active: isActive('user')}"><router-link to=""><span class="glyphicon glyphicon-user"> {{username}}</span></router-link></li>
            <!-- <li :class="{active: isActive('login')}"><router-link to="/login"><span class="glyphicon glyphicon-log-out"></span></router-link></li> -->
            <!-- <li class="" v-if="check() != null" > -->
            <li class="" v-on:click="logout ()">

                <router-link to="/login"> <span class="glyphicon glyphicon-log-out"></span></router-link>

            </li >

          </ul>
        </div>
      </div>
    </nav>
      <div class="collapse width navbar-collapse" id="sideNavbar" v-bind:style="navbarLeft">
      <div class="navbar navbar-inverse navbar-fixed-left">
        <ul class="nav navbar-nav">
            <!-- <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/human-resource')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/human-resource'">Human Resource</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/marketing');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/marketing')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/marketing'">Marketing</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/trade-partnership'">Trade Partnership</router-link></li>
            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/operation');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/operation')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/operation'">Operation</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/technology');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/technology')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/technology'">Technology</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/business-development');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/business-development')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/business-development'">Business Development</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/finance');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/finance')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/finance'">Finance</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/project-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/project-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/project-management'">Project Management</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/product-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/product-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/product-management'">Product Management</router-link></li>     -->

            <li v-if="loginStatus === 'ceo' && (statePage === 'fpk' || statePage === 'mpp' || statePage === 'accepted/fpk' || statePage === 'accepted/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp' || statePage === 'rejected/fpk' || statePage === 'rejected/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/human-resource')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/human-resource'">Human Resource</router-link></li>

            <li v-if="loginStatus === 'ceo' && (statePage === 'fpk' || statePage === 'mpp' || statePage === 'accepted/fpk' || statePage === 'accepted/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp' || statePage === 'rejected/fpk' || statePage === 'rejected/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/marketing');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/marketing')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/marketing'">Marketing</router-link></li>

            <li v-if="loginStatus === 'ceo' && (statePage === 'fpk' || statePage === 'mpp' || statePage === 'accepted/fpk' || statePage === 'accepted/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp' || statePage === 'rejected/fpk' || statePage === 'rejected/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/trade-partnership'">Trade Partnership</router-link></li>

            <li v-if="loginStatus === 'ceo' && (statePage === 'fpk' || statePage === 'mpp' || statePage === 'accepted/fpk' || statePage === 'accepted/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp' || statePage === 'rejected/fpk' || statePage === 'rejected/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/operation');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/operation')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/operation'">Operation</router-link></li>

            <li v-if="loginStatus === 'ceo' && (statePage === 'fpk' || statePage === 'mpp' || statePage === 'accepted/fpk' || statePage === 'accepted/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp' || statePage === 'rejected/fpk' || statePage === 'rejected/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/technology');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/technology')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/technology'">Technology</router-link></li>

            <li v-if="loginStatus === 'ceo' && (statePage === 'fpk' || statePage === 'mpp' || statePage === 'accepted/fpk' || statePage === 'accepted/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp' || statePage === 'rejected/fpk' || statePage === 'rejected/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/business-development');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/business-development')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/business-development'">Business Development</router-link></li>

            <li v-if="loginStatus === 'ceo' && (statePage === 'fpk' || statePage === 'mpp' || statePage === 'accepted/fpk' || statePage === 'accepted/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp' || statePage === 'rejected/fpk' || statePage === 'rejected/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/finance');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/finance')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/finance'">Finance</router-link></li>

            <li v-if="loginStatus === 'ceo' && (statePage === 'fpk' || statePage === 'mpp' || statePage === 'accepted/fpk' || statePage === 'accepted/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp' || statePage === 'rejected/fpk' || statePage === 'rejected/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/project-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/project-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/project-management'">Project Management</router-link></li>

            <li v-if="loginStatus === 'ceo' && (statePage === 'fpk' || statePage === 'mpp' || statePage === 'accepted/fpk' || statePage === 'accepted/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp' || statePage === 'rejected/fpk' || statePage === 'rejected/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/product-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/product-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/product-management'">Product Management</router-link></li>

            <!-------------------------------------------------->

            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/human-resource')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/human-resource'">Human Resource</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/marketing');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/marketing')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/marketing'">Marketing</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/trade-partnership'">Trade Partnership</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/operation');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/operation')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/operation'">Operation</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/technology');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/technology')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/technology'">Technology</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/business-development');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/business-development')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/business-development'">Business Development</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/finance');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/finance')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/finance'">Finance</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/project-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/project-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/project-management'">Project Management</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/product-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/product-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/product-management'">Product Management</router-link></li>

            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/human-resource')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/human-resource'">Human Resource</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/marketing');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/marketing')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/marketing'">Marketing</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/trade-partnership'">Trade Partnership</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/operation');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/operation')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/operation'">Operation</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/technology');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/technology')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/technology'">Technology</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/business-development');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/business-development')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/business-development'">Business Development</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/finance');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/finance')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/finance'">Finance</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/project-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/project-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/project-management'">Project Management</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/product-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/product-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/product-management'">Product Management</router-link></li>

            <li v-if="loginStatus === 'hrd' && (statePage === 'fpk' || statePage === 'mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/dashboard')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/dashboard'">Dashboard</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'fpk' || statePage === 'mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/create-new');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/create-new')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/create-new'">Create New</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'fpk' || statePage === 'mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/history');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/history')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/history'">History</router-link></li>

            <li v-if="loginStatus === 'hrd' && (statePage === 'bank/quiz')" v-on:click="setActiveSide('hrd/bank/quiz/create/multiple-choice');" :class="{active: isActiveSide('hrd/bank/quiz/create/multiple-choice')}"><router-link to="/hrd/bank/quiz/create/multiple-choice">Create Multiple Choice</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'bank/quiz')" v-on:click="setActiveSide('hrd/bank/quiz/create/essay');" :class="{active: isActiveSide('hrd/bank/quiz/create/essay')}"><router-link to="/hrd/bank/quiz/create/essay">Create Essay</router-link></li>
            <!-- <li v-if="loginStatus === 'hrd' && (statePage === 'bank/quiz')" v-on:click="setActiveSide('hrd/bank/quiz/organize/problem-set');" :class="{active: isActiveSide('hrd/bank/quiz/organize/problem-set')}"><router-link to="/hrd/bank/quiz/organize/problem-set">Categorize Problem Set</router-link></li> -->

            <!---------------------------------------------------->

            <li v-if="loginStatus === 'department' && (statePage === 'fpk' || statePage === 'mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/dashboard')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/dashboard'">Dashboard</router-link></li>
            <li v-if="(loginStatus === 'department' && (role === 'DepartmentHead' || statePage === 'fpk') && statePage !== 'fpk/process')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/create-new');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/create-new')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/create-new'">Create New</router-link></li>
            <li v-if="loginStatus === 'department' && (statePage === 'fpk' || statePage === 'mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/history');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/history')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/history'">History</router-link></li>

            <li v-if="(role === 'DepartmentHead' || role === 'HeadHR' || role === 'DepartmentTeamMember') && statePage === 'mpp'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/pending');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/pending')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/pending'">Pending</router-link></li>
            <li v-if="(role === 'DepartmentHead' || role === 'HeadHR' || role === 'DepartmentTeamMember') && statePage === 'mpp'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/accepted');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/accepted')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/accepted'">Accepted</router-link></li>
            <li v-if="(role === 'DepartmentHead' || role === 'HeadHR' || role === 'DepartmentTeamMember') && statePage === 'mpp'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/rejected');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/rejected')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/rejected'">Rejected</router-link></li>

            <!-- <li v-if="(role === 'DepartmentHead' || role === 'HeadHR' || role === 'DepartmentTeamMember') && statePage === 'fpk'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/pending');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/pending')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/pending'">Pending</router-link></li> -->
            <li v-if="(role === 'DepartmentHead' || role === 'HeadHR' || role === 'DepartmentTeamMember') && statePage === 'fpk'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/accepted');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/accepted')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/accepted'">Accepted</router-link></li>
            <li v-if="(role === 'DepartmentHead' || role === 'HeadHR' || role === 'DepartmentTeamMember') && statePage === 'fpk'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/rejected');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/rejected')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/rejected'">Rejected</router-link></li>

            <li v-if="(role === 'DepartmentHead') && statePage === 'fpk/process'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/accept');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/accept')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/accept'">Accept</router-link></li>
            <li v-if="(role === 'DepartmentHead') && statePage === 'fpk/process'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/rejected');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/rejected')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/rejected'">Rejected</router-link></li>
            <li v-if="(role === 'DepartmentHead') && statePage === 'fpk/process'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/ceo/waiting');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/ceo/waiting')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/ceo/waiting'">Waiting CEO</router-link></li>
            <li v-if="(role === 'DepartmentHead') && statePage === 'fpk/process'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/ceo/accepted');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/ceo/accepted')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/ceo/accepted'">Accepted By CEO</router-link></li>
            <li v-if="(role === 'DepartmentHead') && statePage === 'fpk/process'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/ceo/rejected');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/ceo/rejected')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/ceo/rejected'">Rejected By CEO</router-link></li>


        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      navbarLeft: {
        marginLeft: '-15px'
      },
      statePage: 'fpk',
      content: '',
      activeNavItem: 'fpk',
      activeNavItemSide: '',
      notifPopMenu: '',
      status: 'active',
      username: JSON.parse(window.sessionStorage.getItem('user')).name,
      role: JSON.parse(window.sessionStorage.getItem('user')).role
    }
  },
  props: ['loginStatus'],
  methods: {
    chStatePageToMpp () {
      this.statePage = 'mpp'
      console.log(this.statePage)
    },
    chStatePageToFpk () {
      this.statePage = 'fpk'
      console.log(this.statePage)
    },
    isActive (navItem) {
      return this.activeNavItem === navItem
    },
    setActive (navItem) {
      this.activeNavItem = navItem
    },
    isActiveSide (navItem) {
      return this.activeNavItemSide === navItem
    },
    setActiveSide (navItem) {
      this.activeNavItemSide = navItem
    },
    isNotifActive (notif) {
      return this.notifPopMenu === notif
    },
    setNotifActive (notif) {
      if (this.notifPopMenu !== notif) {
        this.notifPopMenu = notif
      } else {
        this.notifPopMenu = ''
      }
    },
    chStatePageToHrdRequestedFpk () {
      this.statePage = 'requested/fpk'
    },
    chStatePageToHrdRequestedMpp () {
      this.statePage = 'requested/mpp'
    },
    chStatePageToHrdPublishedFpk () {
      this.statePage = 'published/fpk'
    },
    chStatePageToHrdPublishedMpp () {
      this.statePage = 'published/mpp'
    },
    chStatePageToHrdRejectedFpk () {
      this.statePage = 'rejected/fpk'
    },
    chStatePageToHrdRejectedMpp () {
      this.statePage = 'rejected/mpp'
    },
    chStatePageToHrdAcceptedFpk () {
      this.statePage = 'accepted/fpk'
    },
    chStatePageToHrdAcceptedMpp () {
      this.statePage = 'accepted/mpp'
    },
    chStatePageToHrdCandidates () {
      this.statePage = 'candidates'
    },
    chStatePageToHrdQuiz () {
      this.statePage = 'bank/quiz'
    },
    chContentRequestToFpk () {
      this.content = 'fpk'
    },
    chContentRequestToMpp () {
      this.content = 'mpp'
    },
    chStatusToAccepted () {
      this.status = 'accepted'
    },
    chStatusToRejected () {
      this.status = 'rejected'
    },
    chStatusToPublished () {
      this.status = 'published'
    },
    chStatusToActive () {
      this.status = 'active'
    },
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    chStatePagetToFpkProcess () {
      this.statePage = 'fpk/process'
    },
    check: function () {
      return window.sessionStorage.getItem('user')
    }
  }
}
</script>

<style scoped>

#myNavbar li:hover {
  background-color: #e5e5ff;
}

.top-navbar {
  background-color: white;
  z-index: 11;
  font-size: 10pt;
}

.navbar-brand {
  padding-left: 45px;
  padding-right: 42px;
}

.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
  /*turn off bootstrap*/
  background-color: white;
  border-bottom: 3px solid #3c8dbc;
  color: black;
}

.navbar-inverse .navbar-nav>.active>a {
  /*turn off bootstrap*/
  background-color: #4c99c6;
  border-left: 3px solid white;
  color: white;
}

/*Navigation notification popup*/
.dropdown-menu{
  position: absolute;
  right: 0;
  left: auto;
  width: 280px;
  padding: 0 0 0 0;
  top: 100%;
  box-shadow: 2px 2px 2px grey;
  border-color: #eee;
}

.open>.dropdown-menu{
  padding-top: 10px;
  text-align: center;
  display: block;
}

.open>.dropdown-menu>li{

}
</style>
