(() => {
    const { createApp } = Vue

    createApp({
        created() {
            // get your remote data here 
            fetch('./data/data.json')
            //fetch('./scripts/json.php')
                .then(res => res.json()) 
                .then(data => this.petitionData = data) 
            .catch(error => {
                console.error(error);
            });
        },
        
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        
        data() {
            return {
               // showLoader: setTimeout(this.hideLoader, 2000),
                sideBar: false,
                currentSection: '',
                sections: [],
                petitionData: {}
                
            }
        },

        methods: {
            showMobileMenu() {
                this.sideBar = true;
                document.querySelector(".sidebar").classList.toggle("visible");
            },

            handleScroll() {
                if (window.pageYOffset >= document.querySelector('#showMenu').offsetTop) {
                  this.sideBar = true;
                } else {
                  this.sideBar = false;
                }
              }

            // hideLoader() {
            //     document.querySelector("#preloader").style.display = "none";
            // },

        }
    }).mount('#app')

})()
