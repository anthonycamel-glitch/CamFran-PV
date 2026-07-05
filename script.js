document.querySelectorAll(‘[data-copy]’).forEach(button => {
button.addEventListener(‘click’, async () => { const originalText = “📋
Copy Password”; try { await
navigator.clipboard.writeText(button.dataset.copy); button.textContent =
“✓ Password Copied”; button.disabled = true; setTimeout(() => {
button.textContent = originalText; button.disabled = false; }, 2000); }
catch (err) { button.textContent = “Copy Failed”; setTimeout(() => {
button.textContent = originalText; }, 2000); } }); });
