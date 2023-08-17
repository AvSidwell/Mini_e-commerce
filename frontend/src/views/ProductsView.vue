<template>
<h1 class="text-center fw-5" >Checkout our Products</h1>
    <div v-if="products" class="flex-container">
        <Card :product="products"  />
    </div>
    <div v-else>Loading..</div>
    
</template>

<script>
import Card from '@/components/Card.vue'

export default {
    components: { Card },

    computed: {
        products() {
            return this.$store.state.products
            
        }
    },

    mounted() {
        this.$store.dispatch("getProducts")
        console.log(this.products)
    }
}
</script>

<style>
   
</style>