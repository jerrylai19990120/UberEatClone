<template>
    <div>
        <b-row>
            <b-col style="margin-left:100px">
                <b-card
                        :img-src="require('../assets/feed.svg')"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 23rem;"
                        img-height="240px"
                        class="mb-2"
                    >
                    <b-card-text>
                    <h4 style="float: left;margin-top:-20px">Feed your employees</h4><br>
                    <strong style="float: left;color:#20A454;margin-top: -10px">Create a business account</strong><br>
                    
                </b-card-text>
            </b-card>
            </b-col>
            <b-col style="margin-left:-176px">
                <b-card
                    :img-src="require('../assets/res.svg')"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 23rem;"
                    img-height="240px"
                    class="mb-2"
                >
                    <b-card-text>
                        <h4 style="float: left; margin-top:-20px">Your resturant, delivered</h4><br>
                        <strong style="float: left; color:#20A454; margin-top: -10px">Add your resturant</strong><br>
                        
                    </b-card-text>
                </b-card>

            </b-col>
            <b-col style="margin-left:-178px">
                <b-card
                    :img-src="require('../assets/work.svg')"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 23rem;"
                    img-height="240px"
                    class="mb-2"
                >
                <b-card-text>
                        <h4 style="float: left;margin-top:-20px">Deliver the Eats</h4><br>
                        <strong style="float: left; color: #20A454;margin-top: -10px">Sign up to deliver</strong><br>
                        
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>

    </div>
</template>

<script>
export default {
    name: "optionsPanel"
}
</script>

<style scoped>
.card{
    border: none;
}
</style>