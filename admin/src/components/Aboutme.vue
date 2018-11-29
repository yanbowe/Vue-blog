<template>
  <div style="height: 100%">
    <head-nav></head-nav>
    <a-side></a-side>
    <el-container>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="Tag">
        <el-tab-pane label="基本资料/info" name="first" class="basics" align="center" style="margin: 0 20px 0 0">
          <el-carousel :interval="4000" type="card" height="300px" class="Carousel">
            <el-carousel-item v-for="(img,index) in imgList" :key="index">
              <img :src="img.url">
            </el-carousel-item>
          </el-carousel>
          <h1 style="font-size: 20px" class="animated zoomIn">博学之,审问之,慎思之,明辨之,笃行之</h1>
          <h3 style="font-size: 18px" class="animated zoomIn">求职意向:Web前端工程师</h3>
          <h3 class="animated zoomIn">一年前端开发经验</h3>
          <div v-for="item in states" class="basic">
            <el-col :span="6" :xs="12" class="animated rotateIn">
              <img :src="item.url">
              <p v-text="item.val" class="messag " ></p>
            </el-col>
          </div>
          <div align="center" class="animated slideInUp">
            <h1 style="font-size: 20px">自我评价</h1>
            <h5>本人对工作有很高的激情,能全身心投入工作,并能始终保持强烈的责任心;<br>
              性格温和开朗,善于交流与合作,能与UI设计师和后端进行有效的沟通;能承担压力,<br>
              勤于思考,勇于迎接新的挑战,善于分析解决工作中出现的问题;坚信团队成员的执行力、<br>
              团队成员的积极性是项目成功关键;</h5>
          </div>
        </el-tab-pane>
        <el-tab-pane label="技术栈/Skills" name="second">
          <template v-for="skill in skills">
            <el-row :gutter="20" :key="skill.name">
              <el-col :span="8">
                <div class="left " :style="{backgroundColor: `${skill.background}`}">
                  <h2 class="skillTag animated bounceInDown">{{skill.name}}</h2>
                </div>
              </el-col>
              <el-col :span="16">
                <el-row :gutter="10">
                  <template v-for="child in skill.child">
                    <el-col :span="12"  :key="child.name">
                      <div class="right " :style="{backgroundColor: child.background}" style="margin-right: 20px">
                        <h3 class="skillContent animated bounceInUp">{{child.name}}</h3>
                      </div>
                    </el-col>
                  </template>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-tab-pane>
        <el-tab-pane label="作品集/Profile" name="third">
          <el-row :gutter="20">
            <template v-for="item in profiles">
              <el-col :key="item.name" :span="12" :xs="24">
                <div class="item">
                  <h2 v-text="item.name"></h2>
                  <p v-text="'技术栈: ' + item.skills"></p>
                  <p v-text="item.content"></p>
                  <p v-text="'github地址: ' + item.github"></p>
                </div>
              </el-col>
            </template>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="联系我/Contact" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<script>
  //引入组件
  import Aside from '../components/common/Aside'
  import HeadNav from '../components/common/HeadNav'
  export default {
    name: "Aboutme",
    components:{
      "a-side":Aside,
      "head-nav":HeadNav
    },
    data() {
      return {
        activeName: 'first',
        states: [
          {url:require('../assets/image/xingmig.png'),val: '姓名:燕博文'},
          {url:require('../assets/image/sex.png'),val: '性别:男'},
          {url:require('../assets/image/weizhi.png'),val: '坐标:河南省郑州市'},
          {url:require('../assets/image/zhuangtai.png'),val: '状态/离职'}
        ],
        imgList:[
          {url:require('../assets/image/1.jpg')},
          {url:require('../assets/image/2.jpg')},
          {url:require('../assets/image/3.jpg')},
          {url:require('../assets/image/4.jpg')},
          {url:require('../assets/image/5.jpg')},
          {url:require('../assets/image/6.jpg')}
        ],
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
            background: 'rgba(232, 13, 24, 0.2)',
            child: [
              {name: 'Git', background: 'rgba(232, 13, 24, 0.2)'},
              {name: 'WebPack', background: 'rgba(232, 13, 24, 0.2)'},
              {name: 'Navicat', background: 'rgba(232, 13, 24, 0.2)'},
              {name: 'Webstrom', background: 'rgba(232, 13, 24, 0.2)'}
            ]
          }
        ],
        profiles: [
          {
            name: '博客项目',
            skills: 'vue vue-cli vue-router vuex axios token vee-validate vue-notification element-ui css3 mysql',
            content: '这是一个简单的个人博客,用了vue+element-ui框架,数据库为mysql,使用了ES6标准语法和async/await,实现了利用token进行登录和登出,并且可以发表文章和删除文章.利用try catch统一捕获error,并解决了开发中产生的bug,开发中用到了Webstorm,Navicat,webpakc等工具.',
            github: 'https://github.com/lyttonlee/learn'
          },
          {
            name: '电商代理商城服务端(express-server)',
            skills: 'node express mongoose mongodb3.4 express-promise-router async/await语法',
            content: '这是代理商城项目的服务端，express框架,数据库为mongodb3.4,使用async/await语法，使用express-promise-router统一捕获error，七牛云作为图片存储空间，开发中用到RoBo 3T,postman等工具，功能也完全响应代理商城客户端!',
            github: 'https://github.com/lyttonlee/express-server-for-learn'
          },
          {
            name: 'MarkDown文章编辑器',
            skills: 'electron vue vue-cli vue-router axios qiniu nedb element-ui mavon-editor',
            content: '本软件只要配置七牛云信息,文章中插入的图片将自动上传至用户的七牛云空间，软件使用nedb本地数据库，使用electron打包为各平台的应用!',
            github: 'https://github.com/lyttonlee/md-editor'
          },
          {
            name: '火焰纹章if人物升级模拟',
            skills: 'electron vue vue-cli element-ui',
            content: '这是一个辅助Demo，可以看成是火焰纹章if这款游戏的小插件，功能就是模拟游戏人物升级时的能力提升（因为是随机数成长，每次提升的能力都不一样），得出期望数值，虽然没啥意义，但很能体现程序员思维，会去实现某些无聊的日常小需求!',
            github: 'https://github.com/lyttonlee/if'
          }
        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },

  }
</script>

<style type="text/scss" lang="scss" scoped>
  /*记得引入全局变量的文件*/
  @import '../assets/style/variable';
  .el-tabs{
    width: 100%;
  }
  .basics img{
    width: 200px;
    height: 200px;
  }
  .basics p{
    font-size: 16px;
  }
  .Carousel img{
    width: 735.6px;
    height: 300px;
  }
  .basic img{
    width: 50px;
    height: 50px;
  }
  .Tag{
    padding-left: 20px;
  }
  .grid-content{
    width: 500px;
    height: 200px;
    background: #e9e9e9;
  }
  .skillTag{
    height: 150px;
    text-align: center;
    line-height: 10;
  }
  .skillContent{
    height: 60px;
    text-align: center;
    line-height: 3.5;
  }
  .transition-box {
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .animated.rotateIn{
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
  .animated.bounceInUp{
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
  .animated.bounceInDown{
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
  .item {
    background-color: rgba(59, 123, 13, 0.2);
    padding: 10px;
    border-radius: 15px;
    margin: 10px auto;
    @media screen and (max-width: 768px) {
      padding: 5px;
      margin: 5px auto;
    }
    &:hover {
      transition: 1s;
      border-radius: 25px;
      background-color: rgba(10, 135, 87, 0.3);
    }
    p {
      text-align: left;
      text-indent: 28px;
      font-size: 1.1rem;
      line-height: 1.2;
      @media screen and (max-width: 768px) {
        text-indent: 12px;
        font-size: 0.7rem;
        line-height: 1.1;
      }
    }
  }
</style>
