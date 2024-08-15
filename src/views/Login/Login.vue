<template>
    <section class="login">
        <div class="login__card">
            <div class="login__card-form">
                <h1><Teste></Teste></h1>
                <InputBox :inputType="'email'"/>
            </div>
            <div class="login__card-actions">

            </div>
        </div>
    </section>
</template>
<script>
import InputBox from '@/components/shared/InputBox/InputBox.vue';

export default{
    name: 'Login',
    components: {
        InputBox
    }
}
</script>

<style scoped>
@import url(./Login.scss);
</style>