<template>
  <div>
    
    <div class="clearfix">
      <!--subnav位置-->
       <SubNavView></SubNavView>
    </div>

   <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { SubNavView } from "@/components/common/subNavView"


import { mapMutations, mapState } from 'vuex'
export default {
  components: {
    SubNavView
  }
  
};
  

</script>
<style lang="scss" scoped>
.crownpin-top {
  font-size: 14px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .05);
  margin: 0 30px 20px;
  height: 50px;
  line-height: 50px;
  padding-right: 15px;
}
.searchClose{
  padding:0 20px 20px;
}
.searchClose ul li{

    font-size:14px;
    border:1px solid #d3d8db;
    list-style:none;
    display:inline;
    padding: 10px;
    margin-right:15px;
}
</style>
