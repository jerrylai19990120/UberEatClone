<template>
    <div class="section">
        <b-card
    :img-src="require('../assets/mc.jpeg')"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 23rem; max-height: 420px;"
    class="mb-2"
  >
    <b-card-text>
        <h5 style="float: left;">Mcdonald's</h5><br>
        <span style="float: left">$0.99 Delivery Fee &nbsp;•&nbsp; 10-20 Min &nbsp;•&nbsp; $</span><br>
        <span style="float: left">Burgers • American • Fast Food</span>
    </b-card-text>
  </b-card>
    </div>
</template>

<script>
export default {
    name: 'resturant'
}
</script>

<style scoped>
.section{
    margin-left: 23px;
}

</style>