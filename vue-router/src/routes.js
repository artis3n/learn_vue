import Header from './components/Header.vue';
import Home from './components/Home.vue';

// Lazy loading
// Webpack packs these as separate bundles
// Grouped into one "user" bundle
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};


export const routes = [
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header,
        },
        props: true,
        children: [
            {
                path: '',
                component: UserStart,
            },
            {
                path: ':id',
                component: UserDetail,
                beforeEnter(to, from, next) {
                    console.log('inside route setup');
                    next();
                },
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit',
            },
        ],
    },
    {
        path: '',
        components: {
            default: Home,
            'header-top': Header,
        },
        name: 'home',
    },
    {
        path: '/redirect-me',
        redirect: '/user',
    },
    {
        path: '*',
        redirect: { name: 'home' },
    },
];
