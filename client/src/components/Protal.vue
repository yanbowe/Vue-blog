<template>
  <div>
    <el-container>
      <div class="banner" style="width: 100%">
        <ul class="word animated fadeInLeftBig">
          <p class="line">在这个喧嚣的城市</p>
          <p class="line">你是否也在寻找那片属于你自己的宁静</p>
          <p class="line">给生活一个起点</p>
          <p class="line">慢下来,发现身边美好的点滴</p>
        </ul>
      </div>
    </el-container>
    <el-container style="width: 1300px; margin: 0 auto">
      <el-header>
        <el-row :gutter="20">
          <el-col :span="3"><div class="list">文章<span style="color:aqua;">列表</span></div></el-col>
          <el-col :span="7"><div><img src="../assets/images/xuxian.png"></div></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <ul class="list animated slideInDown">
            <li class="article" v-for="{title,tags,publishTime,content,id},index in lists">
              <div class="essay">
                <header>
                  <el-row type="flex" class="row-bg" justify="space-around" style="padding-top: 20px">
                    <el-col :span="10" ><div class="Title"><img src="../assets/images/title.png" alt="">{{title}}</div></el-col>
                    <el-col :span="5"><div></div></el-col>
                    <el-col :span="3" ><div class="Tag"><img src="../assets/images/icon.png"><span>标签：{{tags}}</span></div></el-col>
                  </el-row>
                </header>
                <div class="matter"><p>{{content}}</p></div>
                <p class="time"><img src="../assets/images/shijian.png">{{publishTime}}<span class="all"><router-link :to="'/articles/' + id">查看全部内容</router-link></span></p>
              </div>
            </li>
            <el-row>
              <el-col>
                <div class="block">
                  <!--若分页标签没有绑定layout="prev,pager,next" :page-size="5" :total='total'这三个参数，则页面不会显示页数-->
                  <el-pagination layout="prev,pager,next" :page-size="5" :total="total" @current-change="pageChange"></el-pagination>
                </div>
              </el-col>
            </el-row>
          </ul>
        </el-main>
        <el-aside width="350px" class="animated zoomIn">
          <div class="notice">
            <el-tag class="recommend">公告</el-tag>
            <object type="application/x-shockwave-flash" style="outline:none;padding:20px 0 0 20px" data="http://cdn.abowman.com/widgets/pendulumclock/pendulumClockV2.swf?" width="300" height="200"><param name="movie" value="http://cdn.abowman.com/widgets/pendulumclock/pendulumClockV2.swf?"></param><param name="AllowScriptAccess" value="always"></param><param name="wmode" value="opaque"></param><param name="bgcolor" value=""/></object>
            <el-tag type="success" class="messag">名字：燕博文</el-tag>
            <el-tag type="info" class="messag">粉丝:0</el-tag>
            <el-tag type="warning" class="messag">关注：0</el-tag>
          </div>
          <el-tag type="warning" class="recommend">小视频</el-tag>
          <object type="application/x-shockwave-flash" style="outline:none;padding:20px 0 0 20px" data="http://cdn.abowman.com/widgets/dog/dog.swf?3?" width="300" height="225"><param name="movie" value="http://cdn.abowman.com/widgets/dog/dog.swf?3?"></param><param name="AllowScriptAccess" value="always"></param><param name="wmode" value="opaque"></param><param name="bgcolor" value="FFFFFF"/></object>
          <object type="application/x-shockwave-flash" style="outline:none;padding:20px 0 0 20px" data="http://cdn.abowman.com/widgets/hamster/hamster.swf?" width="300" height="225"><param name="movie" value="http://cdn.abowman.com/widgets/hamster/hamster.swf?"></param><param name="AllowScriptAccess" value="always"></param><param name="wmode" value="opaque"></param></object>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    import request from '../untils/request'
    import moment from 'moment'
    export default {
      name: "Protal",
      data(){
        return{
          lists:[],
          total:1,
        }
      },
      created(){
        request({
          method:'get',
          url:'/lists'
        }).then(res=>{
          this.lists = res.data
          for(let article of this.lists){
            article.tags = article.tags ? article.tags :'空'
            article.publishTime = moment(article.publishTime).format('YYYY年-MM月-DD日 HH:mm:ss')
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      methods:{
        pageChange:function (page) {
          request({
            url:'/showPage',
            method:'get',
            params:{
              page:page || 1,
              pageSize:5
            }
          }).then(response=>{
            this.lists = response.data.show;
            this.total = response.data.nub;
          }).catch(err=>{
            console.log(err);
          })
        },
      },
    }
</script>

<style type="text/scss" lang="scss" scoped>
  @keyframes animatedBackground {
    from { background-position: 0 0; }
    to { background-position: 100% 0; }
  }
  .banner{
    height: 21.9rem;
    background-image:url("../assets/images/banner.jpg");
    background-position: 0px 0px;
    background-repeat: repeat-x;
    animation: animatedBackground 30s linear infinite;
    z-index: -99;
  }
  .word{
    padding: 3.75rem 0 0 31.25rem;
    font-size: 1rem;
    color: #333333;
    text-shadow: 2px 2px 2px white;
  }
  .animated.fadeInRight{
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
  .animated.fadeInLeftBig{
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
  .animated.slideInDown{
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
  .animated.zoomIn{
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
  .list{
    font-size: 20px;
  }
  .article{
    list-style: none;
    margin-bottom: 1.25rem;
    height: 9.3rem;
  }
  .essay{
    height: 9.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #EBEFF5;
    box-shadow: 0px 0px 5px #888888;
    border-radius: 10px;
  }
  .matter{
    width: 80%;
    height: 38px;
    margin: 0 auto;
    font-size: 15px;
    color: #9C9F9F;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .time{
    padding: 0 0 10px 20px;
    font-size: 13px;
    color: #9C9F9F;
  }
  .Tag{
    font-size: 15px;
    color: #9C9F9F;
    text-align: center;
    line-height: 2.5;
    width: 150px;
    height: 39px;
    border-radius: 10px;
    background-image: url("../assets/images/icon-.png");
    z-index: -99;
  }
  .animated.bounceInDown{
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
  .block{
    text-align: center;
    padding-right: 90px;
  }
  .Title img{
    width: 30px;
    height: 30px;
    vertical-align:middle;
    padding-right: 10px;
  }
  .Tag img{
    width: 30px;
    height: 30px;
    vertical-align:middle;
    padding-right: 10px;
  }
  .time img{
    width: 20px;
    height: 20px;
    margin: 0px 10px 0 0;
    vertical-align:middle;
  }
  .all a{
    float: right;
    text-decoration: none;
    padding-right: 20px;
    font-size: 15px;
  }
  .all a:hover{
    transition: .5s;
    color: #32D2DB;
  }
  .recommend{
    width: 100%;
    height: 50px;
    font-size: 16px;
    line-height: 3;
    text-align: center;
  }
  .notice{
    width: 100%;
    height: 500px;
    background-color: white;
    box-shadow: 0px 0px 5px #888888;
    margin-bottom: 50px;
  }
  .messag{
    width: 80%;
    height: 50px;
    margin: 20px 0 0 20px;
    text-align: center;
    line-height: 3.9;
  }
</style>
