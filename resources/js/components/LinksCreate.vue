<template>
    <div>
        <router-link to="/company/create" class="btn btn-primary">{{$t('buttons.addCompany')}}</router-link>
        <router-link to="/employee/create" class="btn btn-primary">{{$t('buttons.addEmployee')}}</router-link>

    </div>
</template>

<script>
    import Lang from './Lang';
    export default {
        name: "Links",
        components:{
            Lang,
        }
    }
</script>

<style scoped>

</style>
