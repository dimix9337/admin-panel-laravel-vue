import axios from "axios";

export default {
    actions: {
        async fetchEmployees({commit}, payload = 1) {
            axios.get('/api/employee?page=' + payload)
                .then(respone => respone.data.employee)
                .then(employee => {
                    console.log(employee);
                    commit('updateEmployee', employee);
                    commit('updateCurrentPage', payload);
                });
        },
        async createEmployee({commit}, payload) {
            let data = {
                'first_name' : payload.first_name,
                'last_name' : payload.last_name,
                'company_id' : payload.company_id,
                'email' : payload.email,
                'phone' : payload.phone
            };

            axios.post('/api/employee', data)
        },
        async updateEmployee({commit}, payload) {
            let data = {
                'first_name' : payload.first_name,
                'last_name' : payload.last_name,
                'company_id' : payload.company_id,
                'email' : payload.email,
                'phone' : payload.phone,
                '_method' : "PUT",
            };


            axios.post('/api/employee/' + payload.id, data)
        },
        async deleteEmployee({commit}, payload) {
            let formData = new FormData();
            formData.append('_method', 'DELETE');
            axios.post('/api/employee/' + payload, formData)
        }
    },
    mutations: {
        updateEmployee(state, employee) {
            state.employee = employee.data;
        },
        updateCurrentPage(state, employee) {
            state.employeeCurrentPage = employee;
        }
    },
    state: {
        employee: [],
        employeeCurrentPage: 1
    },
    getters: {
        getEmployeeById: (state) => (id) => {
            let employeeById = state.employee.find(empl => empl.id == id);
            return employeeById;
        },
        allEmployee(state) {
            return state.employee;
        },
        getPaginateEmployee(state) {
            const currentPage = state.employeeCurrentPage;
            const prev = currentPage - 1 > 0 ? currentPage - 1 : null;
            const next = parseInt(currentPage) + 1;

            return {prev, next};
        }

    },
}
