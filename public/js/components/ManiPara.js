export default {
    name: 'TheManiP',
    props: ['para'],

    template: `
    <div class="manoItem" :id='"para"+para.id'>
        <h3>{{para.thesis}}</h3>
        <article class="manoExt">{{para.parag}}</article>
        <div class="readmoreCtn" @click="expandBox">
            <p>Read More</p>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
    </div>
    `,

    methods: {
        expandBox() {
            let id = "#para" + this.para.id + ' article';
            let arrow = document.querySelector("#para" + this.para.id + ' .fa-chevron-down');
            document.querySelector(id).classList.toggle('expandIn');
            arrow.classList.toggle('rotate');
        }
    }



}