/* ==========================================
   3. HÀM UPDATE (Kích hoạt khi di chuột vào ảnh)
   ========================================== */
function upDate(previewPic) {
    // a & b: In thông tin kiểm tra ra console để debug
    console.log("Sự kiện di chuột đã kích hoạt!");
    console.log("Ảnh alt: " + previewPic.alt);
    console.log("Ảnh src: " + previewPic.src);

    // Lấy phần tử có id là image
    var imageDiv = document.getElementById("image");

    // c: Thay đổi văn bản của phần tử thành thuộc tính alt của ảnh preview
    imageDiv.innerHTML = previewPic.alt;

    // e: Thay đổi ảnh nền (background-image) thành thuộc tính src của ảnh preview
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* ==========================================
   4. HÀM UNDO (Kích hoạt khi bỏ chuột ra khỏi ảnh)
   ========================================== */
function unDo() {
    console.log("Sự kiện rời chuột đã kích hoạt!");

    var imageDiv = document.getElementById("image");

    // a: Cập nhật URL hình nền trở lại giá trị ban đầu trống rỗng
    imageDiv.style.backgroundImage = "url('')";

    // b: Cập nhật lại nội dung văn bản gốc
    imageDiv.innerHTML = "Di chuột qua hình ảnh bên dưới để hiển thị tại đây.";
}
