function ProductServices() {
    this.getListProductApi=function(){
        return axios({
            url:"https://6183caa491d76c00172d1b4b.mockapi.io/api/QLSP",
            method:"GET",
        });
    }
    this.deleteProductApi=function () {
        return axios({
            url:"https://6183caa491d76c00172d1b4b.mockapi.io/api/QLSP",
            method:"DELETE",
        })
    }
}
