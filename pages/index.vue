<template>
  <div class="page-home pt-10">


    <h1 class="hidden">Home</h1>


    <!-- Projects -->
    <div class="section mb-20">
      <div class="with-sidebar flex">

        <!-- Sidebar -->
        <div class="sidebar w-1/3">
          <h2 class="mb-10">Projects</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Laboriosam dolore maiores ratione dicta deleniti.
          </p>
        </div> <!-- sidebar -->

        <!-- Main -->
        <div class="main w-2/3"></div>

      </div> <!-- with-sidebar -->
    </div> <!-- section -->
    



    <!-- Recent Blog -->
    <div class="section">
      <div class="with-sidebar flex">

        <!-- Sidebar -->
        <div class="sidebar w-1/3">
          <h2 class="mb-10">My Blog</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Laboriosam dolore maiores ratione dicta deleniti quis nam 
            nulla repellendus.
          </p>
        </div> <!-- sidebar -->

        <!-- Main -->
        <div class="main w-2/3"></div>

      </div> <!-- with-sidebar -->
    </div> <!-- section -->



  </div>
</template>

<script>
export default {
  name: "Home",
  asyncData() {
    //   Fetch data
  },

  data() {
      return {}
  }
}
</script>