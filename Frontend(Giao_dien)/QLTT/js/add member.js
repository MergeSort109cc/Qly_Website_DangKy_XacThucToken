function handleAdd() {
    const email = document.getElementById("inputEmail").value;
    if (email.trim() === "") {
      alert("Vui lòng nhập email hoặc số điện thoại.");
      return;
    }
    // Thực hiện logic gọi API hoặc xử lý ở đây
    alert(`Đã gửi yêu cầu thêm: ${email}`);
  }
  
  function goBack() {
    window.history.back();
  }
  