import TheManiPara from "./components/ManiPara.js";
import TheCampaignComponent from "./components/CampaignCom.js";

(() => {
    const { createApp } = Vue

    createApp({
        // created() {
        //     // get your remote data here 
        //     //fetch('./data/data.json')
        //     fetch('./scripts/json.php')
        //         .then(res => res.json()) 
        //         .then(data => this.petitionData = data) 
        //     .catch(error => {
        //         console.error(error);
        //     });
        // },
        // created() {
        //     // get your remote data here 
        //     fetch('./data/data.json')
        //     //fetch('./scripts/json.php')
        //         .then(res => res.json()) 
        //         .then(data => this.petitionDataNew = data) 
        //     .catch(error => {
        //         console.error(error);
        //     });
        // },
        created() {
            // get your remote data here 
            fetch('./data/manifesto.json')
            //fetch('./scripts/json.php')
                .then(res => res.json()) 
                .then(data => this.maniPara = data) 
            .catch(error => {
                console.error(error);
            });

            fetch('http://localhost:8000/index.php/petitioners')
            // fetch('./data/data.json')

                .then(res => res.json()) 
                .then(data => this.petitionDataNew = data) 
            .catch(error => {
                console.error(error);
            });

            fetch('./data/campaign.json')
                .then(res => res.json()) 
                .then(data => this.campaignData = data) 
            .catch(error => {
                console.error(error);
            });
        },
        
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        
        data() {
            return {
                showLoader: setTimeout(this.hideLoader, 2000),
                sideBar: false,
                currentSection: '',
                sections: [],
                petitionData: {},
                petitionDataNew: {},
                isActive: false,
                //paras: [1,2,3],
                maniPara: {},
                campaignData: {},
                name: '',
                showForm: true,
                submitted: false
            }
        },

        methods: {
            showMobileMenu() {
                this.sideBar = true;
                document.querySelector(".sidebar").classList.toggle("visible");
            },

            handleScroll() {
                if (window.pageYOffset >= document.querySelector('#showMenu').offsetTop - 100) {
                  this.sideBar = true;
                } else {
                  this.sideBar = false;
                }
            },

            openCarousal() {
                //this.isActive = !this.isActive
                document.querySelector('#winpirnt').classList.toggle('campaignOpen')
            },

            openVideo() {
                //this.isActive = !this.isActive
                document.querySelector('#minidoc').classList.toggle('campaignOpen')
            },

            formSubmitted() {
                this.showForm = false;
                this.submitted = true;
            },
            
            submitForm() {
                fetch('http://localhost:8000/petitioners', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name: this.name,
                  }),
                })
                  .then(response => response.json())
                  .then(data => {
                    // handle the response data
                    console.log(data);
                  })
                  .catch(error => {
                    // handle errors
                    console.error(error);
                  });
            }

        },

        components: {
            manip: TheManiPara,
            campcom: TheCampaignComponent
        }


        
    }).mount('#app')

})()
