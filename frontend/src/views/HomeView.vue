<template>
<section>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://i.postimg.cc/zfwzbfxM/shop-like-a-pro-1.jpg" class="prod-img" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/02hNMF0T/Emma-Raducanu-2023-Australian-Open-Day-3-DSC-5798.webp" class="prod-img" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/hvPM7gmg/np-file-178808.jpg" class="prod-img" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>
 <section class="Featured">
      <h2>Featured Products</h2>

         <div class="first-container">
              <div class="product">
                <img src="https://i.postimg.cc/vZhPmfKR/rafa-dri-fit-adv-short-sleeve-tennis-top-tr8-Skx.jpg" class="prod" 
                alt="product">
                <h4>Tennis T-Shirts</h4>
          </div>
    
              <div class="product">
                <img src="https://i.postimg.cc/bJGXf33N/d00c9996-8a89-4ede-9ea9-a334c06fd223.webp" class="prod" 
                alt="product">
                <h4>Tennis Dresses</h4>
               </div>

              <div class="product">
                <img src="https://i.postimg.cc/L8hnwMLc/0cb28cf6-82b9-44e0-a4c2-4b068bd174c9.webp" class="prod" 
                alt="product">
                <h4>Tennis Skirts</h4>
               </div>
          </div>
      
 </section>

</template>

<script>


export default {
}
</script>
<style scoped>
h1{
    color: blueviolet;
}
h2, h3{
    color: blueviolet;
    text-align: center;
    margin-top: 20px;
    font-size: 50px;
    font-weight: 40px;
    
}

h4{
  color: blueviolet;
  font-size: 33px;
  text-align: center;
}

.feat{
    display: flex;
    flex-direction: column;
}

.first-container{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-block: 10px;
    background-color: azure;
    margin-inline: 10px;
    padding: 15px;
    /* border-radius: 20px; */
    margin-bottom: 40px;

}
.second-container{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-block: 10px;
    background-color: azure;
    margin-inline: 10px;
    padding: 15px;
    margin-bottom: 40px;

}


.prod-img{
    width: 100%; 
    height: 100vh;
    /* border-radius: 20px; */
    box-shadow: 5px 5px 6px 6px white;
}
.prod{
    width: 250px; 
    border-radius: 50%;
}

  
</style>
