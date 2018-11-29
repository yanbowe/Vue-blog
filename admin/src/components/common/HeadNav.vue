<template>
  <nav class="head-nav">
    <div class="logo-container">
      <img src="@/assets/image/logo.png" alt="" class="logo">
    </div>
    <div class="content-container">
      <section>
        <h4 class="title">
          优Bowen
        </h4>
      </section>
      <el-button type="text" @click="dialogVisible = true">登出</el-button>

      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%"><span>您确定要退出吗</span><span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="logout">确 定</el-button>
  </span>
      </el-dialog>
    </div>
  </nav>
</template>

<script>
  import request from '@/utils/request'
  import { removeToken } from "@/utils/auth"
  export default {
    data(){
      return {
        dialogVisible: false,
        imageUrl: ''
      }
    },
    methods:{
      logout(){
        request({
          url:'/logout',
          method:'get'
        }).then(res=>{
          if(res.success == true){
            this.$store.commit('SET_TOKEN','')
            removeToken()
            location.reload();//强制刷新一下当前页面，重新判断下是否具备权限.
          }
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  /*记得引入全局变量的文件*/
  @import '../../assets/style/variable';
  .head-nav {
    font-family: KaiShu, Arial, sans-serif;
    @include flex($justify: flex-start);
    font-size: 1.6rem;
    height: 3em;
    .logo-container {
      @include flex;
      width: 3em;
      height: inherit;
      border-bottom: 2px solid $word;
    }
    .content-container {
      @include flex($justify: space-between);
      padding: 0.5em;
      height: 100%;
      width: calc(100% - 50px);
      border-bottom: 2px solid #32D2DB;
      .log-out {
        @include flex;
        color: $word;
      }
    }
    h4 {
      @include flex;
      margin: 0;
    }
    .subhead {
      width: 130px;
    }
    .log-out {
      cursor: pointer;
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 20px;
    color: #8c939d;
    width: 50px;
    height: 50px;
    line-height: 45px;
  }
  .avatar {
    width: 39px;
    height: 39px;
    display: block;
  }
  .avatar-uploader{

  }
</style>

