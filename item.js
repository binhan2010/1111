
document.addEventListener('DOMContentLoaded', function() {
    const Button = document.getElementById('btn');
    const ten_mon_an =document.getElementById()
    let gioHang = [];
    function add() {
        const tenMonan = ten_mon_an.textContent;
        if (sanpham) {
            sanpham.soLuong++;
        } else {
            gioHang.push({
                ten: tenMonan,
                soLuong: 1
            });
        }
        localStorage.setItem('gioHang', JSON.stringify(gioHang));
        hienThiGioHang();
    }
    themVaoGioButton.addEventListener('click', themVaoGioHang);

})
