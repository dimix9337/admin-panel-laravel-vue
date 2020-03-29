<template>
    <div>
        <h2 class="mt-3">{{$t('buttons.company')}}</h2>
        <div class="row">
            <div class="m-2 card mx-auto text-center company-card" v-for="company in allCompanies">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img :src="company.logo" class="card-img img-small rounded-circle p-1" alt="...">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">{{company.name}}</h5>
                            <router-link :to="'/company/edit/' + company.id" tag="a" class="btn btn-primary">{{$t('buttons.edit')}}
                            </router-link>
                            <span @click="delCompany(company.id)" class="btn btn-danger">{{$t('buttons.delete')}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <nav aria-label="Page navigation example" class="mx-auto">
                <ul class="pagination">
                    <li class="page-item" v-if="getPaginateCompany.prev">
                        <router-link tag="a" class="page-link" :to="'/company/'+ getPaginateCompany.prev">{{$t('pagination.previous')}}</router-link>
                    </li>
                    <li class="page-item" v-if="getPaginateCompany.next">
                        <router-link tag="a" class="page-link" :to="'/company/'+ getPaginateCompany.next">{{$t('pagination.next')}}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>


<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Company",
        data() {
            return {
                company: [],
            }
        },
        methods: {
            ...mapActions(['fetchCompanies','deleteCompany']),
            getCompanies() {
                this.page = this.$route.params.page;
                this.fetchCompanies(this.page)
            },
            delCompany(id){
                this.deleteCompany(id);
                this.getCompanies();
            }
        },
        mounted() {
            this.getCompanies();
        },
        computed: {
            ...mapGetters(['allCompanies', 'getPaginateCompany']),
        },
        watch: {
            '$route': 'getCompanies'
        }
    }
</script>

<style scoped>
    .img-small {
        width: 120px;
        height: 120px;
        object-fit: cover;
    }
    .company-card{
        width: 49%;
    }
</style>
