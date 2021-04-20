<template>
    a
</template>
<script>
import { onUnmounted } from 'vue'
export default {
    name:'a',
    setup(){
        onUnmounted(()=>{
            console.log('a组件destroy了')
        })
    }
}
</script>