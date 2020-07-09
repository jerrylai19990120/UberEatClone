<template>
    <div class="footer">
        <div style="float:left; width:50vw;">
            <strong style="color: white; font-size: 30px; float: left;">Uber</strong><strong style="color: #06C167; font-size: 30px; float: left;">Eats</strong>
            <div style="margin-top: 180px; margin-left: -426px;">
                <img src="../assets/appStore.svg">
                <img src="../assets/googlePlay.png" style="width:138px; margin-left: 20px;">
            </div>
            
        </div>
        <hr style="background-color: white; position: relative; top: 260px">
        <div style="color: white; margin-top: -46px">
            <b-row>
                    <b-col><strong>About Uber Eats</strong></b-col>
                    <b-col><strong>Get Help</strong></b-col>
            </b-row>
            <b-row style="margin-top: 22px">
                    <b-col>Read our blog</b-col>
                    <b-col>Read FAQs</b-col>
            </b-row>
            <b-row  style="margin-top: 22px">
                    <b-col>Buy gift cards</b-col>
                    <b-col>View all cities</b-col>
            </b-row>
            <b-row  style="margin-top: 22px">
                    <b-col>Create a business account</b-col>
                    <b-col>View all countries</b-col>
            </b-row>
            <b-row style="margin-top: 22px">
                    <b-col>Add your resturant</b-col>
                    <b-col>Resturants near me</b-col>
            </b-row>
            <b-row style="margin-top: 22px">
                    <b-col>Sign up to deliver</b-col>
                    <b-col>English</b-col>
            </b-row>
        </div>

        <div style="position: absolute; left: 46px; margin-top:76px;">
            <img src="../assets/fb.png" class="icons">
            <img src="../assets/tw.png" class="icons">
            <img src="../assets/ig.png" class="icons">
            <a href="/" class="link" style="margin-left: 587px">Privacy Policy</a>
            <a href="/" class="link">Terms</a>
            <a href="/" class="link">Pricing</a>
            <span style="color: white; margin-left: 46px;">&copy; Copyright 2020, Uber Eats Clone Inc.</span>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer{
    height: 509px;
    width: 100vw;
    background-color: black;
    padding: 66px;
}

.icons{
    width: 26px;
    margin-left: 18px;
}

.link{
    color: white;
    margin-left: 46px;
}
</style>