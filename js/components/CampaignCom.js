export default {
    name: 'TheCampaignComponent',
    props: ['block'],

    template: `
    <div class="campaignBlock" :id='"camp"+block.id'>
    <div class="campaignContain" @click="openCarousalCom" :style="'background-image: url(/images/' + block.campBG + ')'">
        <div class="campaignHeading">
        <h3>{{block.name}}</h3>
            <p>{{block.desc}}</p>
        </div>
    </div>
    <div id="carouselExampleIndicators" class="carousel collapse slide " data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active carouselOver">
            <img class="d-block w-100" :src='"/images/" + block.image1' alt="First slide">
          </div>
          <div class="carousel-item carouselOver">
            <img class="d-block w-100" :src='"/images/" + block.image2' alt="Second slide">
          </div>
          <div class="carousel-item carouselOver">
            <img class="d-block w-100" :src='"/images/" + block.image3' alt="Third slide">
          </div>
          <div class="carousel-item carouselOver">
            <img class="d-block w-100" :src='"/images/" + block.image4' alt="Fourth slide">
          </div>
          <div class="carousel-item carouselOver">
            <img class="d-block w-100" :src='"/images/" + block.image5' alt="Fifth slide">
          </div>

        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
  </div>
    `,

    methods: {
        openCarousalCom() {
            let id = "#camp" + this.block.id
            document.querySelector(id).classList.toggle('campaignOpen')
        }
    }



}