<template>
    <div>
        <h2 class="mt-3">{{$t('buttons.employee')}}</h2>
        <div class="row  mx-auto">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">{{$t('form.first_name')}}</th>
                    <th scope="col">{{$t('form.last_name')}}</th>
                    <th scope="col">{{$t('form.company_id')}}</th>
                    <th scope="col">Email</th>
                    <th scope="col">{{$t('form.phone')}}</th>
                    <th scope="col">{{$t('buttons.edit')}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="employee in allEmployee">
                    <th scope="row">{{employee.id}}</th>
                    <td>{{employee.first_name}}</td>
                    <td>{{employee.last_name}}</td>
                    <td>{{employee.company_id}}</td>
                    <td>{{employee.email}}</td>
                    <td>{{employee.phone}}</td>
                    <td>
                        <router-link :to="'/employee/edit/' + employee.id" tag="a" class="btn btn-primary">
                            {{$t('buttons.edit')}}
                        </router-link>
                        <span @click="delEmployee(employee.id)" class="btn btn-danger">{{$t('buttons.delete')}}
                                </span>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
        <div class="row">
            <nav aria-label="Page navigation example" class="mx-auto">
                <ul class="pagination">
                    <li class="page-item" v-if="getPaginateEmployee.prev">
                        <router-link tag="a" class="page-link" :to="'/employee/'+ getPaginateEmployee.prev">
                            {{$t('pagination.previous')}}
                        </router-link>
                    </li>
                    <li class="page-item" v-if="getPaginateEmployee.next">
                        <router-link tag="a" class="page-link" :to="'/employee/'+ getPaginateEmployee.next">
                            {{$t('pagination.next')}}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>


<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Employee",
        data() {
            return {
                employees: [],
            }
        },
        methods: {
            ...mapActions(['fetchEmployees', 'deleteEmployee']),
            getEmployees() {
                this.page = this.$route.params.page;
                this.fetchEmployees(this.page)
            },
            delEmployee(id) {
                this.deleteEmployee(id);
                this.getEmployees();
            }
        },
        mounted() {
            this.getEmployees();
        },
        computed: {
            ...mapGetters(['allEmployee', 'getPaginateEmployee']),
        },
        watch: {
            '$route': 'getEmployees'
        }
    }
</script>

<style scoped>
</style>
