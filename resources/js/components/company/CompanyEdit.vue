<template>
    <div class="container">
        <h2 class="mt-3">{{$t('buttons.company')}}</h2>
        <div class="row">
            <form class="col-8 mx-auto" >
                <input type="hidden" name="_method" value="PATCH">
                <div class="form-group">
                    <label for="name">{{$t('form.name')}}</label>
                    <input type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp" v-model="company.name" required>
                </div>

                <div class="form-group">
                    <label for="emil">Email</label>
                    <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="company.email">
                </div>
                <div class="form-group">
                    <label for="logo">{{$t('form.logo')}}</label>
                    <input type="file" name="logo" class="form-control-file" id="logo">
                </div>
                <div class="form-group">
                    <label for="website">{{$t('form.website')}}</label>
                    <input type="text" name="website" class="form-control" id="website" v-model="company.website">
                </div>
                <a class="btn btn-primary text-white" @click="edit">{{$t('buttons.edit')}}</a>
            </form>
        </div>
    </div>
</template>


<script>
    import {mapGetters,mapActions} from 'vuex';
    import router from "../../router";

    export default {
        name: "Company",
        data() {
            return {
                company: {},
            }
        },
        methods: {
            ...mapActions(['updateCompanies']),

            edit(){
                this.company.logo = document.querySelector('#logo').files[0];
                this.updateCompanies(this.company);
                router.go(-1)
            }
        },

        mounted() {
            this.company =  this.getCompanyById(this.$route.params.company);
        },
        computed: {
            ...mapGetters(['getCompanyById','allCompany']),

        }
    }
</script>

<style scoped>
    .img-small {
        max-width: 120px;
    }
</style>
