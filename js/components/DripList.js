import Drip from "./Drip.js";

export default {
    components: { Drip },
    template: `
        <section v-show="drips.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ drips.length }})</span>
                </h2>
            <ul class="border border-gray-600 divide-y divide-y-gray-600">
                <label class="p2 flex border-y">
                    <p class="pl-16 pr-20 border-l">Medication</p>
                    <p class="pl-28 pr-36 border-l">Rate</p>
                    <p class="pl-20 pr-40 border-l border-r">Volume</p>
                </label>
                <drip 
                    v-for="drip in drips"
                    :key="drip.id"
                    :drip="drip"
                ></drip>

            </ul>
        </section> 
    `,

    props: {
        drips: Array, 
        title: String
    }
}