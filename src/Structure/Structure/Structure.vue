<template>
    <section class="structure">
        <Sidebar class="structure-sidebar"/> 
        <RouterView />
    </section>
</template>
<script>
import Sidebar from '../Sidebar/Sidebar.vue';


export default{
    name: 'Structure',
    components: {
        Sidebar
    }
}
</script>

<style scoped>
@import url(./Structure.scss);
</style>