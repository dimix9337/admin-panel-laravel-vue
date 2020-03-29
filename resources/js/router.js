import VueRouter from 'vue-router';

import Company from "./components/company/Company";
import CompanyCreate from "./components/company/CompanyCreate";
import CompanyEdit from "./components/company/CompanyEdit";

import Employee from "./components/employee/Employee";
import EmployeeCreate from "./components/employee/EmployeeCreate";
import EmployeeEdit from "./components/employee/EmployeeEdit";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: Company
        },
        {
            path: '/company',
            component: Company
        },
        {
            path: '/company/create',
            component: CompanyCreate
        },
        {
            path: '/company/:page',
            component: Company
        },
        {
            path: '/company/edit/:company',
            component: CompanyEdit
        },
        {
            path: '/employee',
            component: Employee
        },
        {
            path: '/employee/create',
            component: EmployeeCreate
        },
        {
            path: '/employee/:page',
            component: Employee
        },
        {
            path: '/employee/edit/:company',
            component: EmployeeEdit
        },
    ]
});
