document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const text = button.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      showToast('Password copied');
    } catch (error) {
      showToast('Copy failed');
    }
  });
});

function showToast(message){
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}
