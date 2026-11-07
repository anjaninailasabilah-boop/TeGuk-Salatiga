// Nomor WhatsApp admin Teguk Salatiga (0882-2424-6481).
    // Format: kode negara + nomor, tanpa tanda +, spasi, atau angka 0 di depan.
    const NOMOR_WA = "6288224246481";

    let cart = [];

    function formatRupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency", currency: "IDR", maximumFractionDigits: 0
      }).format(number);
    }

    function addToCart(baseName, price, colorId) {
      const select = colorId ? document.getElementById(colorId) : null;
      const name = select ? `${baseName} (${select.value})` : baseName;
      const existing = cart.find(item => item.name === name);
      if (existing) existing.qty += 1;
      else cart.push({ name, price, qty: 1 });
      renderCart();
      document.getElementById("cart-panel").classList.add("open");
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      renderCart();
    }

    function renderCart() {
      const items = document.getElementById("cart-items");
      const count = cart.reduce((sum, item) => sum + item.qty, 0);
      const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      document.getElementById("cart-count").textContent = count;
      document.getElementById("cart-total").textContent = formatRupiah(total);

      if (cart.length === 0) {
        items.innerHTML = '<p class="empty">Keranjang masih kosong.</p>';
        return;
      }

      items.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
          <div><strong>${item.name}</strong><br>${item.qty} × ${formatRupiah(item.price)}</div>
          <div style="text-align:right"><strong>${formatRupiah(item.price * item.qty)}</strong><br>
          <button onclick="removeFromCart(${index})">Hapus</button></div>
        </div>
      `).join("");
    }

    function toggleCart() {
      document.getElementById("cart-panel").classList.toggle("open");
    }

    function checkoutWhatsApp() {
      if (cart.length === 0) {
        alert("Keranjang kamu masih kosong. Pilih produk terlebih dahulu ya!");
        return;
      }
      const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      const detail = cart.map(item => `- ${item.name} (${item.qty}x) = ${formatRupiah(item.price * item.qty)}`).join("\n");
      const message = `Halo Teguk Salatiga! Saya ingin memesan:\n${detail}\n\nTotal: ${formatRupiah(total)}\nMohon info ketersediaan dan cara pembayarannya.`;
            window.open(`https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(message)}`, "_blank");
    }
