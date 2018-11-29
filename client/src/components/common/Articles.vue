<template>
  <div>
    <el-container style="width: 60%;margin: 0 auto">
      <ul class="list animated slideInDown">
        <li class="article" v-for="{title,tags,content,publishTime},index in lists">
          <div class="essay">
            <header>
              <el-row type="flex" class="row-bg" justify="space-around" style="padding-top: 20px">
                <el-col :span="10" ><div class="Title"><img src="../../assets/images/title.png" alt="">{{title}}</div></el-col>
                <el-col :span="5"><div></div></el-col>
                <el-col :span="3" ><div class="Tag"><img src="../../assets/images/icon.png"><span>标签：{{tags}}</span></div></el-col>
              </el-row>
            </header>
            <div class="matter"><p>{{content}}</p></div>
            <el-row :gutter="20">
              <el-col :span="6" :offset="6"></el-col>
              <el-col :span="6" :offset="20" class="goIndex"><el-button type="danger"><router-link to="/" style="color: #000000;
    text-decoration: none;">回到首页</router-link></el-button></el-col>
            </el-row>
          </div>
        </li>
      </ul>
    </el-container>
  </div>
</template>

<script>
  import request from '../../untils/request'
  import moment from 'moment'
    export default {
        name: "Articles",
      data(){
        return{
          lists:[],
        }
      },
      created(){
        const id = this.$route.params.id
        console.log(id)
        request({
          method:'get',
          url:`/content/${id}`,
        }).then(res=>{
          this.lists = res.data
          console.log(this.lists)
          for(let article of this.lists){
            article.tags = article.tags ? article.tags :'空'
            article.publishTime = moment(article.publishTime).format('YYYY年-MM月-DD日 HH:mm:ss')
          }
        }).catch(err=>{
          console.log(err)
        })
      }
    }
</script>

<style type="text/scss" lang="scss" scoped>
  .animated.slideInDown{
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
  .list{
    font-size: 20px;
  }
  .article{
    list-style: none;
    margin-bottom: 1.25rem;
  }
  .essay{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0px 0px 5px #888888;
    border-radius: 10px;
  }
  .matter{
    width: 80%;
    margin: 3rem auto;
    font-size: 19px;
    color: #000000;
  }
  .time{
    padding: 0 0 10px 20px;
    font-size: 16px;
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
    background-image: url("../../assets/images/icon-.png");
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
  .goIndex{
    padding-bottom: 2rem;
  }

</style>
