
const layout_children = [
    {
        path:'/web/Assets',
        component: ()=>import('@/views/AssetCenter/Index'),
        meta:{title:'Assets.title',is_select:false,icon:require('@/assets/images/layout/wallet.png'),icon_select:require('@/assets/images/layout/wallet_sel.png'),size:{w:'16px',h:'14px'},u_icon:require('@/assets/images/user/money.png'),u_size:{w:'16',h:'14'}},
        children:[
            {
                path:'/web/Asset/center',
                component: ()=>import('@/views/AssetCenter/Asset_Center'),
                meta:{root:'/web/Assets'}
            },
            {
                path:'/web/Asset/address',
                component: ()=>import('@/views/AssetCenter/Address_Management'),
                meta:{root:'/web/Assets'}
            },
            {
                path: '/web/Assets',
                redirect:'/web/Asset/center'
            }
        ]

    },
    {
        path:'/web/Record',
        component: ()=>import('@/views/Record/Index'),
        meta:{title:'Record.title',is_select:false,icon:require('@/assets/images/layout/record.png'),icon_select:require('@/assets/images/layout/record_sel.png'),size:{w:'15px',h:'16px'},u_icon:require('@/assets/images/user/record.png'),u_size:{w:'13',h:'15'}},
        children:[
            {
                path:'/web/Record/recharge',
                component: ()=>import('@/views/Record/Recharge'),
                meta:{root:'/web/Record'}
            },
            {
                path:'/web/Record/withdraw',
                component: ()=>import('@/views/Record/Withdraw'),
                meta:{root:'/web/Record'}
            },
            {
                path: '/web/Record',
                redirect:'/web/Record/recharge'
            }
        ]

    },
    {
        path:'/web/Safe',
        component: ()=>import('@/views/Safe/Index'),
        meta:{title:'Safe.title',is_select:false,icon:require('@/assets/images/layout/safe.png'),icon_select:require('@/assets/images/layout/safe_sel.png'),size:{w:'17px',h:'20px'},u_icon:require('@/assets/images/user/safe.png'),u_size:{w:'13',h:'16'}},
        children:[
            {
                path:'/web/Safe/account',
                component: ()=>import('@/views/Safe/Account_Safe'),
                meta:{root:'/web/Safe'}
            },
            {
                path: '/web/Safe',
                redirect:'/web/Safe/account'
            }
        ]

    },
    {
        path:'/web/Identity',
        component: ()=>import('@/views/Identity/Index'),
        meta:{title:'Identity.title',is_select:false,icon:require('@/assets/images/layout/id.png'),icon_select:require('@/assets/images/layout/id_sel.png'),size:{w:'17px',h:'14px'},u_icon:require('@/assets/images/user/author.png'),u_size:{w:'16',h:'16'}},
        children:[
            {
                path:'/web/Identity/author',
                component: ()=>import('@/views/Identity/Identity_Author'),
                meta:{root:'/web/Identity'}
            },
            {
                path: '/web/Identity',
                redirect:'/web/Identity/author'
            }
        ]

    },
    {
        path:'/web/Share',
        component: ()=>import('@/views/Share/Index'),
        meta:{title:'Share.title',is_select:false,icon:require('@/assets/images/layout/share.png'),icon_select:require('@/assets/images/layout/share_sel.png'),size:{w:'14px',h:'15px'},u_icon:require('@/assets/images/user/share.png'),u_size:{w:'14',h:'14'}},
        children:[
            {
                path:'/web/Share/popularize',
                component: ()=>import('@/views/Share/Popularize'),
                meta:{root:'/web/Share'}
            },
            {
                path: '/web/Share',
                redirect:'/web/Share/popularize'
            }
        ]

    },
    {
        path:'/web/Holder',
        component: ()=>import('@/views/Holder/Index'),
        meta:{title:'Holder.title',is_select:false,icon:require('@/assets/images/layout/red.png'),icon_select:require('@/assets/images/layout/red_sel.png'),size:{w:'16px',h:'17px'},u_icon:require('@/assets/images/user/fen.png'),u_size:{w:'15',h:'15'}},
        children:[
            {
                path:'/web/Holder/dividends',
                component: ()=>import('@/views/Holder/Dividends'),
                meta:{root:'/web/Holder'}
            },
            {
                path: '/web/Holder',
                redirect:'/web/Holder/dividends'
            }
        ]

    },
    {
        path: '/web/layout',
        redirect: '/web/Assets'
    }
]
export  default  layout_children