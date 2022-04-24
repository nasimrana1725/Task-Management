// const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
// const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
// const CategoryCreate = () => import('./components/category/Add.vue' /* webpackChunkName: "resource/js/components/category/add" */)
// const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)
// import AdminDashboard from "../views/admin/adminDashboard";
// import CategoryList from "./components/category/List";
// import CategoryList from "./components/category/List";
// import CategoryCreate from "./components/category/Add";
// import CategoryEdit from "./components/category/Edit";
import TaskList from "./components/task/List";
import TaskCreate from "./components/task/Add";
import TaskEdit from "./components/task/Edit";

const routes = [
    {
        name: 'taskList',
        path: '/admin/task',
        component: TaskList
    },
    {
        name: 'taskEdit',
        path: '/admin/task/:id/edit',
        component: TaskEdit
    },
    {
        name: 'taskAdd',
        path: '/admin/task/add',
        component: TaskCreate
    }
];
export default routes;
