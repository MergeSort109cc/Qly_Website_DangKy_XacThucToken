<?php
$id = $_GET['id'];
$conn = new mysqli("localhost", "username", "password", "your_db");
$result = $conn->query("SELECT * FROM transactions WHERE transaction_id = $id");
$row = $result->fetch_assoc();

header("Content-type: application/vnd.openxmlformats-officedocument.wordprocessingml.document");
header("Content-Disposition: attachment; filename=transaction_$id.doc");

echo "
  Mã Hóa Đơn: {$row['invoice_id']}
  Mã Giao Dịch: {$row['transaction_id']}
  Loại Giao Dịch: {$row['type']}
  Trạng Thái: {$row['status']}
  Ngày Tạo: {$row['created_at']}
  Tổng Tiền: {$row['amount']} đ
  Trạng Thái Hóa Đơn: {$row['invoice_status']}
";
?>
