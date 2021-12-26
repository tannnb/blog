import type {Settings as LayoutSettings} from '@ant-design/pro-layout';
import {PageLoading} from '@ant-design/pro-layout';
import type {RunTimeLayoutConfig} from 'umi';
import {history} from 'umi';
import RightContent from '@/components/RightContent';
import {currentUser as queryCurrentUser} from './services/ant-design-pro/api';
import Footer from "@/components/Footer";
import {routerSource} from "../config/RouterSource";
import type {RequestConfig} from "@@/plugin-request/request";
import lodash from 'lodash'

// const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading/>,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      msg.data.name = '小橘爱健身'
      msg.data.access = 'canTable'
      msg.data.avatar = 'https://img0.baidu.com/it/u=1967997459,1022958762&fm=26&fmt=auto'
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }
  return {
    fetchUserInfo,
    settings: {},
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({initialState}) => {
  return {
    rightContentRender: () => <RightContent/>,
    disableContentMargin: false,
    // waterMarkProps: {
    //   content: initialState?.currentUser?.name,
    // },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const {location} = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    menuHeaderRender: undefined,
    logout: () => {
      alert('退出登录成功');
    },
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    // childrenRender: (children) => {
    //   if (initialState.loading) return <PageLoading />;
    //   return children;
    // },
    ...initialState?.settings,
  };
};

//
// const demo1Middleware = async (ctx: Context, next: () => void) => {
//   console.log('request1');
//   await next();
//   console.log('response1');
// };
//
// const demo2Middleware = async (ctx: Context, next: () => void) => {
//   console.log('request2');
//   await next();
//   console.log('response2');
// };
//
// const errorHandler = (error: { response: Response }): Response => {
//   console.log('error', error)
//   const { response } = error;
//   notification.error({
//     description: '您的网络发生异常，无法连接服务器',
//     message: '网络异常',
//   });
//   return response;
// };
//
const authHeaderInterceptor = (url: string, options: any) => {
  const authHeader = { Authorization: 'Bearer xxxxxx' };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};

export const request: RequestConfig = {
  // errorHandler,
  requestInterceptors:[authHeaderInterceptor],
  // middlewares: [demo1Middleware, demo2Middleware],
};



const initData = {
  isAuth:false,
  isTnt:'fcia'
}
interface initProps {
  isAuth: boolean,
  isTnt: string
}

// eslint-disable-next-line @typescript-eslint/no-shadow
const removeEmptyRoutes = (routerSource: any[]) => {
  return routerSource.map(route => {
    if(route.routes && route.routes.length === 0) {
      delete route.routes
    }
    return route
  })
}
const setComponentAsync = (route: any) => {
  if(route.component) {
    const path = route.component.slice(1)
    route.component = () => import(`@/pages${path}/index`)
  }
}
const includesKeys = (route: any) => {
  const keys = Object.keys(route)
  return !keys.includes('audit') && !keys.includes('tntInsts')
}
const isEqual = (route: any,initData: initProps) => {
  const {isAuth,isTnt} = initData
  return route.audit === isAuth && route.tntInsts?.includes(isTnt)
}

// eslint-disable-next-line @typescript-eslint/no-shadow
const asyncComponent = (route: any, initData: initProps) => {
  // 1. 没有auth和tnt字段以及routes字段
  if(includesKeys(route) && !route.routes) {
    setComponentAsync(route)
    return route
  }
  if(isEqual(route,initData)) {
    setComponentAsync(route)
    return route
  }
  if(!route.routes) return false

  // 存在子级情况验证是否有权限
  const childRoutes: any[] = []
  route.routes?.forEach((item: any) => {
    if(includesKeys(item)) {
      setComponentAsync(item)
      childRoutes.push(item)
    }
    if(isEqual(item,initData)) {
      setComponentAsync(item)
      childRoutes.push(item)
    }
  })
  route.routes = childRoutes
  return route
}
export function patchRoutes() {
  const RoutesMaps: any[] = []
  const routeArray = removeEmptyRoutes(routerSource)
  routeArray.forEach((route: any) => {
    const result = asyncComponent(route,initData)
    if(result) {
      RoutesMaps.push(result)
    }
  })
  return RoutesMaps
}

