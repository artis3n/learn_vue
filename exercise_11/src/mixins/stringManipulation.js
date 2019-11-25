export const stringManipulation = {
    data() {
        return {
            mixinReversed: 'This text is reversed.',
            mixingCounted: 'This text is counted.',
        };
    },
    computed: {
        mixinComputedReverse() {
            return [...this.reversed].reverse().join('');
        },
        mixinComputedCount() {
            return `${this.counted} (${this.counted.length})`;
        }
    }
};
