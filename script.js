// Saat halaman dimuat, tambahkan kelas animasi masuk
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add('page-enter');
  requestAnimationFrame(() => {
    document.body.classList.add('page-enter-active');
  });
});

// Untuk semua link di navbar, buat efek keluar sebelum pindah halaman
const links = document.querySelectorAll('a[href]');

links.forEach(link => {
  const url = new URL(link.href);
  if (url.origin === window.location.origin) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.add('page-exit');
      requestAnimationFrame(() => {
        document.body.classList.add('page-exit-active');
      });

      setTimeout(() => {
        window.location.href = link.href;
      }, 600); // waktu sesuai durasi CSS
    });
  }
});
const lines = [
  
];

const ids = ["line1", "line2", "line3", "line4"];

let currentLine = 0;
let currentChar = 0;

function typeLine() {
  if (currentLine >= lines.length) return;

  const lineElement = document.getElementById(ids[currentLine]);

  // Jika baru mulai baris ini, kosongkan isi sebelumnya
  if (currentChar === 0) {
    lineElement.innerHTML = "";
  }

  // Ketik karakter per karakter
  if (currentChar < lines[currentLine].length) {
    lineElement.innerHTML += lines[currentLine].charAt(currentChar);
    currentChar++;
    setTimeout(typeLine, 50);
  } else {
    currentLine++;
    currentChar = 0;
    setTimeout(typeLine, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeLine();
});