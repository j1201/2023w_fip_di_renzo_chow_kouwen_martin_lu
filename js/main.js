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

            fetch('http://localhost:8000/petitioners')
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
            }

        },

        components: {
            manip: TheManiPara,
            campcom: TheCampaignComponent
        }


        
    }).mount('#app')

})()
