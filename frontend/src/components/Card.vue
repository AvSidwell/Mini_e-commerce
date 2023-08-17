  <template>
   <div class="container">
      <div class="row justify-content-between">
        <div class="card my-3 rounded rounded-5" style="width: 18rem;" v-for="prod in product" :key="prod.id">
          <img :src="prod.Image" class="card-img-top rounded rounded-5" style="width: 17rem;" :alt="prod.name">
          <div class="card-body">
            <h5 class="card-title">{{prod.name}}</h5>
            <p class="card-text">{{prod.type}}</p>
          </div>
        </div>
      </div>
    </div> 
  </template>
  
<script>
export default {
  props: ["products"],
};
</script>

<style scoped>
 @media screen and (max-width: 700px) {
    .container{
      margin: 0;
      margin-inline-start: 10px;
      margin-inline-end: 30px
    }

    .card img{
      width: 100%;
      margin-block: 20px;
    }
}
</style>
