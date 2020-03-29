<template>
    <div class="container">
        <h2 class="mt-3">{{$t('buttons.employee')}}</h2>
        <div class="row">
            <form class="col-8 mx-auto" >
                <input type="hidden" name="_method" value="PATCH">
                <div class="form-group">
                    <label for="first_name">{{$t('form.first_name')}}</label>
                    <input type="text" name="first_name" class="form-control" id="first_name" aria-describedby="nameHelp" v-model="employee.first_name" required>
                </div>
                <div class="form-group">
                    <label for="last_name">{{$t('form.last_name')}}</label>
                    <input type="text" name="last_name" class="form-control" id="last_name" aria-describedby="nameHelp" v-model="employee.last_name" required>
                </div>
                <div class="form-group">
                    <label for="company_id">{{$t('form.company_id')}}</label>
                    <input type="text" name="company_id" class="form-control" id="company_id" aria-describedby="nameHelp" v-model="employee.company_id">
                </div>

                <div class="form-group">
                    <label for="emil">Email</label>
                    <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="employee.email">
                </div>
                <div class="form-group">
                    <label for="phone">{{$t('form.phone')}}</label>
                    <input type="text" name="phone" class="form-control" id="phone" v-model="employee.phone">
                </div>
                <a class="btn btn-primary text-white" @click="create">{{$t('buttons.edit')}}</a>
            </form>
        </div>
    </div>
</template>


<script>
    import {mapActions} from 'vuex'
    import router from "../../router";

    export default {
        name: "Company",
        data() {
            return {
                employee: {},
            }
        },
        methods: {
            ...mapActions(['createEmployee']),

            create(){
                this.createEmployee(this.employee);
                router.push('/employee')
            }
        }
    }
</script>

<style scoped>
    .img-small {
        max-width: 120px;
    }
</style>
