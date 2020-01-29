<template>
  <div style="width: 700px; margin: auto; padding-top:50px;">
    <router-link to="/" class="link" id="home"><h1>Home</h1></router-link>
    <router-link to="/station" class="link" id='station'>Station</router-link>
    <router-link to='/users' class="link" id="users">Users</router-link>
    <router-link to='/granfront' class="link" id="granfront">Granfront</router-link>
    <router-link to="/yodobashi" class="link" id ="yodobashi">Yodobashi</router-link>
    <router-view></router-view>
  </div>
</template>


<style>
*{
  color: white;
}
#station{
  position: absolute;
  bottom: 0;
  left: 50px;
  height: 300px;
  width: 50px;
  background-color: darkcyan;
  transition: .5s;
}
#station:hover{
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