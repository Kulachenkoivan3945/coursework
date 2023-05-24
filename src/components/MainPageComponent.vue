<template>
  <div class="title">
    <img src="../assets/images/mainPage/title-bg2.jpg" alt="">
    <div class="title-text">
      <h1>Bouqet Shop</h1>

      <h2>Дарите красоту и радость вместе с нами!</h2>
      <p>
        Наша компания предлагает не только широкий ассортимент цветов и растений, но и профессиональную помощь в подборе и
        оформлении букетов.
      </p>
      <div class="title-btn">
        <button>
          <router-link to="/">Перейти к выбору</router-link>
        </button>
      </div>
    </div>
  </div>
  <div class="privilege">
    <h3>Почему выбирают нас</h3>
    <div class="privilege-cards-container">
      <PrivelegeCard v-for="privilege in privileges" :key="privilege" :image="privilege.image" :title="privilege.title"
        :description="privilege.description" />
    </div>

  </div>
  <div class="cards">
    <h3>Чем мы занимаемся</h3>
    <div class="cards-about-container">
    
      <div class="card-about">
        <CardAbout :CardInfo="CardsInfo[0]"></CardAbout>
      </div>
  
      <div class="card-about card-about-down">
        <CardAbout :CardInfo="CardsInfo[1]"></CardAbout>
      </div>
  
    </div>
  </div>
</template>

<script>
import CardAbout from '@/components/CardsAboutComponent.vue'
import PrivelegeCard from '@/components/PrivelegeCardComponent.vue'

export default {
  name: 'MainPageComponent',
  components: {
    CardAbout,
    PrivelegeCard
  },
  data() {
    return {
      CardsInfo: [{
        
        slidersImgs: [
          '1656332187_17-mykaleidoscope-ru-p-samie-roskoshnie-buketi-tsvetov-krasivo-fo-17.jpg',
          '1656345369_46-mykaleidoscope-ru-p-tsvetnie-rozi-buket-krasivo-foto-50.jpg',
          '2748487_big.1617565079_27-p-oboi-dizainerskie-buketi-32.id-o_1f9dm25lr1b3qtvlt781k0ipvqd.jpg',
          '41-20220417_155242-1536x1020.jpg',
          '3fbb745dbad5ecbb3decac86a09d9eee.jpg',
          '69-20220417_155248-1536x1152.jpg',
          '7c0aa1cf4b7a620.jpg',
          'bukety_k_vypusknomu1-2048x1280.jpg'
        ],
        description: `Одна из наших основных задач – помочь клиенту выбрать нужный букет, который будет идеально
        подходить к любому событию. 
        Для этого у нас есть свои эксперты-флористы, которые помогают
        покупателям выбрать оптимальный вариант цветов, учитывая их вкусы и предпочтения.`
      },
      {
        slidersImgs: [
          'decor1.jpg',
          'decor2.jpg',
          'decor3.jpg',
          'decor4.jpg'
          
        ],
        description: `Помимо продажи цветов, мы также предлагаем услуги по декорированию помещений цветами или оформлению свадеб, юбилеев, корпоративных мероприятий и других торжественных событий.`
      }],
      privileges: [
        {
          image: 'fast.png',
          title: 'Быстро',
          description: 'Мы ценим время клиентов и по возможности стараемся выполнить работы в минимальный срок'
        },
        {
          image: 'quality.png',
          title: 'Качественно',
          description: 'При составлении букетов мы используем только свежие цветы и качественные материалы'
        },
        {
          image: 'cheap.png',
          title: 'Доступно',
          description: 'У нас самые низкие цены, в которые включены работа мастера, расходные материалы и доставка'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 1.2rem;
  z-index: 1;
  width: 100%;
  display: inline-block;
  position: relative;
  transform: translateY(7px);

}

.title img+.title-text {
  position: absolute;
  top: 0;
  left: 0;
}

.title img {
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}

.title-text {
  width: 30%;
  margin-top: 15%;
  margin-left: 30%;
  padding: 80px;
  padding-left: 150px;
  height: fit-content;
  border-radius: 25%;
  background-color: rgba(255, 255, 255, 0.184);
  /*background: linear-gradient(to bottom,rgba(250, 212, 245, 0.57),rgb(255, 180, 255),rgba(242, 219, 245, 0.959));*/

}

.title-btn {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}

.title-btn button {
  padding: 10px 30px 10px 30px;
  border-radius: 20px;
  border: 0px solid transparent;
  background: linear-gradient(to right, rgba(239, 92, 220, 0.57), rgb(205, 70, 242), rgba(194, 25, 250, 0.959), rgba(104, 25, 250, 0.959), rgba(25, 182, 250, 0.959));
  background-size: 200% 100%;
  box-shadow: 0 4px 15px 0 rgba(243, 47, 194, 0.75);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.title-btn button:hover {

  background-position: 100% 0;
  box-shadow: 5px 5px 15px 10px rgba(243, 47, 194, 0.75);
}

.title-btn a {
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
}


.privilege {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 100px;
  background-image: url("../assets/images/mainPage/privilege-bg.jpg");
  background-size: cover;

}

.privilege h3 {
  font-size: 1.7rem;
  font-weight: bold;
  color: rgb(255, 255, 255);
}

.privilege-cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: max-content;
  gap: 60px 10px;
  height: 100%;
  width: 80%;
}

.cards{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(255, 245, 207);
background: linear-gradient(90deg, rgba(249,234,171,0.9859593495601365) 1%, rgba(247, 199, 141, 0.983) 16%, rgba(246, 220, 148, 0.804) 41%, rgb(243, 225, 127) 59%, rgba(240,220,187,1) 100%);
}
.cards h3{
  font-size: 1.7rem;
}
.cards-about-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 1000px;
  width: 90%;
  margin: 30px;
}

.card-about {
  max-height: 50%;
  min-height: 50%;
  max-width: 50%;
  min-width: 50%;
}

.card-about-down {
  margin-top: 30%;
}

@media(min-width:1800px) {
  .title {
    background-size: cover;
  }
}

@media(max-width:1700px) {
  .title-text {
    margin-top: 10%;
    margin-left: 27%;
  }
}

@media(max-width:1400px) {
  .title-text {
    margin-top: 10%;
    margin-left: 26%;
  }
}</style>
