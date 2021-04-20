<template>
    <div>
        <button @click="c = !c">切换</button>  
    </div>
    <A v-if="c"/>
    <B v-else/>
</template>

<script>
import A from 'a.vue';
import B from 'b.vue';
export default{
    components:{
        A,B
    },
    setup(){
        const c = ref(true)
        return {c}
    }
}
</script>
<style lang="scss">
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
*::before,*::after{
    box-sizing: border-box;
}
</style>