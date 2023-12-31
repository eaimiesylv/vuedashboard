

<template>
  <div  id="container">
    <NavComponent /> 
    <main>
      <HeaderComponent />
      <SectionComponent /> 
    </main>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SectionComponent from "@/components/SectionComponent.vue";
export default {
  name: 'AdminDashboard',
  components:{
    NavComponent,
    SectionComponent,
    HeaderComponent
  }
}
</script>

<style>
#container {
  display: flex;
}
header {
  background: white;
  margin-top: 26px;
  display:flex;
  padding:1.5em 1em;
  
}
header :nth-child(3){
  margin-left: auto !important;
}
nav {
  background: #2B2A3F;
 
}

main {
  background: #F2F1F9;
  min-height: 100vh;
  flex: 1;
  padding:1em;
  overflow-y: scroll;
  overflow-x: hidden;
}


nav img{
  padding:2em 3em;
}
nav a{
  display:flex;
  color:#A3AED0;
  text-decoration:none;
  padding:0.9em 3em;
  font-size:1.2em;
   position: relative;
  
}
nav a:hover{
  background:#77AEF4;
  color:white;
  
}
i{
  margin-right:0.6em;
}
input{
  border:none;
  height:100%;
  flex:1;
  background:#F5F4FA;
  padding-left:1em;
}
.fa-bars{
  font-size:25px;
  margin-top:0.4em;

}
.input-container{
  height:45px;
  width:300px;
  display:flex;
}
.input-container div{
  background:#77AEF4;
  padding:0.8em;
  color:white;
  border-style:2px solid orange;
}
#headerSetting .fa-arrow-left{
  background:#77AEF4;
  color:white;
  padding:1em;
  border-radius: 5px;

}
#headerSetting h4{
  color:#384D67;
  margin:1.2em 0em;
 
}
#headerSetting #wrapper{
  background:white;
  padding:2em !important;
}
#headerSetting label:nth-child(2){
  color:red;
}

.headersetting-input-container div{
  display:flex !important;
  direction:column !important;
  margin-top: 1em;
}

.headersetting-input-container label:nth-child(3){
  margin-left:auto !important;
}
.headersetting-input-container input{
   margin:1em 0em;
   padding: 5px;
   background:white;
   border:1px solid #E5E5E5;
   width:100%;
   height:2rem;
   border-radius:0.4em;
}
@media screen and (max-width: 767px) {
  nav {
    display: none;
  }
  
}


</style>

