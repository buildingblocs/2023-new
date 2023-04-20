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
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" v-for="oic in OICs" :key="oic.name">
      <v-card height="100%" class="card justify-center align-center text-center">
        <div class="cover"></div>
        <div class="card-img-wrapper">
            <img :src="`/src/assets/${oic.img}`" width="400px" />
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
    </v-col>
  </v-row>
  <v-row class="px-8 ma-4 justify-center align-center text-center">
    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h2 style="font-size: 40px;">Our Organisers</h2>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" v-for="organiser in organisers" :key="organiser.name">
      <v-card height="100%" class="card justify-center align-center text-center">
        <div class="cover"></div>
        <div class="card-img-wrapper">
            <img :src="`/src/assets/${organiser.img}`" width="400px" />
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
    </v-col>
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
    "comms": [
      "QA",
      "Games"
    ],
    "bio": "YT here - explorer of AI, Web Dev and Cybersec. If I'm not listening to music, I'm probably on a BuildingBloCS call. :>"
  },
  {
    "name": "Yau Le Qi",
    "school": "TJC",
    "level": "JC2",
    "github": "teraSurfer40141",
    "img": "ppl/leqi.png",
    "comms": [
      "HR",
      "WS"
    ],
    "bio": "Hi, I'm Le Qi, a JC2 student from TJC. I like all things computers 😎."
  },
  {
    "name": "Prannaya Gupta",
    "school": "NUSH",
    "level": "JC2",
    "github": "ThePyProgrammer",
    "img": "ppl/prannay.jpg",
    "comms": [
      "Dev"
    ],
    "bio": "Hi I'm Prannaya, a JC2 Student at NUSH and I like training AI, developing software and golfing the hell out of some code 🙂."
  }
]

const organisers = [
  {
    "name": "Seth Olav Yong",
    "school": "SP",
    "comms": [
      "Dev",
      "HR",
      "QA",
      "WS"
    ],
    "level": "Poly 2",
    "github": "idkSeth",
    "img": "ppl/seth.jpeg"
  },
  {
    "name": "Elston Tan",
    "school": "SP",
    "comms": [
      "HR",
      "WS"
    ],
    "level": "Poly 2",
    "img": "ppl/elston.jpg",
    "github": "Elstuhn",
    "bio": "Hello, I'm Elston. I love learning and playing around with AI, my favourite game is Sekiro."
  },
  {
    "name": "Ashwin Lokesh",
    "school": "YIJC",
    "comms": [
      "Dev",
      "HR"
    ],
    "level": "JC2",
    "img": "ppl/ashwin.jpg",
    "github": "electron13"
  },
  {
    "name": "Jed Lim",
    "school": "NUSH",
    "comms": [
      "Dev",
      "WS"
    ],
    "level": "JC2",
    "img": "ppl/jed.png",
    "github": "jedlimlx",
    "bio": "Hi I'm Jed, a JC2 student from NUSH who is passionate about AI and Physics (particularly Fluid Dynamics)."
  },
  {
    "name": "Kabir Jain",
    "school": "NUSH",
    "comms": [
      "Dev",
      "WS"
    ],
    "level": "JC1",
    "github": "ka-bear",
    "bio": "Hi I'm Kabir, a JC1 student from NUSH. I love Physics, and especially AI.",
    "img": "ppl/kabir.png"
  },
  {
    "name": "Mahir Shah",
    "school": "NUSH",
    "comms": [
      "Dev",
      "HR",
      "WS"
    ],
    "level": "JC1",
    "github": "RottenLemons",
    "img": "ppl/mahir.png",
    "bio": "NUSH student who likes CTFs, AI and C++. Games and dies in Physics sometimes."
  },
  {
    "name": "Cervon Wong",
    "school": "NUSH",
    "comms": [
      "Dev",
      "QA",
      "WS"
    ],
    "level": "JC2",
    "img": "ppl/cervon.jpg",
    "bio": "Hi, I'm Cervon, JC2 student from NUSH! AI, Robotics and Linguistics nerd 😎",
    "github": "cervonwong"
  },
  {
    "name": "Khoo Kai Wen",
    "school": "NUSH",
    "comms": [
      "Dev",
      "WS"
    ],
    "level": "JC1",
    "github": "deadly-nightshade",
    "img": "ppl/kaiwen.jpg"
  },
  {
    "name": "Yap Yuan Xi",
    "school": "NUSH",
    "comms": [
      "Dev",
      "HR",
      "QA"
    ],
    "level": "JC2",
    "github": "Haloen",
    "bio": "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development.",
    "nickname": "Halogen",
    "img": "ppl/yuanxi.jpg"
  },
  {
    "name": "Liu Wenkai",
    "school": "NUSH",
    "comms": [
      "Dev",
      "WS",
      "Games"
    ],
    "level": "JC1",
    "github": "squi-ddy",
    "img": "ppl/wenkai.jpg"
  },
  {
    "name": "Zayan Karimi",
    "school": "NUSH",
    "comms": [
      "Dev",
      "HR",
      "WS"
    ],
    "level": "JC2",
    "github": "waffleSheep",
    "img": "ppl/zayan.jpg",
    "bio": "JC2 student from NUSH. PhD in rizzology from the Pete Davidson school of chasing tail."
  },
  {
    "name": "Mayukh Das",
    "school": "NUSH",
    "comms": [
      "Dev",
      "HR",
      "WS",
      "Games"
    ],
    "level": "JC2",
    "github": "jeffilluminati",
    "img": "ppl/mayukh.jpg"
  },
  {
    "name": "Kannan Vishal",
    "school": "NUSH",
    "comms": [
      "Dev",
      "QA"
    ],
    "level": "JC2",
    "img": "ppl/vishal.png",
    "github": "delargement",
    "bio": "Hey, I'm a sixth year from NUSH who likes post-punk, post-industrial and post-hardcore."
  },
  {
    "name": "Wang Zerui",
    "school": "NUSH",
    "comms": [
      "Dev",
      "HR"
    ],
    "level": "Sec 4",
    "img": "ppl/zerui.jpg",
    "github": "Wang-Zerui",
    "bio": "Hi I'm Zerui from NUSH, I like CTFs and blahajs!"
  },
  {
    "name": "Renoir Tan",
    "school": "RI",
    "comms": [
      "Dev",
      "HR",
      "QA",
      "Games"
    ],
    "level": "JC2",
    "github": "RenoirTan",
    "img": "ppl/renoir.jpg"
  },
  {
    "name": "Ishneet Singh",
    "school": "TJC",
    "comms": [
      "Dev"
    ],
    "level": "JC2",
    "img": "ppl/ishneet.jpg",
    "github": "Ishneet0710"
  },
  {
    "name": "Dhanvine Rameshkumar",
    "school": "TJC",
    "comms": [
      "Dev",
      "HR",
      "WS",
      "Games"
    ],
    "level": "Sec 4",
    "github": "Dhanvine321",
    "img": "ppl/dhanvine.jpeg"
  },
  {
    "name": "Cher Jin En",
    "school": "TJC",
    "comms": [
      "WS",
      "Admin"
    ],
    "level": "JC1",
    "img": "ppl/cherjinen.jpeg",
    "github": "shindeux",
    "bio": "Hi, I listen to MAMAMOO and play Solitaire for fun"
  },
  {
    "name": "Bryant Shi",
    "school": "TJC",
    "comms": [
      "WS",
      "Admin"
    ],
    "level": "JC1",
    "img": "ppl/bryant.jpeg",
    "github": "flame-staff",
    "bio": "Yo My name is Bryant. I am a fellow CS student and heavily enjoy games"
  },
  {
    "name": "Isaac Kok",
    "school": "DHS",
    "comms": [
      "HR",
      "Games"
    ],
    "level": "JC2",
    "img": "ppl/isaac.jpg",
    "github": "Kweice",
    "bio": "Hi I'm Isaac. I do card tricks, listen to mandopop and my favourite artist is Joker Xue."
  },
  {
    "name": "Ian Goh",
    "school": "DHS",
    "github": "TheRoundRoads",
    "comms": [
      "WS"
    ],
    "img": "ppl/ian.jpg",
    "bio": "Hi I'm Ian Goh! I'm currently a JC2 computing student studying in DHS. I also enjoy watching anime!"
  },
  {
    "name": "Heng Yi Wang",
    "school": "DHS",
    "github": "dhshengyiwang",
    "level": "JC2",
    "img": "ppl/yiwang.jpg",
    "comms": [
      "WS"
    ],
    "bio": "Yi Wang is a JC2 student studying at Dunman High School. His favourite field in Computer Science is Artificial Intelligence."
  },
  {
    "name": "Ma Weiyi",
    "school": "DHS",
    "github": "fwyr",
    "level": "Year 4",
    "img": "ppl/maweiyi.jpeg",
    "comms": [
      "Dev"
    ],
    "bio": "Hello! I'm Weiyi, a DHS student who just happens to like computers."
  },
  {
    "name": "Saw Ze Dong",
    "school": "DHS",
    "github": "sawzedong",
    "level": "JC1",
    "img": "ppl/sawzedong.jpeg",
    "comms": [
      "Dev"
    ],
    "bio": "Hi, i'm a JC1 student from Dunman High, interested in programming websites, trying out AI and more"
  },
  {
    "name": "Tse Min Jia",
    "school": "DHS",
    "github": "MinJiaTse",
    "level": "JC1",
    "img": "ppl/tseminjia.jpeg",
    "comms": [
      "QA"
    ],
    "bio": "Hello, i’m Min Jia :), a Year 5 student in Dunman High School. Nice to meet you! 😁"
  },
  {
    "name": "Suraj Kumar",
    "school": "TJC",
    "github": "Tsk78",
    "level": "JC2",
    "img": "ppl/suraj.png",
    "comms": [
      "HR",
      "DEV"
    ],
    "bio": "Hello, I'm Suraj and coding with black coffee and music is my thing."
  },
  {
    "name": "Le Duc Minh",
    "school": "HCI",
    "github": "ID-minh4354",
    "level": "JC2",
    "img": "ppl/leducminh.jpeg",
    "comms": [
      "Admin",
      "HR"
    ]
  },
  {
    "name": "Joey Tang",
    "school": "HCI",
    "github": "fishjojo1",
    "level": "JC2",
    "img": "ppl/joeytang.jpeg",
    "comms": [
      "WS",
      "DEV"
    ]
  },
  {
    "name": "Isaac Yeap Sheng Rong",
    "school": "HCI",
    "github": "iysr",
    "level": "JC2",
    "img": "ppl/isaacyeap.jpeg",
    "comms": [
      "HR",
      "Admin"
    ]
  },
  {
    "name": "Du Yuhan",
    "school": "MGS",
    "github": "TwelvePenguins",
    "level": "Year 4",
    "img": "ppl/duyuhan.jpeg",
    "comms": [
      "HR",
      "Admin"
    ],
    "bio": "Year 4 student from MGS. Your average workaholic penguin and Red Dead Redemption 2 enjoyer."
  },
  {
    "name": "Jessie Chin Kit Hey",
    "school": "HCI",
    "github": "jcc-kh",
    "level": "JC2",
    "img": "ppl/jessie.jpg",
    "comms": [
      "WS",
      "DEV"
    ]
  },
  {
    "name": "Ng Johnson",
    "school": "DHS",
    "github": "cpp-johnny",
    "level": "JC1",
    "img": "ppl/ngjohnson.jpg",
    "comms": [
      "Dev"
    ],
    "bio": "Hello! I’m Johnson and I like cats"
  },
  {
    "name": "Edwin Liew",
    "school": "ACJC",
    "github": "edwinlmy5",
    "level": "JC2",
    "img": "ppl/Edwin_Liew.jpg",
    "comms": [
      "WS"
    ],
    "bio": "My name is Edwin and I'm one of the project managers for ACJC's Technology Council"
  },
  {
    "name": "Justin Wang",
    "school": "ACJC",
    "github": "plwanejexperto",
    "level": "JC2",
    "img": "ppl/Justin_Wang.jpeg",
    "comms": [
      "QA"
    ],
    "bio": "I took O Level Computing and am currently taking A level computing. I have an interest in designing UI and UX and I am passionate to learn more about computing :)"
  },
  {
    "name": "Oon Zheng Kang",
    "school": "DHS",
    "github": "ozk100",
    "level": "JC1",
    "img": "ppl/Oon_Zheng_Kang.jpg",
    "comms": [
      "HR"
    ],
    "bio": "Hi, I'm Zheng Kang, a JC1 student from DHS."
  },
  {
    "name": "Wayne Ang",
    "school": "ACJC",
    "github": "Zernier",
    "level": "JC2",
    "img": "ppl/Wayne_Ang.JPG",
    "comms": [
      "Pubs"
    ],
    "bio": "I am a JC2 from ACJC currently. I like reading books, listening to new music and playing the guitar."
  },
  {
    "name": "Leow Yu Leong",
    "school": "DHS",
    "github": "jadedrag1108",
    "level": "JC2",
    "img": "ppl/leow_yuleong.jpg",
    "comms": [
      "Dev"
    ],
    "bio": "Hi im Yu Leong. I'm currently a JC2 computing student studying at DHS"
  },
  {
    "name": "Eugene Ang",
    "school": "TJC",
    "github": "python-noob-dotcom",
    "level": "JC1",
    "img": "ppl/eugeneang.jpg",
    "comms": [
      "HR"
    ],
    "bio": "Hi, I'm Eugene and i believe that caffeine is a miracle drug"
  },
  {
    "name": "Cheong Jun Kai Harry",
    "school": "DHS",
    "github": "Harry-cheong",
    "level": "JC1",
    "img": "ppl/harry.jpg",
    "comms": [
      "Admin",
      "Dev",
      "WS"
    ],
    "bio": "I'm Harry. I love tinkering with tech. I love card throwing."
  },
  {
    "name": "Mahamantra Sivagnanam",
    "school": "GIIS",
    "github": "mahaachu",
    "level": null,
    "img": "ppl/Mahamantra_Sivagnanam.jpeg",
    "comms": [
      "Admin"
    ],
    "bio": "Hi! My name's Mahamantra Sivagnanam. I really enjoy programming and coming up with new ideas and innovations"
  },
  {
    "name": "Chee Justin Suwattana",
    "school": "DHS",
    "github": "Giganaer",
    "level": "JC1",
    "img": "ppl/Chee_Justin.jpg",
    "comms": [
      "Admin"
    ],
    "bio": "Hi I'm Justin, a JC1 computing student in DHS who also likes playing guitar"
  },
  {
    "name": "Adapaka Vinita",
    "school": "GIIS",
    "github": "vi-nita",
    "level": "JC1",
    "img": "ppl/adapaka_vinita.jpg",
    "comms": [
      "HR"
    ],
    "bio": "I am a fast learner and am passionate about coding and programming. I also enjoy dancing."
  },
  {
    "name": "Tang Jiaxuan",
    "school": "TJC",
    "github": "Jiaxuan06",
    "level": "JC1",
    "img": "ppl/Jiaxuan.jpg",
    "comms": [
      "Admin"
    ],
    "bio": "Hello! I am Jiaxuan, a JC1 student from TJC annd I am a coffee addict 🤣"
  },
  {
    "name": "Clara Lee",
    "school": "ASRJC",
    "github": "Ninrolds6",
    "level": "JC1",
    "img": "ppl/Clara_Lee.jpeg",
    "comms": [
      "WS"
    ],
    "bio": "I'm Clara from ASRJC! My CCA is badminton I take computing for A levels. I crochet and do coding in my free time"
  },
  {
    "name": "Ashley Alexster",
    "school": "TJC",
    "github": "IsoceledAsh",
    "level": "JC1",
    "img": "ppl/Ashley_Alexster.jpg",
    "comms": [
      "Admin"
    ],
    "bio": "Hi, I'm Ashley! I have always been interested in CS stuff since I was young, and currently take Computing as a subject in JC"
  },
  {
    "name": "Kothari Kashvi Chintan",
    "school": "TJC",
    "github": "kat-fly",
    "level": "JC1",
    "img": "ppl/Kashvi_Kothari.jpg",
    "comms": [
      "Admin"
    ],
    "bio": "I have been a member of Infocomm Club since primary school. I currently take H2 computing."
  },
  {
    "name": "Quoid Jing-Xuan Andrel",
    "school": "TJC",
    "github": "antndrel",
    "level": "JC1",
    "img": "ppl/andrel.jpg",
    "comms": [
      "Pubs"
    ],
    "bio": "Hello! I am Andrel from TJC"
  },
  {
    "name": "Celine Natalie Wongso Lesmono",
    "school": "NIL",
    "github": "celnat312",
    "level": "NIL",
    "img": "ppl/celine_natalie.jpeg",
    "comms": [
      "Pubs",
      "QA"
    ],
    "bio": "I took H2 computing when I was in JC and I joined BBCS in 2021 and 2022!"
  },
  {
    "name": "Jerome Palayoor",
    "school": "ASRJC",
    "github": "jeromepalayoor",
    "level": "JC1",
    "img": "ppl/Jerome_Palayoor.png",
    "comms": [
      "Dev"
    ],
    "bio": "I love math and coding and recently picked up cyber security."
  },
  {
    "name": "Jovn Setiawan Jaya",
    "school": "TJC",
    "github": "Benjjji",
    "level": "JC1",
    "img": "ppl/Jovn.jpg",
    "comms": [
      "Pubs"
    ],
    "bio": "Hi, I'm Jovn. ✨I am an average human being✨"
  },
  {
    "name": "Lim Jack",
    "school": "TJC",
    "github": "jack-0000000",
    "level": "JC1",
    "img": "ppl/Lim_Jack.jpg",
    "comms": [
      "Admin"
    ],
    "bio": "I am very passionate about science and technology. I am keen in learning more about computer science and developing my own programmes."
  },
  {
    "name": "Asha Solomon",
    "school": "TJC",
    "github": "Ash3926",
    "level": "JC1",
    "img": "ppl/Asha_Solomon.jpg",
    "comms": [
      "Admin"
    ],
    "bio": "I'm Asha from TJC, I like running and crafts. Favorite subjects(at O's) are Maths and Physics :)"
  },
  {
    "name": "Chua Tze Xuan, Sophia",
    "school": "CGSS",
    "github": "TAUVX",
    "level": "Sec4",
    "img": "ppl/Sophia_Chua.JPG",
    "comms": [
      "Pubs"
    ],
    "bio": "I am interested in the Fine Arts and like to make art when inspiration strikes me."
  },
  {
    "name": "Dylan Alden Kusbiyantoro",
    "school": "VJC",
    "github": "ZestyP4nda",
    "level": "JC1",
    "img": "ppl/Dylan_Alden_Kusbiyantoro.jpg",
    "comms": [
      "Dev"
    ],
    "bio": "I’m a JC student passionate in web development, artificial intelligence, game design, and robotics"
  },
  {
    "name": "Sanke Mahit",
    "school": "YIJC",
    "github": "AppleGesus",
    "level": "JC2",
    "img": "ppl/Sanke_Mahit.jpg",
    "comms": [
      "QA"
    ],
    "bio": "My name is Sanke Mahit and I am in JC2 this year! I was a member in last year's buildingblocs as well"
  },
  {
    "name": "Tan Junheng",
    "school": "NUSH",
    "github": "azazazo",
    "level": "Sec4",
    "img": "ppl/Tan_Junheng.png",
    "comms": [
      "Dev"
    ],
    "bio": "biggest blåhaj fan🦈❤️❤️i like crypto(graphy) and sometimes play ctfs"
  },
  {
    "name": "Teh Kim Wee",
    "school": "ASRJC",
    "github": "DangerousPotential",
    "level": "JC2",
    "img": "ppl/Teh_Kim_Wee.jpg",
    "comms": [
      "QA"
    ],
    "bio": "I'm Kim Wee, currently studying in ASRJC. Python is my main programming language"
  }
].sort((a, b) => a.school.localeCompare(b.school) || a.name.localeCompare(b.name))

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
    font-family: 'consolas';
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
