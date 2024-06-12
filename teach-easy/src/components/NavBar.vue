<script setup>
  import { RouterLink, useRouter } from 'vue-router';
 

</script>

<template>
  <div>
    <div class="navig">
      <RouterLink to="/">TEACH EASY</RouterLink>
      <RouterLink to="/calendar">CALENDAR</RouterLink>
      <RouterLink to="/new">PERFOMANCE</RouterLink>
      <RouterLink to="/admin">ADMINISTRATION</RouterLink>
      <RouterLink to="/profile">PROFILE</RouterLink>
     
    </div>
  </div>
</template>

<style scoped>
.navig {
  height: 50px;
  width: 100%;
  background-color: #59C4AF;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navig a, .navig button {
  color: #FFF;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
}

.navig a:hover {
  background-color: #ddd;
  color: black;
}

@media screen and (max-width: 768px) {
  .navig a {
    font-size: 14px;
    padding: 0 10px;
  }
}
</style>
