export default {
    name: 'TheManiP',
    props: ['para'],

    template: `
    <div class="manoItem" :id='"para"+para'>
        <span>{{para}}</span>
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci reprehenderit accusamus ab. Iste a consequuntur aliquid magnam</h3>
        <article class="manoExt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci reprehenderit accusamus ab. Iste a consequuntur aliquid magnam praesentium saepe optio rem harum suscipit illo qui sed, ipsa odio nihil?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci reprehenderit accusamus ab. Iste a consequuntur aliquid magnam praesentium saepe optio rem harum suscipit illo qui sed, ipsa odio nihil?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci reprehenderit accusamus ab. Iste a consequuntur aliquid magnam praesentium saepe optio rem harum suscipit illo qui sed, ipsa odio nihil?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci reprehenderit accusamus ab. Iste a consequuntur aliquid magnam praesentium saepe optio rem harum suscipit illo qui sed, ipsa odio nihil?Lorem, ipsum dolor sit amet consectetur</article>
        <div class="readmoreCtn" @click="hitthisshit">
            <p>Read More</p>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
    </div>
    `,

    methods: {
        hitthisshit() {
            let id = "#para" + this.para + ' article'
            //console.log(id)
            let me = document.querySelector(id).classList.toggle('expandIn')
        }
    }



}