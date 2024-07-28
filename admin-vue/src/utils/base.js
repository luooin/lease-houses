const base = {
    get() {
        return {
            url : "http://localhost:8080/leasehouses/",
            name: "leasehouses",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/leasehouses/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "房屋租赁平台"
        } 
    }
}
export default base
