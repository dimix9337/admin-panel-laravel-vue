<template>
    <div>
        <router-link to="/company" class="btn btn-primary">{{$t('buttons.company')}}</router-link>
        <router-link to="/employee" class="btn btn-primary">{{$t('buttons.employee')}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "Links"
    }
</script>

<style scoped>

</style>
