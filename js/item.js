document.addEventListener('DOMContentLoaded', function() {
    const add = document.getElementById('btn');
    const list = document.getElementById("list")
    const ten_mon_an =document.getElementById()
    let gioHang = [];
    const tenMonan = ten_mon_an.textContent;
    function add() {
        list.innerHTML = "";
        if (sanpham) {
            sanpham.soLuong++;
        } else {
            gioHang.push({
                ten: tenMonan,
                soLuong: 1
            });
        }
        localStorage.setItem('gioHang', JSON.stringify(gioHang));
        }
    add.addEventListener('click', add);
    add();
})
