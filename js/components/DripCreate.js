import DripTimer from './DripTimer.js';

export default {
    components: { DripTimer },
    template: `
        <form @submit.prevent="add">
            <div class = "text-white flex border border-white p-2">
                <label class ="p-2 pl-10 pr-20">Medication</label>
                <label class ="p-2 pl-20 pr-20 border-l">Rate</label>
                <label class ="p-2 pl-5 pr-6 border-l">Units</label>
                <label v-show="newUnits > 1" class ="p-2 pl-12 pr-14 border-l">Concentration</label>
                <label v-show="newUnits > 3" class="p-2 pr-24 pl-20 border-l">kg</label>
                <label class ="p-2 pl-20 pr-20 border-l">Volume</label>
                <label class ="p-2 border-l">%Complete</label>
            </div>
            <div class="text-black space-y-2">
                <input v-model="newDrip" placeholder="Medication..." class="p-2"/>
                <input type="number" v-model="newRate" placeholder="Rate..." class="p-2 border-l"/>
                <select name="units" v-model="newUnits" placeholder="1" class="p-2">
                    <option value="1">mL/hr</option>
                    <option value="2">mg/hr</option>
                    <option value="3">mcg/hr</option>
                    <option value="4">u/kg/hr</option>
                </select>
                <input v-show="newUnits > 1" v-model="newConcentration" placeholder="Concentration..." class="p-2 border-l"/>
                <input type="number" v-show="newUnits > 3" v-model="newWeight" placeholder="kg..." class="p-2 border-l"/>
                <input type="number" v-model="newVolume" placeholder="Volume..." class="p-2 border-l"/>
                <select name="Percent Completed" v-model="percentComplete" placeholder="1" class="p-2">
                    <option value="1">100%</option>
                    <option value=".75">75%</option>
                    <option value=".5">50%</option>
                    <option value=".25">25%</option>
                </select>
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,
    props: {
        drips: Array,
    },
    data() {
        return {
            newDrip: '',
            newRate: '',
            newConcentration: 1,
            newWeight: 1,
            newUnits: 'Null',
            newVolume: '',
            percentComplete: '1',

        }

    },

    methods: {

        add() {
            this.$emit('add', this.newDrip, this.calcRates, this.calcVolume, this.calcVolumeDec)
            
            this.newDrip = '';
            this.newRate = '';
            this.newConcentration = '1';
            this.newWeight= '1',
            this.newUnits = 'Null';
            this.newVolume = '';
            this.percentComplete = '1';
        },
    },
    
    computed: {
        calcRates() {
            return (this.newRate * this.newWeight)/this.newConcentration
        },
        calcVolumeDec() {
            return this.calcRates / 3600
        },
        calcVolume() {
            return this.newVolume*this.percentComplete
        },
    }
    
}