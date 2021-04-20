<template>
    b
</template>
<script>
export default {
    name:'b',
    setup(){
        onUnmounted(()=>{
            console.log('b组件destroy了')
        })
    }
}
</script>