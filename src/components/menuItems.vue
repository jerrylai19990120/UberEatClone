<template>
    <div class="nav-section">
        <div class="picture">
                <img src="../assets/starbucksMenu.jpeg" class="pic">
                <div style="background-color:white; width:660px; height:200px; position: absolute; top:180px; padding: 26px 10px 26px 66px; text-align: left; line-height:33px;">
                        <h2>Starbucks (2100 Hurontario Street)</h2>
                        <span>$ • Bakery • Breakfast and Brunch • Cafe</span><br>
                        <span>4.5 (245) • View delivery time and booking fee. <a style="color:#20A454;"><strong>Enter your delivery address</strong></a></span><br>
                        <span>2100 Hurontario Street, Mississauga, ON L5B 1M8&nbsp;•&nbsp;<a style="color:#20A454;"><strong>More info</strong></a></span>
                        <button id="groupOrders">
                            <strong>Start Group Order</strong>
                        </button>

                </div>
        </div>
        <div>
            <b-navbar variant="faded" type="light">
                <b-navbar-nav style="margin-top:18px; margin-left:180px;">
                    <b-nav-item class="item" href="#1">Hot Coffees</b-nav-item>
                    <b-nav-item class="item" href="#2">Hot Teas</b-nav-item>
                    <b-nav-item class="item" href="#3">Hot Drinks</b-nav-item>
                    <b-nav-item class="item" href="#4">Cold Coffees</b-nav-item>
                    <b-nav-item class="item" href="#5">Cold Teas</b-nav-item>
                    <b-nav-item class="item" href="#6">Cold Drinks</b-nav-item>
                    <b-nav-item class="item" href="#7">Hot Breakfast</b-nav-item>
                    <b-nav-item class="item" href="#8">Bakery</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
            
        </div>
        <hr style="width: 90vw;">
        <div style="margin-top: 36px">
                <Category id="1" category="Hot Coffees"/>
                <Category id="2" category="Hot Teas"/>
                <Category id="3" category="Hot Drinks"/>
                <Category id="4" category="Cold Coffees"/>
                <Category id="5" category="Cold Teas"/>
                <Category id="6" category="Cold Drinks"/>
                <Category id="7" category="Hot Breakfast"/>
                <Category id="8" category="Bakery"/>
        </div>
    </div>
</template>

<script>
import Category from "./menuCate";
export default {
    name: "items",
    components: {
        Category
    }
}
</script>

<style scoped>
.picture{
    width: 100vw;
    height: 380px;
}
.pic{
    width: 100vw;
    height: 380px;
    object-fit: scale-down;
    object-fit: cover;
}
.list-group-item{
    border: none;
    padding-top: 36px;
    padding-bottom: 36px;
}

#groupOrders{
    position: relative;
    top: 42px;
    left: 60px;
    background-color: #F0F0F0;
    border: none;
    width: 200px;
    height: 54px;
    border-radius: 36px;
}
.item{
    margin-left: 30px;
}
</style>