'use strict';

const headers = document.querySelectorAll('thead > tr > th');
const tbody = document.querySelector('tbody');

const rows = Array.from(tbody.querySelectorAll('tr'));

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const sortedRows = [...rows].sort((a, b) => {
      const cellA = a.children[columnIndex].textContent.trim();
      const cellB = b.children[columnIndex].textContent.trim();

      if (columnIndex === 2 || columnIndex === 3) {
        const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
        const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
