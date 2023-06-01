<template>
<v-container-fluid>

  <v-row>
    <v-col cols="12">
      <div class="px-8 ma-4">
        <h1 style="font-size: 60px;">Our Team</h1>
      </div>
    </v-col>
  </v-row>
  <v-row class="px-8 ma-4 justify-center align-center text-center">
    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h2 style="font-size: 40px;">Our OICs</h2>
        <p style="font-size: 20px;">BuildingBloCS 2023 is led by a set of <s>charismatic</s> passionate overall ICs who overlook various departments within the organisation. Having worked together on organising BuildingBloCS 2022 last year, the organisers aim to help make BuildingBloCS 2023 even bigger and more far-reaching than ever before.</p>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in OICs" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover d-flex">
          <v-btn size="large" density="compact" class="ma-1 ml-2 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://github.com/${organiser.github}`"
          variant="text" v-if="organiser.github"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://linkedin.com/in/${organiser.linkedin}`"
          variant="text" v-if="organiser.linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`${organiser.website}`"
          variant="text" v-if="organiser.website"><v-icon>mdi-web</v-icon></v-btn>
          <v-spacer></v-spacer>
        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col>
    <!-- <v-col cols="12" sm="6" md="4" v-for="oic in OICs" :key="oic.name">
      <v-card height="100%" class="card justify-center align-center text-center">
        <div class="cover"></div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${oic.img}`" width="400px" />
        </div>
        <h1 class="card-title">{{ oic.name }}</h1>
        <p class="card-desc">{{ oic.bio }}</p>
        <div class="card-footer">
            <div class="footer-box">
                <div class="box-wrapper" v-for="comm in oic.comms" :key="comm">
                    <div class="count">{{ comm }}</div>
                </div>
            </div>
        </div>
      </v-card>
    </v-col> -->


    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h2 style="font-size: 40px;">Our Executive Committee (Exco)</h2>
        <p style="font-size: 20px;">In addition to the OICs, BuildingBloCS 2023 is largely indebted to our Executive Committee that strives to help with event management and other tasks, such that work is easily distributed to organisers.</p>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h3 style="font-size: 30px;">June Conference</h3>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in exco" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover d-flex">
          <v-btn size="large" density="compact" class="ma-1 ml-2 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://github.com/${organiser.github}`"
          variant="text" v-if="organiser.github"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://linkedin.com/in/${organiser.linkedin}`"
          variant="text" v-if="organiser.linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
          <!-- <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="organiser.website"
          variant="text" v-if="organiser.website"><v-icon>mdi-web</v-icon></v-btn> -->
          <v-spacer></v-spacer>
          <!-- </div> -->
        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col>

  </v-row>
  <v-row class="px-8 ma-4 justify-center align-center text-center">
    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h2 style="font-size: 40px;">Our Organisers</h2>
        <p style="font-size: 20px;">Without our organizers, we wouldn't be able to organize much of BuildingBloCS, hence this serves as a <i>thank-you note</i> to all of them for their willingness to help and make BuildingBloCS possible!</p>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h3 style="font-size: 30px;">Emcees</h3>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in emcees" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover d-flex">
          <v-btn size="large" density="compact" class="ma-1 ml-2 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://github.com/${organiser.github}`"
          variant="text" v-if="organiser.github"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://linkedin.com/in/${organiser.linkedin}`"
          variant="text" v-if="organiser.linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
          <!-- <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="organiser.website"
          variant="text" v-if="organiser.website"><v-icon>mdi-web</v-icon></v-btn> -->
          <v-spacer></v-spacer>
          <!-- <v-chip class="text-overline ma-2 text-white" style="font-size: 40px;" v-if="organiser.lead">Lead</v-chip> -->
        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col>


    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h3 style="font-size: 30px;">Human Resources</h3>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in hr" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover d-flex">
          <v-btn size="large" density="compact" class="ma-1 ml-2 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://github.com/${organiser.github}`"
          variant="text" v-if="organiser.github"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://linkedin.com/in/${organiser.linkedin}`"
          variant="text" v-if="organiser.linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
          <!-- <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="organiser.website"
          variant="text" v-if="organiser.website"><v-icon>mdi-web</v-icon></v-btn> -->
          <v-spacer></v-spacer>
          <v-chip class="text-overline ma-2 text-white" style="font-size: 40px;" v-if="organiser.lead">Lead</v-chip>

        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col>


    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h3 style="font-size: 30px;">Quality Assurance</h3>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in qa" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover d-flex">
          <v-btn size="large" density="compact" class="ma-1 ml-2 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://github.com/${organiser.github}`"
          variant="text" v-if="organiser.github"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://linkedin.com/in/${organiser.linkedin}`"
          variant="text" v-if="organiser.linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="organiser.website"
          variant="text" v-if="organiser.website"><v-icon>mdi-web</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-chip class="text-overline ma-2 text-white" style="font-size: 40px;" v-if="organiser.lead">Lead</v-chip>
        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col>


    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h3 style="font-size: 30px;">Workshop Admin</h3>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in adshop" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover d-flex">
          <v-btn size="large" density="compact" class="ma-1 ml-2 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://github.com/${organiser.github}`"
          variant="text" v-if="organiser.github"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://linkedin.com/in/${organiser.linkedin}`"
          variant="text" v-if="organiser.linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
          <!-- <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="organiser.website"
          variant="text" v-if="organiser.website"><v-icon>mdi-web</v-icon></v-btn> -->
          <v-spacer></v-spacer>
          <v-chip class="text-overline ma-2 text-white" style="font-size: 40px;" v-if="organiser.lead">Lead</v-chip>
        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col>


    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h3 style="font-size: 30px;">Publicity & Design</h3>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in pubs" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover d-flex">
          <v-btn size="large" density="compact" class="ma-1 ml-2 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://github.com/${organiser.github}`"
          variant="text" v-if="organiser.github"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://linkedin.com/in/${organiser.linkedin}`"
          variant="text" v-if="organiser.linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="organiser.website"
          variant="text" v-if="organiser.website"><v-icon>mdi-web</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-chip class="text-overline ma-2 text-white" style="font-size: 40px;" v-if="organiser.lead">Lead</v-chip>
        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col>


    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h3 style="font-size: 30px;">Hackathon</h3>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in hack" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover d-flex">
          <v-btn size="large" density="compact" class="ma-1 ml-2 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://github.com/${organiser.github}`"
          variant="text" v-if="organiser.github"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://linkedin.com/in/${organiser.linkedin}`"
          variant="text" v-if="organiser.linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
          <!-- <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="organiser.website"
          variant="text" v-if="organiser.website"><v-icon>mdi-web</v-icon></v-btn> -->
          <v-spacer></v-spacer>
          <v-chip class="text-overline ma-2 text-white" style="font-size: 40px;" v-if="organiser.lead">Lead</v-chip>
        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col>



    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h3 style="font-size: 30px;">Development</h3>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in dev" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover d-flex">
          <v-btn size="large" density="compact" class="ma-1 ml-2 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://github.com/${organiser.github}`"
          variant="text" v-if="organiser.github"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://linkedin.com/in/${organiser.linkedin}`"
          variant="text" v-if="organiser.linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="organiser.website"
          variant="text" v-if="organiser.website"><v-icon>mdi-web</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-chip class="text-overline ma-2 text-white" style="font-size: 40px;" v-if="organiser.lead">Lead</v-chip>
        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col>


    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h3 style="font-size: 30px;">BBCS x BlahajCTF Organisers</h3>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in ctf" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover d-flex">
          <v-btn size="large" density="compact" class="ma-1 ml-2 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://github.com/${organiser.github}`"
          variant="text" v-if="organiser.github"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://linkedin.com/in/${organiser.linkedin}`"
          variant="text" v-if="organiser.linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="organiser.website"
          variant="text" v-if="organiser.website"><v-icon>mdi-web</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-chip class="text-overline ma-2 text-white" style="font-size: 40px;" v-if="organiser.lead">Lead</v-chip>
        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col>


    <!-- <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h3 style="font-size: 30px;">Others</h3>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in organisers" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover text-right">
          <v-chip class="text-overline ma-2 text-white" style="font-size: 40px;" v-if="organiser.lead">Lead</v-chip>
        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col> -->

    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h2 style="font-size: 40px;">Our Workshop Speakers</h2>
        <p style="font-size: 20px;">BuildingBloCS 2023 boasts a wide variety of speakers from various unique and different backgrounds, all united in the singular goal of spreading knowledge on various different disciplines.</p>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="organiser in ws" :key="organiser.name">
      <v-card height="100%" width="90%" class="card justify-center align-center text-center">
        <div class="cover d-flex">
          <v-btn size="large" density="compact" class="ma-1 ml-2 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://github.com/${organiser.github}`"
          variant="text" v-if="organiser.github"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="`https://linkedin.com/in/${organiser.linkedin}`"
          variant="text" v-if="organiser.linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
          <v-btn size="large" density="compact" class="ma-1 mr-0 pa-1" color="white" style="min-width: 0" :href="organiser.website"
          variant="text" v-if="organiser.website"><v-icon>mdi-web</v-icon></v-btn>
          <v-spacer></v-spacer>

        </div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" style="margin-top: 10px;" width="400px" />
        </div>
        <h1 class="card-title" style="margin-bottom: 10px;">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
        <div class="card-footer">
            <div class="footer-box">
                <div class="box-wrapper" v-for="conf in organiser.conf" :key="conf">
                    <div class="count">{{ conf }}</div>
                </div>
            </div>
        </div>
      </v-card>
    </v-col>

    <!-- <v-col cols="12" sm="6" md="4" v-for="organiser in organisers" :key="organiser.name">
      <v-card height="100%" class="card justify-center align-center text-center">
        <div class="cover"></div>
        <div class="card-img-wrapper">
            <img :src="`/assets/${organiser.img}`" width="400px" />
        </div>
        <h1 class="card-title">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
        <div class="card-footer">
            <div class="footer-box">
                <div class="box-wrapper" v-for="comm in organiser.comms" :key="comm">
                    <div class="count">{{ comm }}</div>
                </div>
            </div>
        </div>
      </v-card>
    </v-col> -->
  </v-row>

</v-container-fluid>
</template>
<script lang="ts" setup>

const OICs = [
  {
    "name": "Lam Yik Ting",
    "school": "DHS",
    "level": "JC2",
    "github": "oneytlam",
    "img": "ppl/yikting.png",
    "bio": "YT here - explorer of AI, Web Dev and Cybersec. If I'm not listening to music, I'm probably on a BuildingBloCS call. :>",
    "linkedin": "oneytlam"
  },
  {
    "name": "Yau Le Qi",
    "school": "TJC",
    "level": "JC2",
    "github": "teraSurfer40141",
    "img": "ppl/leqi.png",
    "bio": "Hi, I'm Le Qi, a JC2 student from TJC. I like all things computers 😎.",
    "linkedin": "yau-le-qi-045889234"
  },
  {
    "name": "Prannaya Gupta",
    "school": "NUSH",
    "level": "JC2",
    "github": "ThePyProgrammer",
    "img": "ppl/prannay.jpg",
    "bio": "Hi I'm Prannaya, a JC2 Student at NUSH and I like training AI, developing software and golfing the hell out of some code 🙂.",
    "linkedin": "prannaya-gupta",
    "website": "https://prannay.ml"
  }
]

const exco = [
  {
    "name": "Khoo Kai Wen",
    "school": "NUSH",
    "github": "deadly-nightshade",
    "level": "JC1",
    "img": "ppl/kaiwen.jpg",
    "bio": "Hi, I'm a JC1 Student at NUSH"
  },
  {
    "name": "Zayan Karimi",
    "school": "NUSH",
    "github": "waffleSheep",
    "level": "JC2",
    "img": "ppl/zayan.jpg",
    "bio": "JC2 student from NUSH. PhD in rizzology from the Pete Davidson school of chasing tail.",
    "linkedin": "karimi-zayan-1a64a8264"
  },
  {
    "name": "Du Yuhan",
    "school": "MGS",
    "github": "TwelvePenguins",
    "level": "Year 4",
    "img": "ppl/duyuhan.jpeg",
    "bio": "Year 4 student from MGS. Your average workaholic penguin and Red Dead Redemption 2 enjoyer.",
    "linkedin": "yuhan-du-12p3ngu5"
  },
  {
    "name": "Cher Jin En",
    "school": "TJC",
    "github": "shindeux",
    "level": "JC1",
    "img": "ppl/cherjinen.jpeg",
    "bio": "Hi, I listen to MAMAMOO and play Solitaire for fun",
    "linkedin": "cher-jin-en-675092235"
  },
  {
    "name": "Suraj Kumar",
    "school": "TJC",
    "github": "Tsk78",
    "level": "JC2",
    "img": "ppl/suraj.png",
    "bio": "Hello, I'm Suraj and coding with black coffee and music is my thing.",
    "linkedin": "suraj-kumar-2839b4233"
  },
  {
    "name": "Bryant Shi",
    "school": "TJC",
    "level": "JC1",
    "img": "ppl/bryant.jpeg",
    "github": "flame-staff",
    "bio": "Yo My name is Bryant. I am a fellow CS student and heavily enjoy games"
  },
  {
    "name": "Renoir Tan",
    "school": "RI",
    "github": "RenoirTan",
    "level": "JC2",
    "img": "ppl/renoir.jpg",
    "bio": "I'm a JC2 Student at RI."
  },
  {
    "name": "Seth Olav Yong",
    "school": "SP",
    "github": "idkSeth",
    "level": "Poly 2",
    "img": "ppl/seth.jpeg",
    "bio": "Hi, I'm Seth, a Poly 2 student from SP.",
    "linkedin": "seth-yong-00672b229"
  },
  {
    "name": "Yap Yuan Xi",
    "school": "NUSH",
    "github": "Haloen",
    "level": "JC2",
    "img": "ppl/yuanxi.jpg",
    "bio": "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development.",
    "linkedin": "yuan-xi-yap-5b3205242"
  },
]

const emcees = [
  {
    "name": "Zayan Karimi",
    "school": "NUSH",
    "github": "waffleSheep",
    "level": "JC2",
    "img": "ppl/zayan.jpg",
    "bio": "JC2 student from NUSH. PhD in rizzology from the Pete Davidson school of chasing tail.",
    "linkedin": "karimi-zayan-1a64a8264"
  },
  {
    "name": "Sanke Mahit",
    "school": "YIJC",
    "github": "AppleGesus",
    "level": "JC2",
    "img": "ppl/Sanke_Mahit.jpg",
    "bio": "My name is Sanke Mahit and I am in JC2 this year!"
  },
  {
    "name": "Dhanvine Rameshkumar",
    "school": "TJC",
    "level": "Sec 4",
    "github": "Dhanvine321",
    "img": "ppl/dhanvine.jpg",
    "bio": "Hi I'm Dhanvine, a Sec 4 student from TJC. I like to code AI and learn new things everyday!",
    "linkedin": "dhanvine-rameshkumar"
  }
]

const hr = [
  {
    "name": "Suraj Kumar",
    "school": "TJC",
    "github": "Tsk78",
    "level": "JC2",
    "img": "ppl/suraj.png",
    "bio": "Hello, I'm Suraj and coding with black coffee and music is my thing.",
    "lead": true,
    "linkedin": "suraj-kumar-2839b4233"
  },
  {
    "name": "Isaac Kok",
    "school": "DHS",
    "level": "JC2",
    "img": "ppl/isaac.jpg",
    "github": "Kweice",
    "bio": "Hi I'm Isaac. I do card tricks, listen to mandopop and my favourite artist is Joker Xue.",
    "lead": true,
    "linkedin": "isaac-kok"
  },
  {
    "name": "Oon Zheng Kang",
    "school": "DHS",
    "github": "ozk100",
    "level": "JC1",
    "img": "ppl/Oon_Zheng_Kang.jpg",
    "bio": "Hi, I'm Zheng Kang, a JC1 student from DHS."
  },
  {
    "name": "Eugene Ang",
    "school": "TJC",
    "github": "python-noob-dotcom",
    "level": "JC1",
    "img": "ppl/eugeneang.jpg",
    "bio": "Hi, I'm Eugene and i believe that caffeine is a miracle drug",
    "linkedin": "eugene-ang-8ab711264"
  },
  {
    "name": "Dhanvine Rameshkumar",
    "school": "TJC",
    "level": "Sec 4",
    "github": "Dhanvine321",
    "img": "ppl/dhanvine.jpg",
    "bio": "Hi I'm Dhanvine, a Sec 4 student from TJC. I like to code AI and learn new things everyday!",
    "linkedin": "dhanvine-rameshkumar"
  },
  {
    "name": "Tan Swee Kang",
    "school": "RVHS",
    "level": "JC2",
    "github": "sotong1337",
    "img": "ppl/swee_kang.jpg",
    "bio": "H2 computing student does CTF, competitive programming and competitions.",
    "linkedin": "tan-swee-kang-rvhs-370aa8248"
  },
  {
    "name": "Adapaka Vinita",
    "school": "GIIS",
    "github": "vi-nita",
    "level": "JC1",
    "img": "ppl/adapaka_vinita.jpg",
    "bio": "I am a fast learner and am passionate about coding and programming. I also enjoy dancing."
  },
]

const qa = [
  {
    "name": "Bryant Shi",
    "school": "TJC",
    "level": "JC1",
    "img": "ppl/bryant.jpeg",
    "github": "flame-staff",
    "bio": "Yo My name is Bryant. I am a fellow CS student and heavily enjoy games",
    "lead": true
  },
  {
    "name": "Neil Bhandari",
    "school": "VJC",
    "level": "JC1",
    "img": "ppl/neil.png",
    "github": "Armweak5104",
    "bio": "I will be in JC1 in 2023. I code mainly in python and C++. I also fail captcha tests too much."
  },
  {
    "name": "Shawn Han Zhi Heng",
    "school": "RVHS",
    "level": "JC2",
    "img": "ppl/shawn_han.jpeg",
    "github": "shzh05",
    "bio": "I am J2 in RVHS, I'm currently taking H2 Computing and it is my favourite subject as I enjoy coding."
  },
  {
    "name": "James Tan Dejun",
    "school": "RVHS",
    "level": "JC2",
    "img": "ppl/james_tan.png",
    "github": "Dragonslayer262",
    "bio": "I'm a JC2 student in RVHS. I mainly enjoy doing competitive programming and machine learning.",
    "linkedin": "james-tan-dejun"
  },
  {
    "name": "Justin Wang",
    "school": "ACJC",
    "github": "plwanejexperto",
    "level": "JC2",
    "img": "ppl/Justin_Wang.jpeg",
    "bio": "I have an interest in designing UI and UX and I am passionate to learn more about computing :)"
  },
  {
    "name": "Sahana Ganesh",
    "school": "GIIS",
    "github": "sahanaaganesh",
    "level": "JC1",
    "img": "ppl/",
    "bio": "I'm a student."
  },
  {
    "name": "Cervon Wong",
    "school": "NUSH",
    "github": "cervonwong",
    "level": "JC2",
    "img": "ppl/cervon.jpg",
    "bio": "Hi, I'm Cervon, JC2 student from NUSH! AI, Robotics and Linguistics nerd 😎",
    "linkedin": "cervonwong",
    "website": "https://cervonwong.com/"
  },
  {
    "name": "Kannan Vishal",
    "school": "NUSH",
    "github": "delargement",
    "level": "JC2",
    "img": "ppl/vishal.png",
    "bio": "Hey, I'm a sixth year from NUSH who likes post-punk, post-industrial and post-hardcore."
  },
  {
    "name": "Yap Yuan Xi",
    "school": "NUSH",
    "github": "Haloen",
    "level": "JC2",
    "img": "ppl/yuanxi.jpg",
    "bio": "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development.",
    "linkedin": "yuan-xi-yap-5b3205242"
  },
  {
    "name": "Hnin Sat Phyu Sin",
    "school": "VJC",
    "github": "hninsatphyusin",
    "level": "JC2",
    "img": "ppl/",
    "bio": "I'm Hnin, a student with a burning passion for technology.",
    "linkedin": "hnin-sat-phyu-sin-54344b265"
  },
  {
    "name": "Cheah Jun Ee",
    "school": "ACJC",
    "github": "JunEe23",
    "level": "JC1",
    "img": "ppl/junee.jpg",
    "bio": "I take A level computing in jc and my combi is CCME."
  },
  {
    "name": "Edwin Liew",
    "school": "ACJC",
    "github": "edwinlmy5",
    "level": "JC2",
    "img": "ppl/Edwin_Liew.jpg",
    "bio": "My name is Edwin and I'm one of the project managers for ACJC's Technology Council"
  },
  {
    "name": "Arthur Junior Ng",
    "school": "TJC",
    "github": "arthurngTJC",
    "level": "JC2",
    "img": "ppl/",
    "bio": "I am a JC2 student from TJC."
  },
  {
    "name": "Sanke Mahit",
    "school": "YIJC",
    "github": "AppleGesus",
    "level": "JC2",
    "img": "ppl/Sanke_Mahit.jpg",
    "bio": "My name is Sanke Mahit and I am in JC2 this year!"
  },
  {
    "name": "Teh Kim Wee",
    "school": "ASRJC",
    "github": "DangerousPotential",
    "level": "JC2",
    "img": "ppl/Teh_Kim_Wee.jpg",
    "bio": "I'm Kim Wee, currently studying in ASRJC. Python is my main programming language",
    "linkedin": "kim-wee-teh-963b9726a"
  },
  {
    "name": "Zhang Xiyuan",
    "school": "VJC",
    "github": "xiyuan1avery",
    "level": "JC2",
    "img": "ppl/zhang_xiyuan.jpg",
    "bio": "Hi im Xiyuan from VJC!!! I luv coffee, running, math & programming. Curious&Learn&Enjoy@BBCS2023",
    "linkedin": "xiyuan-zhang-b819a7242"
  }
]

const adshop = [
  {
    "name": "Khoo Kai Wen",
    "school": "NUSH",
    "github": "deadly-nightshade",
    "level": "JC1",
    "img": "ppl/kaiwen.jpg",
    "bio": "Hi, I'm a JC1 Student at NUSH",
    "lead": true
  },
  {
    "name": "Zayan Karimi",
    "school": "NUSH",
    "github": "waffleSheep",
    "level": "JC2",
    "img": "ppl/zayan.jpg",
    "bio": "JC2 student from NUSH. PhD in rizzology from the Pete Davidson school of chasing tail.",
    "lead": true,
    "linkedin": "karimi-zayan-1a64a8264"
  },
  {
    "name": "Du Yuhan",
    "school": "MGS",
    "github": "TwelvePenguins",
    "level": "Year 4",
    "img": "ppl/duyuhan.jpeg",
    "bio": "Year 4 student from MGS. Your average workaholic penguin and Red Dead Redemption 2 enjoyer.",
    "lead": true,
    "linkedin": "yuhan-du-12p3ngu5"
  },
  {
    "name": "Cher Jin En",
    "school": "TJC",
    "github": "shindeux",
    "level": "JC1",
    "img": "ppl/cherjinen.jpeg",
    "bio": "Hi, I listen to MAMAMOO and play Solitaire for fun",
    "lead": true,
    "linkedin": "cher-jin-en-675092235"
  },
  {
    "name": "Tang Jiaxuan",
    "school": "TJC",
    "github": "Jiaxuan06",
    "level": "JC1",
    "img": "ppl/Jiaxuan.jpg",
    "bio": "Hello! I am Jiaxuan, a JC1 student from TJC annd I am a coffee addict 🤣",
    "linkedin": "jiaxuan-tang-ba383a264"
  },
  {
    "name": "Le Duc Minh",
    "school": "HCI",
    "github": "ID-minh4354",
    "level": "JC2",
    "img": "ppl/leducminh.jpeg",
    "bio": "Hi, I'm a JC2 student from HCI."
  },
  {
    "name": "Lim Jack",
    "school": "TJC",
    "github": "jack-0000000",
    "level": "JC1",
    "img": "ppl/Lim_Jack.jpg",
    "bio": "I am keen in learning more about computer science and developing my own programs.",
    "linkedin": "lim-jack-tjc-1633b4277"
  },
  {
    "name": "Asha Solomon",
    "school": "TJC",
    "github": "Ash3926",
    "level": "JC1",
    "img": "ppl/Asha_Solomon.jpg",
    "bio": "I'm Asha from TJC, I like running and crafts. Favorite subjects(at O's) are Maths and Physics :)"
  },
  {
    "name": "Ashley Alexster",
    "school": "TJC",
    "github": "IsoceledAsh",
    "level": "JC1",
    "img": "ppl/Ashley_Alexster.jpg",
    "bio": "Hi, I'm Ashley! I have always been interested in CS stuff since I was young, and currently take Computing as a subject in JC",
    "linkedin": "ashley-alexster-1a1961278"
  },
  {
    "name": "Kothari Kashvi Chintan",
    "school": "TJC",
    "github": "kat-fly",
    "level": "JC1",
    "img": "ppl/Kashvi_Kothari.jpg",
    "bio": "I have been a member of Infocomm Club since primary school. I currently take H2 computing."
  },
  {
    "name": "Mahamantra Sivagnanam",
    "school": "GIIS",
    "github": "mahaachu",
    "level": null,
    "img": "ppl/Mahamantra_Sivagnanam.jpeg",
    "bio": "Hi! My name's Mahamantra Sivagnanam. I really enjoy programming and coming up with new ideas and innovations"
  },
  {
    "name": "Chee Justin Suwattana",
    "school": "DHS",
    "github": "Giganaer",
    "level": "JC1",
    "img": "ppl/Chee_Justin.jpg",
    "bio": "Hi I'm Justin, a JC1 computing student in DHS who also likes playing guitar"
  },
  {
    "name": "Anangore Seetharaman Ghayathri",
    "school": "GIIS",
    "github": "Gau567",
    "level": "JC1",
    "img": "ppl/",
    "bio": "Passionate about AI and CS, aims to achieve in the industry. Enjoys crime/thriller books.",
    "linkedin": "ghayathri-seetharaman-471422272"
  }
  // {
  //   "name": "Jia Nan"
  // }
]

const pubs = [
  {
    "name": "Tse Min Jia",
    "school": "DHS",
    "github": "MinJiaTse",
    "level": "JC1",
    "img": "ppl/tseminjia.jpeg",
    "bio": "Hello, I'm Min Jia :), a Year 5 student in Dunman High School. Nice to meet you! 😁",
    "lead": true
  },
  {
    "name": "Renoir Tan",
    "school": "RI",
    "github": "RenoirTan",
    "level": "JC2",
    "img": "ppl/renoir.jpg",
    "bio": "I'm a JC2 Student at RI.",
    "lead": true
  },
  {
    "name": "Edwin Liew",
    "school": "ACJC",
    "github": "edwinlmy5",
    "level": "JC2",
    "img": "ppl/Edwin_Liew.jpg",
    "bio": "My name is Edwin and I'm one of the project managers for ACJC's Technology Council"
  },
  {
    "name": "Wayne Ang",
    "school": "ACJC",
    "github": "Zernier",
    "level": "JC2",
    "img": "ppl/Wayne_Ang.JPG",
    "bio": "I am a JC2 from ACJC currently. I like reading books, listening to new music and playing the guitar."
  },
  {
    "name": "Cervon Wong",
    "school": "NUSH",
    "github": "cervonwong",
    "level": "JC2",
    "img": "ppl/cervon.jpg",
    "bio": "Hi, I'm Cervon, JC2 student from NUSH! AI, Robotics and Linguistics nerd 😎",
    "linkedin": "cervonwong",
    "website": "https://cervonwong.com/"
  },
  {
    "name": "Clara Lee",
    "school": "ASRJC",
    "github": "Ninrolds6",
    "level": "JC1",
    "img": "ppl/Clara_Lee.jpeg",
    "bio": "I'm Clara from ASRJC! My CCA is badminton I take computing for A levels. I crochet and do coding in my free time"
  },
  {
    "name": "Quoid Jing-Xuan Andrel",
    "school": "TJC",
    "github": "antndrel",
    "level": "JC1",
    "img": "ppl/andrel.jpg",
    "bio": "Hello! I am Andrel from TJC"
  },
  {
    "name": "Celine Natalie Wongso Lesmono",
    "school": "NIL",
    "github": "celnat312",
    "level": "NIL",
    "img": "ppl/celine_natalie.jpeg",
    "bio": "I took H2 computing when I was in JC and I joined BBCS in 2021 and 2022!",
    "linkedin": "celinenatalie"
  },
  {
    "name": "Yau Le Han",
    "school": "CGSS",
    "github": "lh00000",
    "level": "Sec 4",
    "img": "ppl/",
    "bio": "Sec 4 student exploring CS passion, with no experience, eager to learn and gain skills.",
    "linkedin": "le-han-yau-5a6187261"
  },
  {
    "name": "Sophia Chua",
    "school": "CGSS",
    "github": "TAUVX",
    "level": "Sec4",
    "img": "ppl/Sophia_Chua.JPG",
    "bio": "I am interested in the Fine Arts and like to make art when inspiration strikes me."
  },
]

const hack = [
  {
    "name": "Kabir Jain",
    "school": "NUSH",
    "github": "ka-bear",
    "level": "JC1",
    "img": "ppl/kabir.png",
    "bio": "Hi I'm Kabir, a JC1 student from NUSH. I love Physics, and especially AI.",
    "lead": true
  },
  {
    "name": "Mahir Shah",
    "school": "NUSH",
    "github": "RottenLemons",
    "level": "JC1",
    "img": "ppl/mahir.png",
    "bio": "NUSH student who likes CTFs, AI and C++. Games and dies in Physics sometimes.",
    "lead": true,
    "linkedin": "mahir-shah-681aa0261"
  },
  {
    "name": "Ashwin Lokesh",
    "school": "YIJC",
    "github": "electron13",
    "level": "JC2",
    "img": "ppl/ashwin.jpg",
    "bio": "I am Ashwin.",
    "linkedin": "ashwin-l-82968a202"
  },
  {
    "name": "Jed Lim",
    "school": "NUSH",
    "github": "jedlimlx",
    "level": "JC2",
    "img": "ppl/jed.png",
    "bio": "Hi I'm Jed, a JC2 student from NUSH who is passionate about AI and Physics (particularly Fluid Dynamics)."
  },
  {
    "name": "Ishneet Singh",
    "school": "TJC",
    "github": "Ishneet0710",
    "level": "JC2",
    "img": "ppl/ishneet.jpg",
    "bio": "Hi, I'm Ishneet, a JC2 student from TJC.",
    "linkedin": "ishneet-singh-a51697210"
  },
  {
    "name": "Papangkorn Wangchochedkun",
    "school": "VJC",
    "github": "LegiboY",
    "level": "JC1",
    "img": "ppl/Pann.jpg",
    "bio": "Hi, my name is Pann. VJC J1, trying to comprehend this uncommented code. Used to be a Scrabble god."
  }
]

const dev = [
  {
    "name": "Seth Olav Yong",
    "school": "SP",
    "github": "idkSeth",
    "level": "Poly 2",
    "img": "ppl/seth.jpeg",
    "bio": "Hi, I'm Seth, a Poly 2 student from SP.",
    "lead": true,
    "linkedin": "seth-yong-00672b229"
  },
  {
    "name": "Liu Wenkai",
    "school": "NUSH",
    "github": "squi-ddy",
    "level": "JC1",
    "img": "ppl/wenkai.jpg",
    "bio": "Hi, I'm Wenkai, a JC1 student from NUSH.",
    "lead": true,
    "website": "https://squiddy.me/"
  },
  {
    "name": "Yap Yuan Xi",
    "school": "NUSH",
    "github": "Haloen",
    "level": "JC2",
    "img": "ppl/yuanxi.jpg",
    "bio": "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development.",
    "lead": true,
    "linkedin": "yuan-xi-yap-5b3205242"
  },
  {
    "name": "Kabir Jain",
    "school": "NUSH",
    "github": "ka-bear",
    "level": "JC1",
    "img": "ppl/kabir.png",
    "bio": "Hi I'm Kabir, a JC1 student from NUSH. I love Physics, and especially AI."
  },
  {
    "name": "Mahir Shah",
    "school": "NUSH",
    "github": "RottenLemons",
    "level": "JC1",
    "img": "ppl/mahir.png",
    "bio": "NUSH student who likes CTFs, AI and C++. Games and dies in Physics sometimes.",
    "linkedin": "mahir-shah-681aa0261"
  },
  {
    "name": "Jed Lim",
    "school": "NUSH",
    "github": "jedlimlx",
    "level": "JC2",
    "img": "ppl/jed.png",
    "bio": "Hi I'm Jed, a JC2 student from NUSH who is passionate about AI and Physics (particularly Fluid Dynamics)."
  },
  {
    "name": "Ishneet Singh",
    "school": "TJC",
    "github": "Ishneet0710",
    "level": "JC2",
    "img": "ppl/ishneet.jpg",
    "bio": "Hi, I'm Ishneet, a JC2 student from TJC.",
    "linkedin": "ishneet-singh-a51697210"
  },
  {
    "name": "Wang Zerui",
    "school": "NUSH",
    "github": "theriseof9",
    "level": "Sec 4",
    "img": "ppl/zerui.jpg",
    "bio": "Hi I'm Zerui from NUSH, I like CTFs and blahajs!",
    "linkedin": "wang-zerui-a21b41242"
  },
  {
    "name": "Ma Weiyi",
    "school": "DHS",
    "github": "fwyr",
    "level": "Year 4",
    "img": "ppl/maweiyi.jpeg",
    "bio": "Hello! I'm Weiyi, a DHS student who just happens to like computers."
  },
  {
    "name": "Saw Ze Dong",
    "school": "DHS",
    "github": "sawzedong",
    "level": "JC1",
    "img": "ppl/sawzedong.jpeg",
    "bio": "Hi, i'm a JC1 student from Dunman High, interested in programming websites, trying out AI and more",
    "linkedin": "ze-dong-saw-9b3936242",
    "website": "https://sawzedong.github.io/portfolio/"
  },
  {
    "name": "Cheong Jun Kai Harry",
    "school": "DHS",
    "github": "Harry-cheong",
    "level": "JC1",
    "img": "ppl/harry.jpg",
    "bio": "I'm Harry. I love tinkering with tech. I love card throwing.",
    "linkedin": "harry-cheong-72bbb5212"
  },
  {
    "name": "Jerome Palayoor",
    "school": "ASRJC",
    "github": "jeromepalayoor",
    "level": "JC1",
    "img": "ppl/Jerome_Palayoor.png",
    "bio": "I love math and coding and recently picked up cyber security.",
    "linkedin": "jeromepalayoor",
    "website": "https://jeromepalayoor.com/"
  },
  {
    "name": "Daniel Chua Han",
    "school": "SAJC",
    "github": "indaniel",
    "level": "JC2",
    "img": "ppl/daniel_chua.jpg",
    "bio": "Hi, I'm Daniel, a JC2 student from SAJC. I occasionally do informatics."
  },
  {
    "name": "Zeyu Yao (Peter)",
    "school": "SAIS",
    "github": "cytronicoder",
    "level": "Grade 9",
    "img": "ppl/Peter.jpeg",
    "bio": "I'm a student developer currently studying in Singapore.",
    "linkedin": "cytronicoder",
    "website": "https://www.cytronicoder.com/"
  },
  {
    "name": "Raymond Goo",
    "school": "NP",
    "github": "provsalt",
    "level": "Poly 0",
    "img": "ppl/Raymond_goo.jpg",
    "bio": "I like doing things and stuff software related.",
    "linkedin": "raymond-goo",
    "website": "https://www.raygoo.tech/"
  },
  {
    "name": "Ma Jinghong",
    "school": "HCI",
    "github": "",
    "level": "JC2",
    "img": "ppl/jinghong.jpg",
    "bio": "I am a J2 student from HCI, and take PCME. I hope to help out for this event and learn relevant skills :)",
    "linkedin": "ma-jinghong-a18b5022"
  },
  {
    "name": "Raj Harsh",
    "school": "YIJC",
    "github": "Hars-raj",
    "level": "JC2",
    "img": "ppl/Raj Harsh.png",
    "bio": "I am a JC2 student at YIJC, I take H2 computing and have an interest in programming and AI",
    "linkedin": "raj-harsh-b92931241"
  }
]

const ctf = [
  {
    "name": "Yap Yuan Xi",
    "school": "NUSH",
    "github": "Haloen",
    "level": "JC2",
    "img": "ppl/yuanxi.jpg",
    "bio": "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development.",
    "lead": true,
    "linkedin": "yuan-xi-yap-5b3205242"
  },
  {
    "name": "Wang Zerui",
    "school": "NUSH",
    "github": "theriseof9",
    "level": "Sec 4",
    "img": "ppl/zerui.jpg",
    "bio": "Hi I'm Zerui from NUSH, I like CTFs and blahajs!",
    "linkedin": "wang-zerui-a21b41242"
  },
  {
    "name": "Tan Junheng",
    "school": "NUSH",
    "github": "azazazo",
    "level": "Sec 4",
    "img": "ppl/Tan_Junheng.png",
    "bio": "biggest blåhaj fan🦈❤️❤️ i like crypto(graphy) and sometimes play ctfs",
    "linkedin": "tan-junheng-776037131"
  },
  {
    "name": "Christian James Tan",
    "school": "NUSH",
    "github": "Xenon1345",
    "level": "Sec 4",
    "img": "ppl/",
    "bio": "Hi, I'm Christian, a Y4 student from NUSH"
  },
  {
    "name": "Vincent Kwok",
    "school": "NUSH",
    "github": "cryptoAlgorithm",
    "level": "Sec 4",
    "img": "ppl/kwok_vincent.jpg",
    "bio": "I make beautiful cross-plarform experiences and sometimes do CTFs. ♥️ swift!",
    "linkedin": "vincent-k-774963245",

  },
  {
    "name": "Jerome Palayoor",
    "school": "ASRJC",
    "github": "jeromepalayoor",
    "level": "JC1",
    "img": "ppl/Jerome_Palayoor.png",
    "bio": "I love math and coding and recently picked up cyber security.",
    "linkedin": "jeromepalayoor",
    "website": "https://jeromepalayoor.com/"
  },
  {
    "name": "Lim Sue Han Justin",
    "school": "NUSH",
    "github": "jun-lsh",
    "level": "JC2",
    "img": "ppl/",
    "bio": "Hi, I'm Justin, a Y6 student from NUS High."
  },
  {
    "name": "Joey Tang",
    "school": "HCI",
    "github": "fishjojo1",
    "level": "JC2",
    "img": "ppl/joeytang.jpeg",
    "linkedin": "fishjojo1"
  },
]

const ws = [
  {
    "name": "Zayan Karimi",
    "school": "NUSH",
    "github": "waffleSheep",
    "level": "JC2",
    "img": "ppl/zayan.jpg",
    "bio": "JC2 student from NUSH. PhD in rizzology from the Pete Davidson school of chasing tail.",
    "conf": ["March", "FOSS", "June"],
    "linkedin": "karimi-zayan-1a64a8264"
  },
  {
    "name": "Jessie Chin Kit Hey",
    "school": "HCI",
    "github": "jcc-kh",
    "level": "JC2",
    "img": "ppl/jessie.jpg",
    "conf": ["March"],
    "linkedin": "jessie-chin-kh"
  },
  {
    "name": "Khoo Kai Wen",
    "school": "NUSH",
    "github": "deadly-nightshade",
    "level": "JC1",
    "img": "ppl/kaiwen.jpg",
    "bio": "Hi, I'm a JC1 Student at NUSH",
    "conf": ["March", "FOSS", "June"]
  },
  {
    "name": "Ma Jinghong",
    "school": "HCI",
    "github": "",
    "level": "JC2",
    "img": "ppl/jinghong.jpg",
    "bio": "I am a J2 student from HCI, and take PCME. I hope to help out for this event and learn relevant skills :)",
    "conf": ["March", "FOSS", "June"],
    "linkedin": "ma-jinghong-a18b5022"
  },
  {
    "name": "Ishneet Singh",
    "school": "TJC",
    "github": "Ishneet0710",
    "level": "JC2",
    "img": "ppl/ishneet.jpg",
    "bio": "Hi, I'm Ishneet, a JC2 student from TJC.",
    "conf": ["March", "June"],
    "linkedin": "ishneet-singh-a51697210"
  },
  {
    "name": "Ian Goh",
    "school": "DHS",
    "github": "TheRoundRoads",
    "level": "JC2",
    "img": "ppl/ian.jpg",
    "bio": "Hi I'm Ian Goh! I'm currently a JC2 computing student studying in DHS. I also enjoy watching anime!",
    "conf": ["March"]
  },
  {
    "name": "Eugene Ang",
    "school": "TJC",
    "github": "python-noob-dotcom",
    "level": "JC1",
    "img": "ppl/eugeneang.jpg",
    "bio": "Hi, I'm Eugene and i believe that caffeine is a miracle drug",
    "conf": ["FOSS", "June"],
    "linkedin": "eugene-ang-8ab711264"
  },
  {
    "name": "Dhanvine Rameshkumar",
    "school": "TJC",
    "level": "Sec 4",
    "github": "Dhanvine321",
    "img": "ppl/dhanvine.jpg",
    "bio": "Hi I'm Dhanvine, a Sec 4 student from TJC. I like to code AI and learn new things everyday!",
    "conf": ["FOSS", "June"],
    "linkedin": "dhanvine-rameshkumar"
  },
  {
    "name": "Elston Tan",
    "school": "SP",
    "github": "Elstuhn",
    "level": "Poly 2",
    "img": "ppl/elston.jpg",
    "bio": "Hello, I'm Elston. I love learning and playing around with AI, my favourite game is Sekiro.",
    "conf": ["FOSS"],
    "linkedin": "elstuhn"
  },
  {
    "name": "Joey Tang",
    "school": "HCI",
    "github": "fishjojo1",
    "level": "JC2",
    "img": "ppl/joeytang.jpeg",
    "conf": ["FOSS"],
    "linkedin": "fishjojo1"
  },
  {
    "name": "Yap Yuan Xi",
    "school": "NUSH",
    "github": "Haloen",
    "level": "JC2",
    "img": "ppl/yuanxi.jpg",
    "bio": "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development.",
    "conf": ["FOSS", "June", "September"],
    "linkedin": "yuan-xi-yap-5b3205242"
  },
  {
    "name": "Ashwin Lokesh",
    "school": "YIJC",
    "github": "electron13",
    "level": "JC2",
    "img": "ppl/ashwin.jpg",
    "bio": "I am Ashwin.",
    "conf": ["FOSS", "June"],
    "linkedin": "ashwin-l-82968a202"
  },
  {
    "name": "Kabir Jain",
    "school": "NUSH",
    "github": "ka-bear",
    "level": "JC1",
    "img": "ppl/kabir.png",
    "bio": "Hi I'm Kabir, a JC1 student from NUSH. I love Physics, and especially AI.",
    "conf": ["FOSS"]
  },
  {
    "name": "Mahir Shah",
    "school": "NUSH",
    "github": "RottenLemons",
    "level": "JC1",
    "img": "ppl/mahir.png",
    "bio": "NUSH student who likes CTFs, AI and C++. Games and dies in Physics sometimes.",
    "conf": ["FOSS", "June"],
    "linkedin": "mahir-shah-681aa0261"
  },
  {
    "name": "Jed Lim",
    "school": "NUSH",
    "github": "jedlimlx",
    "level": "JC2",
    "img": "ppl/jed.png",
    "bio": "Hi I'm Jed, a JC2 student from NUSH who is passionate about AI and Physics (particularly Fluid Dynamics).",
    "conf": ["FOSS", "June"]
  },
  {
    "name": "James Tan Dejun",
    "school": "RVHS",
    "level": "JC2",
    "img": "ppl/james_tan.png",
    "github": "Dragonslayer262",
    "bio": "I'm a JC2 student in RVHS. I mainly enjoy doing competitive programming and machine learning.",
    "conf": ["June"],
    "linkedin": "james-tan-dejun"
  },
  {
    "name": "Edwin Liew",
    "school": "ACJC",
    "github": "edwinlmy5",
    "level": "JC2",
    "img": "ppl/Edwin_Liew.jpg",
    "bio": "My name is Edwin and I'm one of the project managers for ACJC's Technology Council",
    "conf": ["June"]
  },
  {
    "name": "Wayne Ang",
    "school": "ACJC",
    "github": "Zernier",
    "level": "JC2",
    "img": "ppl/Wayne_Ang.JPG",
    "bio": "I am a JC2 from ACJC currently. I like reading books, listening to new music and playing the guitar.",
    "conf": ["June"]
  },
  {
    "name": "Seth Olav Yong",
    "school": "SP",
    "github": "idkSeth",
    "level": "Poly 2",
    "img": "ppl/seth.jpeg",
    "bio": "Hi, I'm Seth, a Poly 2 student from SP.",
    "conf": ["June"],
    "linkedin": "seth-yong-00672b229"
  },
  {
    "name": "Du Yuhan",
    "school": "MGS",
    "github": "TwelvePenguins",
    "level": "Year 4",
    "img": "ppl/duyuhan.jpeg",
    "bio": "Year 4 student from MGS. Your average workaholic penguin and Red Dead Redemption 2 enjoyer.",
    "conf": ["June", "September"],
    "linkedin": "yuhan-du-12p3ngu5"
  },
  {
    "name": "Ma Weiyi",
    "school": "DHS",
    "github": "fwyr",
    "level": "Year 4",
    "img": "ppl/maweiyi.jpeg",
    "bio": "Hello! I'm Weiyi, a DHS student who just happens to like computers.",
    "conf": ["June"]
  },
  {
    "name": "Saw Ze Dong",
    "school": "DHS",
    "github": "sawzedong",
    "level": "JC1",
    "img": "ppl/sawzedong.jpeg",
    "bio": "Hi, i'm a JC1 student from Dunman High, interested in programming websites, trying out AI and more",
    "conf": ["June", "September"],
    "linkedin": "ze-dong-saw-9b3936242",
    "website": "https://sawzedong.github.io/portfolio/"
  },
  {
    "name": "Cheong Jun Kai Harry",
    "school": "DHS",
    "github": "Harry-cheong",
    "level": "JC1",
    "img": "ppl/harry.jpg",
    "bio": "I'm Harry. I love tinkering with tech. I love card throwing.",
    "conf": ["June", "September"],
    "linkedin": "harry-cheong-72bbb5212"
  },
  {
    "name": "Oon Zheng Kang",
    "school": "DHS",
    "github": "ozk100",
    "level": "JC1",
    "img": "ppl/Oon_Zheng_Kang.jpg",
    "bio": "Hi, I'm Zheng Kang, a JC1 student from DHS.",
    "conf": ["September"]
  },
  {
    "name": "Chee Justin Suwattana",
    "school": "DHS",
    "github": "Giganaer",
    "level": "JC1",
    "img": "ppl/Chee_Justin.jpg",
    "bio": "Hi I'm Justin, a JC1 computing student in DHS who also likes playing guitar",
    "conf": ["September"]
  },
  {
    "name": "Liu Wenkai",
    "school": "NUSH",
    "github": "squi-ddy",
    "level": "JC1",
    "img": "ppl/wenkai.jpg",
    "bio": "Hi, I'm Wenkai, a JC1 student from NUSH.",
    "website": "https://squiddy.me/",
    "conf": ["September"]
  },
  {
    "name": "Zeyu Yao (Peter)",
    "school": "SAIS",
    "github": "cytronicoder",
    "level": "Grade 9",
    "img": "ppl/Peter.jpeg",
    "bio": "I'm a student developer currently studying in Singapore.",
    "linkedin": "cytronicoder",
    "conf": ["September"],
    "website": "https://www.cytronicoder.com/"
  },
  {
    "name": "Neil Bhandari",
    "school": "VJC",
    "level": "JC1",
    "img": "ppl/neil.png",
    "github": "Armweak5104",
    "bio": "I will be in JC1 in 2023. I code mainly in python and C++. I also fail captcha tests too much.",
    "conf": ["September"]
  },
  {
    "name": "Cervon Wong",
    "school": "NUSH",
    "github": "cervonwong",
    "level": "JC2",
    "img": "ppl/cervon.jpg",
    "bio": "Hi, I'm Cervon, JC2 student from NUSH! AI, Robotics and Linguistics nerd 😎",
    "conf": ["September"],
    "linkedin": "cervonwong",
    "website": "https://cervonwong.com/"
  },
  {
    "name": "Mayukh Das",
    "school": "NUSH",
    "github": "jeffilluminati",
    "level": "JC2",
    "img": "ppl/mayukh.jpg",
    "conf": ["September"]
  },
  {
    "name": "Lee I-Shiang",
    "school": "NUSH",
    "github": "BenTan101",
    "level": "JC2",
    "img": "ppl/Lee I-Shiang.jpeg",
    "bio": "Hi, I'm I-Shiang :P I like coding, chemistry, and cheese.",
    "conf": ["September"],
    "linkedin": "lee-i-shiang"
  },
  {
    "name": "Jerome Palayoor",
    "school": "ASRJC",
    "github": "jeromepalayoor",
    "level": "JC1",
    "img": "ppl/Jerome_Palayoor.png",
    "bio": "I love math and coding and recently picked up cyber security.",
    "conf": ["December"],
    "linkedin": "jeromepalayoor",
    "website": "https://jeromepalayoor.com/"
  },
]


const organisers = [

  // {
  //   "name": "Heng Yi Wang",
  //   "school": "DHS",
  //   "github": "dhshengyiwang",
  //   "level": "JC2",
  //   "img": "ppl/yiwang.jpg",
  //   "bio": "I am a JC2 student studying at Dunman High School. My favourite field in Computer Science is Artificial Intelligence."
  // },

  // {
  //   "name": "Isaac Yeap Sheng Rong",
  //   "school": "HCI",
  //   "github": "iysr",
  //   "level": "JC2",
  //   "img": "ppl/isaacyeap.jpeg"
  // },
  // {
  //   "name": "Ng Johnson",
  //   "school": "DHS",
  //   "github": "cpp-johnny",
  //   "level": "JC1",
  //   "img": "ppl/ngjohnson.jpg",
  //   "bio": "Hello! I'm Johnson and I like cats"
  // },
  // {
  //   "name": "Leow Yu Leong",
  //   "school": "DHS",
  //   "github": "jadedrag1108",
  //   "level": "JC2",
  //   "img": "ppl/leow_yuleong.jpg",
  //   "bio": "Hi im Yu Leong. I'm currently a JC2 computing student studying at DHS"
  // },
  // {
  //   "name": "Dylan Alden Kusbiyantoro",
  //   "school": "VJC",
  //   "github": "ZestyP4nda",
  //   "level": "JC1",
  //   "img": "ppl/Dylan_Alden_Kusbiyantoro.jpg",
  //   "bio": "I'm a JC student passionate in web development, artificial intelligence, game design, and robotics"
  // },


]//.sort((a, b) => a.school.localeCompare(b.school) || a.name.localeCompare(b.name))

</script>
<style scoped>
.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}

a {
    text-decoration: none;
    color: #1867C0;
    /* font-weight: bold; */
}

.cover {
    height: 120px;
    width: 100%;
    background: #FF9900;
    position: absolute;
    left: 0px;
    top: 0px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

}

.card .v-btn {
  z-index: 100;
}
.card {
    position: relative;
    display: inline-block;
    background: #ffffff;
    border-radius: 5px;
    box-shadow:  0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
    text-align: center;
    padding: 20px;
    margin: 5px;
    padding-top: 5px;
    transition: all 0.5s;
}
.card .fa-github {
    position: absolute;
    color: #646464;
    font-size: 20px;
    top: 10px;
    right: 10px;
}
.card .card-title {
    color: #434343;
    margin-bottom: -8px;
    font-size: 22px;
    font-weight: 600;
}

.card .card-responsename {
    margin-bottom: 20px;
    color: #797979;
}
.card .card-desc {
    font-weight: 500;
    width: 240px;
    margin: auto;
    display: block;
    color: #3c3c3c;
    height: 120px;
}
.card .card-img-wrapper {
    position: relative;
    height: 160px;
    width: 160px;
    margin: 10px auto;
    margin-bottom: 20px;
}
.card .card-img-wrapper img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}
.card .card-footer {
    margin-top: 40px;
}
.card .card-footer .footer-box {
    position: relative;
    border-top: 2px solid #FF9900;
    box-shadow: 0 3px 6px -1px rgb(0 0 0 / 26%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    border-radius: 5px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: space-around;
}
.card .card-footer .footer-box .box-wrapper {
    position: relative;
}
.card .card-footer .footer-box .box-wrapper .count {
    font-family: 'Courier New','consolas';
    color: #434343;
    font-size: 20px;
    font-weight: 600;
}
.card .card-footer .footer-box .box-wrapper .box-text {
    font-size: 12px;
    font-weight: 600;
    color: #00000085;
    letter-spacing: 0.5px;
}
</style>
