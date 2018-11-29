<template>
    <div>
      <el-row>
        <el-col :span="24"><div class="main">
          <div class="view">
            <img src="../assets/images/xiao.jpg" alt="">
            <div class="hover">
              <h3>姓名</h3>
              <p>燕博文</p>
            </div>
          </div>
          <div class="view">
            <img src="../assets/images/9.jpg" alt="">
            <div class="hover">
              <h3>工作经验</h3>
              <p>一年Web开发经验</p>
            </div>
          </div>
          <div class="view">
            <img src="../assets/images/10.jpg" alt="">
            <div class="hover">
              <h3>工作方面</h3>
              <p>本人对工作有很高的激情,能全身心投入工作,并能始终保持强烈的责任心</p>
            </div>
          </div>
          <div class="view">
            <img src="../assets/images/11.jpg" alt="">
            <div class="hover">
              <h3>性格方面</h3>
              <p>性格温和开朗,善于交流与合作,能与UI设计师和后端进行有效的沟通;能承担压力</p>
            </div>
          </div>
          <div class="view">
            <img src="../assets/images/12.jpg" alt="">
            <div class="hover">
              <h3>学习方面</h3>
              <p>勤于思考,勇于迎接新的挑战,善于分析解决工作中出现的问题;坚信团队成员的执行力</p>
            </div>
          </div>
        </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Aboutme"
    }
</script>

<style type="text/scss" lang="scss" scoped>
  .main{ width:1100px; height:220px; margin:0 auto;}
  .view{ width:200px; height:200px; overflow:hidden; position:relative; margin:10px; float:left;}
  .hover{
    width:200px; background:rgba(0, 0 ,0 ,0.5); position:absolute; top:40px; left:0; text-align:center; color:#fff;
    transform:rotate(55deg);
    -moz-transform:rotate(55deg);
    -webkit-transform:rotate(55deg);
    transition:all 0.5s;
    -moz-transition:all 0.5s;
    -webkit-transition:all 0.5s;
    overflow:hidden; height:0; z-index:4000;}
  /*写好样式，进行隐藏，用overflow:hidden; height:0;*/
  .hover h3{color:#fff; border-bottom:2px solid rgba(255, 255 ,255, 0.5); padding-bottom:10px;}
  .view:hover .hover{
    height:120px;
    transform:rotate(0deg);
    -moz-transform:rotate(0deg);
    -webkit-transform:rotate(0deg);
  }
  /*before   after为选择器，一般给选择器加动画背景，设置动画样式*/
  .view:before{
    content:""; position:absolute; top:-240px; right:0;width:360px; height:360px; background:rgba( 83,151,243,0.5);
    transform:rotate(55deg) translateX(60px);
    -moz-transform:rotate(55deg) translateX(60px);
    -webkit-transform:rotate(55deg) translateX(60px);
    transform-origin:100% 0%;
    -moz-transform-origin:100% 0%;
    -webkit-transform-origin:100% 0%;
    transition:all 0.5s ease 0.3s;
    -moz-transition:all 0.5s ease 0.3s;
    -webkit-transition:all 0.5s ease 0.3s;
  }
  /*写好样式，进行隐藏，用top:-240px;*/
  .view:hover:before{ top:0;}
  .view:after{
    content:""; position:absolute;bottom:-240px; left:0;width:360px; height:360px; background:rgba( 83,151,243,0.5);
    transform:rotate(55deg) translateX(-60px);
    -moz-transform:rotate(55deg) translateX(-60px);
    -webkit-transform:rotate(55deg) translateX(-60px);
    transform-origin:0% 100%;
    -moz-transform-origin:0% 100%;
    -webkit-transform-origin:0% 100%;
    transition:all 0.5s ease 0.3s;
    -moz-transition:all 0.5s ease 0.3s;
    -webkit-transition:all 0.5s ease 0.3s;
  }
  .view:hover:after{ bottom:0px;}
  .main img{
    width: 200px;
    height: 200px;
  }
</style>
