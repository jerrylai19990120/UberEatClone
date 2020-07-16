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
            <b-list-group horizontal style="margin-left:236px">
                <b-list-group-item><a href="#1" style="color: black; text-decoration: none;">Hot Coffees</a></b-list-group-item>
                <b-list-group-item><a href="#2" style="color: black; text-decoration: none;">Hot Teas</a></b-list-group-item>
                <b-list-group-item><a href="#3" style="color: black; text-decoration: none;">Hot Drinks</a></b-list-group-item>
                <b-list-group-item><a href="#4" style="color: black; text-decoration: none;">Cold Coffees</a></b-list-group-item>
                <b-list-group-item><a href="#5" style="color: black; text-decoration: none;">Cold Teas</a></b-list-group-item>
                <b-list-group-item><a href="#6" style="color: black; text-decoration: none;">Cold Drinks</a></b-list-group-item>
                <b-list-group-item><a href="#7" style="color: black; text-decoration: none;">Hot Breakfast</a></b-list-group-item>
                <b-list-group-item><a href="#8" style="color: black; text-decoration: none;">Bakery</a></b-list-group-item>
            </b-list-group>
        </div>
        <div style="width:100vw;height:1px;background-color: #E2E2E2; width: 90vw; margin-left: 5vw;"></div>
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
</style>