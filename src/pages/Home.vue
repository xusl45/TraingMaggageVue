<template>
    <div class="wrapper">
        <div class="content-all">
            <div class="content">
                <vHead></vHead>
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
             </div>
        </div>
    </div>
</template>

<script>
import vHead from '../components/Header'
export default {
  components: {
    'vHead' :vHead,
  }
}
</script>

<style scoped>
 .content{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    min-width: 500px;
    min-height: 750px;
}
/* .vhead{
    width: 100%;
    height: 60px;
    background-color: yellow;
} */

.wrapper{
    width: 100%;
    height: 100%;
}

</style>
