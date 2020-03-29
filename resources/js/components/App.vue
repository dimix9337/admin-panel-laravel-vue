<template>
    <div class="col-7 mx-auto">
        <div class="d-flex justify-content-between">
            <links></links>
                <div class="row">
                    <linksCreate></linksCreate>
                    <lang class="mx-1"></lang>
                </div>
        </div>
        <router-view></router-view>

    </div>
</template>
<script>
    import Links from "./Links";
    import LinksCreate from "./LinksCreate";
    import Lang from "./Lang";

    export default {
        components: {
            Links,
            LinksCreate,
            Lang
        }
    }
</script>
<style scoped>

</style>
