<template>
  <el-container style="width: 80%;margin: 0 auto">
    <el-header style="height: 30%">
      <div>
      <el-carousel :interval="4000" type="card" height="260px" class="Carousel">
        <el-carousel-item v-for="(img,index) in imgList" :key="index">
          <img :src="img.url">
        </el-carousel-item>
      </el-carousel>
    </div>
    </el-header>
    <el-main>
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item name="1">
          <template slot="title">
            来自对夏天的感受<i class="header-icon el-icon-info"></i>
          </template>
          <div>感觉从去年开始，夏天就有点“扩界”了——我说扩界，是感觉夏天时间变长了，多少有点侵吞秋天时间的意思。
            因为往年9月中旬以后，我就要穿长袖了，而去年呢，10月不穿长袖，我都不觉得冷。
            换句话说，往年过了处暑，就感觉天气明显凉快了，而去年呢，过了寒露，还会感到走路多了会冒汗。
            所以我说，夏天扩界了。</div>
          <div>今年的气温，比起去年，是有过之而无不及。
            因此往年夏天，都是用电扇来解决天热问题，而今年，被这气候折腾的我居然考虑买空调了。
            因为我感觉，如果天气继续这样下去，我生命都会有威胁——我被热的，晚上都没法睡觉了。</div>
        </el-collapse-item>
        <el-collapse-item title="一个神奇的梦" name="2">
          <div> 在闭眼和睁眼间，我做了一个很长很长的梦，在梦中我幡然醒悟，我看透了很多，懂了很多。</div>
          <div>有的时候真的搞不懂自己，感觉自己很陌生，不曾是认识的那个自己，这不只是我，很多人大概也是如此。
            有时总会莫名的不开心，感觉心很烦，看一切的事物都很挑剔，感觉自己是被世界抛弃，遗忘的人。霎时间，
            心中所有的不美好一涌而出，压的有点喘不过气，满眼都是无助，真的很想找个没人的地方痛痛快快的喊一场，
            喊出所有的不开心。生活在这个喧嚣的社会，看淡了人情冷暖，世态炎凉；看破了滚滚红尘，爱恨情仇；领悟了喜怒哀乐
            ，悲欢离合；习惯了缘来缘去，人来人往。“心远地自偏”的境界在如今这个浮尘的社会恐怕没人做到，而这时正需要我们放下所有，静静的认识一下自己。其实与其说是不认识自己，不如说是不相信这就是自己。
            人一辈子错过的太多，还是不要错过了自己，若不能认识自己，就算认识再多的人也是枉然。</div>
        </el-collapse-item>
        <el-collapse-item title="写作，是给自己的一件浪漫的礼物" name="3">
          <div>又到周五，办公室的同事兴奋地说道他的周末计划：坐两小时的飞机去华盛顿听一场勃拉姆斯的音乐会。听完之后，让我们真是羡慕不已。
            这个行程是同事半年前就为自己订下的，用他的话说，这是这些年他给自己的最浪漫的礼物。</div>
          <div>我总会听到一些单身的人对我现在的生活报以羡慕的态度，每天下班回家有人一起分享晚餐，
            周末有人一起出游。但是，我自己可以支配的时间其实非常少。回顾一下之前的生活状态，
            周一到周五每天九点有课，早起两小时再看一遍教案。然后开始一天的工作。晚上回家接着备课，
            周末也有一些工作上的材料需要修改。几年下来，记忆中的生活除了工作，似乎没有别的。在做年终总结的时候，
            甚至想不到工作以外自己在任何方面有所收获。
                                        </div>
          <div>尝到了适当放松自己的甜头，新年伊始有了更多的想法。
            晚上多留出时间写作，把自己这些年看到、想到的都记录下来。这样一个目标对于现在的自己是一件奢侈的事情。
            上一次享受这种美好的感觉还是在很小的时候。
            小学二年级的语文期末考试，由于写不出一篇像样的文章被父亲“逼”着每天上午玩一处地方，做一件事情，
            下午根据这个经历写一篇文章。一个暑假下来，竟也集了厚厚一本作文。后来，开始随便涂鸦，编一些所谓的“小说”。
            然而长大后，这个儿时的好习惯终究没有保持下来。这次重新拾起，作为对自己一周辛苦工作的犒劳。每周能有两、三个小时，
            没有旁人的打扰，自己跟自己的思想交流。还有比这更浪漫的礼物吗？
</div>
        </el-collapse-item>
        <el-collapse-item title="精神和物质谁更重要？" name="4">
          <div> 精神和物质谁更重要？有的人崇尚精神，有的人崇尚物质，各取所需，各取所爱。但有一点，我想，精神不能匮乏，物质怎能匮乏？
            今天，看到许多有“精神家园”字样的标语，没有闻到过有关“物质家园”的气息，实在是惊叹大手笔的虚伪，害羞说不出口嘛！</div>
          <div>小民生活在底层，精神思想尚可，物质在追求中，没有什么害羞而虚伪不说的。嘿嘿，还是做小民好，说话无所顾忌</div>
        </el-collapse-item>
      </el-collapse>
    </el-main>
  </el-container>
</template>

<script>
    export default {
      name: "Note",
      data(){
        return{
          imgList:[
            {url:require('../assets/images/1.png')},
            {url:require('../assets/images/2.png')},
            {url:require('../assets/images/3.png')},
            {url:require('../assets/images/4.png')},
            {url:require('../assets/images/5.png')},
            {url:require('../assets/images/6.png')}
          ],
          activeNames: '1'
        }
      },
    }
</script>

<style type="text/scss" lang="scss" scoped>
  .Carousel img{
    width: 690px;
    height: 216px;
  }
</style>
