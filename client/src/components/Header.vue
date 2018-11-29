<template>
    <div>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6"><div><img src="../assets/images/logo.png" alt=""></div></el-col>
        <el-col :span="6"><div></div></el-col>
        <el-col :span="6">
          <el-menu :router="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="border: none;padding-top: 10px">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/note">生活笔记</el-menu-item>
            <el-menu-item index="/skills">技能栈</el-menu-item>
            <el-menu-item index="/about">关于我</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
      <div id="box" class="totop" @click="Return">
        <div class="box-in"></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Header",
      data() {
        return {
          activeIndex: '/',
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        Return: function (acceleration, stime) {
              var timer  = null;
              cancelAnimationFrame(timer);
              timer = requestAnimationFrame(function fn(){
                var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                if(oTop > 0){
                  document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
                  timer = requestAnimationFrame(fn);
                }else {
                  cancelAnimationFrame(timer);
                }
              });
            }
          }
      }
</script>

<style type="text/scss" lang="scss" scoped>
  .totop{
    position:fixed;
    right:25px;
    bottom:25px;
    display:block;
    width:26px;
    height:62px;
    background:url(../assets/images/rocket.png) no-repeat 0 0;-webkit-transition: all 0.2s ease-in-out;
  }
  .totop:hover{
    background:url(../assets/images/rocket.png) no-repeat 0 -62px;
  }

</style>

