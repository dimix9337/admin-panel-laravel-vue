import axios from "axios";

export default {
    actions: {
        async fetchCompanies({commit}, payload = 1) {
            axios.get('/api/company?page=' + payload)
                .then(respone => respone.data.company)
                .then(company => {
                    commit('updateCompany', company);
                    commit('updateCurrentPage', payload);
                });

        },
        async createCompany({commit}, payload) {
            let formData = new FormData();
            formData.append('logo', payload.logo);
            formData.append('name', payload.name);
            formData.append('email', payload.email);
            formData.append('website', payload.website);

            let data = {
                name: payload.name,
                email: payload.email,
                website: payload.website
            };
            let settings = { headers: { 'content-type': 'multipart/form-data'} };

            axios.post('/api/company', formData,settings)
        },
        async updateCompanies({commit}, payload) {
            let formData = new FormData();
            formData.append('logo', payload.logo);
            formData.append('name', payload.name);
            formData.append('email', payload.email);
            formData.append('website', payload.website);
            formData.append('_method', 'PUT');

            let data = {
                name: payload.name,
                email: payload.email,
                website: payload.website
            };
            let settings = { headers: { 'content-type': 'multipart/form-data'} };

            axios.post('/api/company/' + payload.id, formData,settings)
        },
        async deleteCompany({commit}, payload) {
            let formData = new FormData();
            formData.append('_method', 'DELETE');
            axios.post('/api/company/' + payload, formData)
        }
    },
    mutations: {
        updateCompany(state, company) {
            state.company = company.data;
        },
        updateCurrentPage(state, company) {
            state.companyCurrentPage = company;
        }
    },
    state: {
        company: [],
        companyCurrentPage: 1
    },
    getters: {
        getCompanyById: (state) => (id) => {
            let companyById = state.company.find(comp => comp.id == id);
            return companyById;
        },
        allCompanies(state) {
            return state.company
        },
        getPaginateCompany(state) {
            const currentPage = state.companyCurrentPage;
            const prev = currentPage - 1 > 0 ? currentPage - 1 : null;
            const next = parseInt(currentPage) + 1;

            return {prev, next};
        }

    },
}
