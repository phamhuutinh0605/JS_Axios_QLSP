var service=new ProductServices();
function getElementQuery(id){
    return document.querySelector(id);
}
function renderData(data){
    var html="";
    data.forEach(function(item){
        html+=`<tr>
        <td>${item.id}</td>
        <td>${item.tenSP}</td>
        <td>${item.gia}</td>
        <td><img style="width:100px" src="../../assets/img/${item.hinhAnh}" alt=""></td>
        <td>${item.moTa}</td>
        <td>${item.action}</td>
        <td>
        <button class="btn btn-danger">Delete</button>
        <button class="btn btn-info">Edit</button>
        </td>
      </tr>`
    });
    getElementQuery("#tblDanhSachSP").innerHTML=html;
}
function getListProduct(){
    service.getListProductApi()
    .then(function(result){
        renderData(result.data)
    })
    .catch(function(error){
        console.log(error)
    })
}
getListProduct();