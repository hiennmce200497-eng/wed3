/* ==========================================
   MỤC 8: Thêm trình lắng nghe sự kiện onload
   ========================================== */
window.onload = function() {
    console.log("Trang web đã tải xong thành công!");
    addTabFocus(); // Gọi hàm tự động thêm thuộc tính tabindex
};

/* ==========================================
   MỤC 9: Tạo hàm chạy vòng lặp gán thuộc tính tabindex
   ========================================== */
function addTabFocus() {
    console.log("Hành động gán thuộc tính tabindex đang kích hoạt...");
    
    // b: Viết một vòng lặp for để duyệt qua từng hình ảnh
    var images = document.querySelectorAll(".preview");
    
    for (var i = 0; i < images.length; i++) {
        // c: Thêm thuộc tính tabindex để có thể điều hướng bằng bàn phím
        images[i].setAttribute("tabindex", "0");
    }
    console.log("Đã gán xong thuộc tính tabindex cho tất cả " + images.length + " ảnh!");
}

/* ==========================================
   MỤC 6: Hàm cập nhật khi di chuột HOẶC khi Focus bằng phím Tab
   ========================================== */
function upDate(previewPic) {
    console.log("Sự kiện hiển thị ảnh kích hoạt!");
    
    var displayDiv = document.getElementById("image");
    
    // Thay đổi văn bản hiển thị thành alt của ảnh
    displayDiv.innerHTML = previewPic.alt;
    
    // Thay đổi ảnh nền lớn
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* ==========================================
   MỤC 6: Hàm hoàn tác khi rời chuột HOẶC khi mất Focus (Blur)
   ========================================== */
function unDo() {
    console.log("Sự kiện hoàn tác kích hoạt!");
    
    var displayDiv = document.getElementById("image");
    
    // Trả ảnh nền về trống rỗng
    displayDiv.style.backgroundImage = "url('')";
    
    // Trả lại nội dung văn bản gốc
    displayDiv.innerHTML = "Di chuột hoặc nhấn Tab qua hình ảnh bên dưới để hiển thị tại đây.";
}
