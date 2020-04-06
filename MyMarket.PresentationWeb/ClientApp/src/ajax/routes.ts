export const routes = {
    authenticate: () => buildAjaxUrl('users/authenticate'),
    getHomeData: () => buildAjaxUrl('home'),
    getHomePageProducts: (offset:number) => buildAjaxUrl(`home/products?offset=${offset}`)
};

export const buildAjaxUrl = (route: string = '') => {
    return window.location.pathname + route;
}
