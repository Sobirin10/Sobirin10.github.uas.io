function processTransaction(event) {
    event.preventDefault();
    
    // Simulasi proses pesanan (misalnya dengan AJAX atau timeout)
    setTimeout(function() {
        showConfirmation();
    }, 1000); // Menggunakan timeout 1 detik untuk simulasi
    
}

function showConfirmation() {
    const mainSection = document.querySelector('main');
    mainSection.innerHTML = `
        <section id="konfirmasi">
            <h2>Baik, pesanan anda sedang di proses</h2>
            <p>Terima kasih telah memesan hotel. Kami akan segera mengirimkan konfirmasi ke email yang Anda berikan.</p>
            <a href="index.html" class="btn-back">Kembali ke Halaman Utama</a>
        </section>
    `;
}
