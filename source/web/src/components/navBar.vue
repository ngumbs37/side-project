<template>
    <nav id='nav'>
            <!-- <div className='absolute' style={{ backgroundImage: 'url('nav.png')', backgroundPosition: '0rem 0rem', backgroundSize: '4.5rem', height: '4.5rem', width: '9.5rem', backgroundRepeat: 'no-repeat', position: 'absolute', }} ></div> -->
       <!-- <div className='absolute' style={{ backgroundImage: 'url('nav.png')', backgroundPosition: '-19.02rem 0rem',  height: '9rem', width: '19rem', backgroundRepeat: 'no-repeat', position: 'absolute', left: 'calc(100% - 19.02rem)', }} ></div> -->

      <router-link to='/'>Home</router-link> |
      <router-link to='/about'>About</router-link>
    </nav>
</template>


<script>
export default {
  name: 'nav-bar'
}
</script>


<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
