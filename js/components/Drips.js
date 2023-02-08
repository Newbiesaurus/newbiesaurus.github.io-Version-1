import DripList from "./DripList.js";
import DripCreate from "./DripCreate.js";

export default {
    components: { DripList, DripCreate },
    template: `
        <section class="space-y-6">
            <drip-list :drips="filters.inProgress" title="In Progress"></drip-list>
            <drip-list :drips="filters.completed" title="Completed"></drip-list>

            <drip-create @add="add" :drips="drips"></drip-create>
        </section>
    `,

    data() {
        return {
          drips: [ 
          ],
        }
      },

      computed: {
        filters() {
            return {
                inProgress: this.drips.filter(drip => ! drip.complete),
                completed: this.drips.filter(drip => drip.complete)
            };
        }
      },

      methods: {
        add(drip, rate, volume, volumedec) {
            this.drips.push({
                name: drip, 
                rate: rate,
                volume: volume,
                volumeDec: volumedec,
                completed: false,
                id: this.drips.length +1,
            });
            
        },
      }
}