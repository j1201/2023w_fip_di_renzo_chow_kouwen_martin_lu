export default {
    name: 'TheManiP',
    props: ['para'],

    template: `
    <div class="manoItem" :id='"para"+para.id'>
        <h3>{{para.thesis}}</h3>
        <article class="manoExt">{{para.parag}}</article>
        <div class="readmoreCtn" @click="hitthisshit">
            <p>Read More</p>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
    </div>
    `,

    methods: {
        hitthisshit() {
            let id = "#para" + this.para.id + ' article'
            //console.log(id)
            let me = document.querySelector(id).classList.toggle('expandIn')
        }
    }



}