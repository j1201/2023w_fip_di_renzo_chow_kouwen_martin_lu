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
                showLoader: setTimeout(this.hideLoader, 2000),
                sideBar: false,
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

            // hideLoader() {
            //     document.querySelector("#preloader").style.display = "none";
            // },
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
