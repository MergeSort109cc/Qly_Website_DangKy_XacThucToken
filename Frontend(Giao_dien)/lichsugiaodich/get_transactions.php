<?php
header('Content-Type: application/json');

$conn = new mysqli("localhost", "root", "", "your_db"); // thay thông tin phù hợp

if ($conn->connect_error) {
    echo json_encode([]);
    exit;
}

$result = $conn->query("SELECT * FROM transactions");
$data = [];

while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
