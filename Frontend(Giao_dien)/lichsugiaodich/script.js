// Dropdown toggle
document.getElementById('userButton').addEventListener('click', () => {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
  
  // Lấy dữ liệu giao dịch từ PHP
  fetch('get_transactions.php')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Kiểm tra trong console
      const tbody = document.getElementById('transactionData');
      tbody.innerHTML = '';
  
      if (!data || data.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="8" class="no-data">Chưa có lịch sử giao dịch</td>`;
        tbody.appendChild(tr);
      } else {
        data.forEach(row => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${row.invoice_id}</td>
            <td>${row.transaction_id}</td>
            <td>${row.type}</td>
            <td>${row.status}</td>
            <td>${row.created_at}</td>
            <td>${row.amount} đ</td>
            <td>${row.invoice_status}</td>
            <td><button class="export" onclick="exportDocx(${row.transaction_id})">Xuất Docx</button></td>
          `;
          tbody.appendChild(tr);
        });
      }
    });
  
  function exportDocx(id) {
    window.location.href = `export_docx.php?id=${id}`;
  }
  