import DripTimer from "./DripTimer.js"

export default {
    components: { DripTimer },
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                <p class="p-2 pl-20 pr-20">{{ drip.name }}</p>
                <p class="border-l border-r pl-16 pr-40 p-2">{{ drip.rate }} mL/hr</p>
                <p class="pl-20 p-2">
                <drip-timer :drip="drip"></drip-timer></p>
            </label>
        </li>
    `,

    props: {
        drip: Object
    }

}