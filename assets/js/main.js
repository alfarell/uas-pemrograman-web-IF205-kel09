function copyCodeFromData(buttonElement) {
  const targetId = buttonElement.dataset.targetId;
  const codeElement = document.getElementById(targetId);

  if (!codeElement) {
      console.error(`Elemen dengan ID '${targetId}' tidak ditemukan.`);
      return;
  }

  const codeToCopy = codeElement.textContent;

  navigator.clipboard.writeText(codeToCopy)
        .then(() => {
            const originalSVG = buttonElement.innerHTML; 
            buttonElement.innerHTML = `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check w-4 h-4 text-green-600"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
            `; 

            setTimeout(() => {
                buttonElement.innerHTML = originalSVG; 
            }, 2000);
        })
        .catch(err => {
            console.error('Gagal menyalin kode:', err);
            alert('Gagal menyalin kode. Silakan salin manual.');
        });
}