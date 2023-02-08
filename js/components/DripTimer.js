export default {
    template: `
        {{ countDown }} mL
        <button
            v-show="drip.complete != true"
            v-if="countDown === drip.volume"
            @click="countDownTimer()"
            v-model="drip.complete" 
            class="bg-gray-400 hover:bg-gray-600 rounded px-5 py-2"
            >Start
        </button>
    `,
    
    data: function () {
        return {
            countDown: this.drip.volume,
            countDownTimer() {
                if (this.countDown > 0) {
                    setTimeout(() =>{
                        this.countDown -= this.drip.volumeDec
                        this.countDownTimer();
                    }, 1000)
                }
                else {
                    this.drip.complete = true
                    alert (this.drip.name + " is completed. " + this.timer)
                }
            }
        }
    },

    props: {
        drip: Object,
    }
}