import TheManiPara from "./components/ManiPara.js";

(() => {
    const { createApp } = Vue

    createApp({
        created() {
        //     window.addEventListener('scroll', this.handleScroll);
        // },

        // mounted() {
            
        },

        data() {
            return {
                sideBar: false,
                currentSection: '',
                sections: [],
                petitionData: {}
                isActive: false,
                paras: [1,2,3]

            }
        },

        methods: {
            showMobileMenu() {
                this.sideBar = true;
                document.querySelector(".sidebar").classList.toggle("visible");
            },

            handleScroll() {
                if(window.location.href = "#showMenu") {
                   this.sideBar = true;
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

        },

        components: {
            manip: TheManiPara
        }


    }).mount('#app')

})()
