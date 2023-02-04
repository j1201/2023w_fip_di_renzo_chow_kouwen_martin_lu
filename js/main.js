(() => {
    const { createApp } = Vue

    createApp({
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },

        mounted() {
            
        },

        data() {
            return {
                //showLoader: setTimeout(this.hideLoader, 2000),
                sideBar: false
                
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

            hideLoader() {
                document.querySelector("#preloader").style.display = "none";
            }
        }
    }).mount('#app')

})()
