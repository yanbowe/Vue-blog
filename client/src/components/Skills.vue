<template>
<el-container class="containe">
 <div style="width: 80%;margin: 0 auto">
   <template v-for="skill in skills">
     <el-row :gutter="20" :key="skill.name">
       <el-col :span="8">
         <div class="left " :style="{backgroundColor: `${skill.background}`}">
           <h2 class="skillTag animated zoomIn">{{skill.name}}</h2>
         </div>
       </el-col>
       <el-col :span="16">
         <el-row :gutter="10">
           <template v-for="child in skill.child">
             <el-col :span="12"  :key="child.name">
               <div class="right " :style="{backgroundColor: child.background}" style="margin-right: 20px">
                 <h3 class="skillContent animated zoomIn">{{child.name}}</h3>
               </div>
             </el-col>
           </template>
         </el-row>
       </el-col>
     </el-row>
   </template>
 </div>
</el-container>
</template>

<script>
    export default {
      name: "Skills",
      data(){
          return{
            skills: [
              {
                name: '前端',
                background: 'rgba(29, 218, 61, 0.2)',
                child: [
                  {name: 'Vue+VueRouter+Vuex', background: 'rgba(29, 218, 61, 0.2)'},
                  {name: 'Element-UI', background: 'rgba(29, 218, 61, 0.2)'},
                  {name: 'Bookstrop', background: 'rgba(29, 218, 61, 0.2)'},
                  {name: 'axios', background: 'rgba(29, 218, 61, 0.2)'},
                ]
              },
              {
                name: '服务端',
                background: 'rgba(211, 184, 30, 0.2)',
                child: [
                  {name: 'NodeJs', background: 'rgba(211, 184, 30, 0.2)'},
                  {name: 'Mogondb', background: 'rgba(211, 184, 30, 0.2)'},
                  {name: 'Koa', background: 'rgba(211, 184, 30, 0.2)'},
                  {name: 'Mysql', background: 'rgba(211, 184, 30, 0.2)'}
                ]
              },
              {
                name: '工具',
                background: 'rgba(121,219,220 , 0.2)',
                child: [
                  {name: 'Git', background: 'rgba(121,219,220 ,0.2)'},
                  {name: 'WebPack', background: 'rgba(121,219,220, 0.2)'},
                  {name: 'Navicat', background: 'rgba(121,219,220, 0.2)'},
                  {name: 'Webstrom', background: 'rgba(121,219,220, 0.2)'}
                ]
              }
            ],
          }
      }
    }
</script>

<style type="text/scss" lang="scss" scoped>
  .containe{
    height: 743px;
  }
  .Tag{
    padding-left: 20px;
  }
  .left{
    margin-bottom: 30px;
  }
  .grid-content{
    width: 500px;
    height: 200px;
    background: #e9e9e9;
  }
  .skillTag{
    height: 215px;
    text-align: center;
    line-height: 9;
  }
  .skillContent{
    margin-bottom: 15px;
    height: 100px;
    text-align: center;
    line-height: 5;
  }
  .transition-box {
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .animated.zoomIn{
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
</style>
