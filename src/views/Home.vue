<template>
  <section id="landing">
    <div class="banner">
      <div class="content">
        <div class="name">BuildingBlocs 2023 is back!</div>
        <div class="description">Singapore’s annual computing education <br> outreach programme</div>
        <button @click="scrollDown"><a href="#info">Learn more</a></button>
      </div>
    </div>
  </section>
  <section id="info">
    <div class="text">
      <div class="header">By students, for students</div>
      <p>What people do at BuildingBlocs. What they learn. Who we are. Our mission/vision.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error facere nesciunt in, possimus sint rem nostrum
        accusantium dolorem aperiam quia aut aliquid, itaque explicabo ratione consequatur adipisci.</p>
    </div>
    <div class="image">
      <div class="img"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const scrollDown = () => {
  let pageHeight = window.innerHeight;
  window.scrollBy(0, pageHeight);
}
</script>

<style scoped>
.banner {
  background-color: #787878;
  color: white;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.banner .content .name {
  font-size: 48px;
  font-weight: 500;
  line-height: 62px;
  letter-spacing: 0em;
  margin-bottom: 20px;
}

.banner .content .description {
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  margin-bottom: 35px;
}

.banner .content button {
  background: #FFB546;
  border-radius: 16px;
  padding: 10px 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
}

.banner .content button a {
  text-decoration: none;
  color: black;
}

#info {
  height: 100vh;
}

#info {
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: none;
}

#info .text {
  width: 50%;
  height: 100%;
  margin: none;
  padding-left: 5%;
}

#info .text .header {
  font-size: 40px;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
  margin-top: 25%;
}

#info .text p {
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.01em;
  text-align: left;
}

#info .image {
  width: 50%;
  height: 100%;
}

#info .image .img {
  margin-top: 25%;
  background-color:#D9D9D9;
  width: 100%;
  height: 50%;
  margin-left: 10%;
}
</style>
