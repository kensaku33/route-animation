<template>
  <div style="width: 700px; margin: auto; padding-top:50px;">

    <a :href="twitter"><i class="fab fa-twitter"></i></a>

    <button @click="isActive=!isActive">おせ！</button>
    <div class="toggle" :class="{active:isActive}">
      <ul>
        <li>
          <a :href="twitter"><i class="fab fa-twitter"></i></a>
        </li>
        <li>
          <a :href="facebook"><i class="fab fa-twitter"></i></a>
        </li>
        <li>
          <a :href="instagram"><i class="fab fa-twitter"></i></a>
        </li>
      </ul>
    </div>


    <router-link to="/" class="link" id="home">Home</router-link>
    <router-link to='/users' class="link" id="users">Users</router-link>
    <router-link to='/granfront' class="link" id="granfront">Granfront</router-link>
    <router-link to="/yodobashi" class="link" id ="yodobashi">Yodobashi</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      twitter: 'https://twitter.com/UBER10191097',
      facebook: 'https://www.facebook.com/yamazoe.kensaku',
      instagram: 'https://www.instagram.com/yamazoe88/',
      isActive: false,
    }
  },
  methods:{
    window:onload = function(){
      alert('こんにちは');
    }
  }
}
</script>

<style>
*{
  color: white;
}
#home{
  position: absolute;
  bottom: 0;
  left: 50px;
  height: 300px;
  width: 50px;
  background-color: darkcyan;
  transition: .5s;
}
#home:hover{
  height: 400px;
}
#users{
  position: absolute;
  bottom: 0;
  left: 150px;
  height: 300px;
  width: 50px;
  background-color: rgb(65, 139, 0);
  transition: .5s
}
#users:hover{
  height: 500px;
}
#granfront{
  position: absolute;
  bottom: 0;
  left: 250px;
  height: 300px;
  width: 50px;
  background-color: rgb(139, 134, 0);
  transition: .5s
}
#granfront:hover{
  height: 500px;
}
#yodobashi{
  position: absolute;
  bottom: 0;
  left: 350px;
  height: 300px;
  width: 50px;
  background-color: rgb(139, 37, 0);
  transition: .5s
}
#yodobashi:hover{
  height: 500px;
}

.active{
  height: 100px;
  width: 200px;
  color: black;
  background-clip: yellow;
}

</style>