<template>
    <div>
        <button type="" @click="increase">Increase</button>
        <button type="" @click="decrease">Decrease</button>
    </div>
</template>
<script>
    export default {
        methods: {
            increase() {
                this.$emit('updated', 1)
            },
            decrease() {
                this.$emit('updated', -1)
            }
        }
    }

</script>