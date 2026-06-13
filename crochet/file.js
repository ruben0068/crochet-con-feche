// ===== Product Data =====
const products = [
    {
        id: 1,
        name: "Orsetto Amigurumi",
        category: "amigurumi",
        price: 35.00,
        emoji: "🧸",
        badge: "Bestseller",
        description: "Adorabile orsetto realizzato interamente a mano con filato di cotone 100%. Perfetto come regalo o per decorare la cameretta dei più piccoli.",
        details: ["Altezza: circa 25 cm", "Materiale: Cotone 100%", "Lavabile a mano", "Imbottitura anallergica"]
    },
    {
        id: 2,
        name: "Copertina Neonato",
        category: "casa",
        price: 85.00,
        emoji: "👶",
        badge: "Nuovo",
        description: "Morbidissima copertina per neonato, realizzata con filato di lana merino di alta qualità. Ideale per tenere al caldo il tuo piccolo.",
        details: ["Dimensioni: 80x100 cm", "Materiale: Lana Merino", "Lavabile in lavatrice 30°", "Disponibile in vari colori"]
    },
    {
        id: 3,
        name: "Borsa Tote Estiva",
        category: "accessori",
        price: 65.00,
        emoji: "👜",
        description: "Elegante borsa tote perfetta per l'estate. Capiente e resistente, realizzata con filato di rafia naturale.",
        details: ["Dimensioni: 35x40 cm", "Materiale: Rafia naturale", "Fodera interna in cotone", "Manici rinforzati"]
    },
    {
        id: 4,
        name: "Cappellino Bambino",
        category: "abbigliamento",
        price: 28.00,
        emoji: "🧢",
        description: "Cappellino caldo e colorato per bambini. Disponibile in diverse taglie e colori.",
        details: ["Taglie: 6-12 mesi, 1-3 anni, 3-6 anni", "Materiale: Lana acrilica", "Lavabile in lavatrice", "Elastico regolabile"]
    },
    {
        id: 5,
        name: "Unicorno Amigurumi",
        category: "amigurumi",
        price: 45.00,
        emoji: "🦄",
        badge: "Popolare",
        description: "Magico unicorno dai colori pastello. Un peluche unico che farà sognare grandi e piccini.",
        details: ["Altezza: circa 30 cm", "Materiale: Cotone 100%", "Criniera in filato sfumato", "Occhi di sicurezza"]
    },
    {
        id: 6,
        name: "Sottobicchieri Set 6",
        category: "casa",
        price: 25.00,
        emoji: "☕",
        description: "Set di 6 sottobicchieri colorati per proteggere i tuoi mobili con stile. Perfetti per ogni occasione.",
        details: ["Diametro: 10 cm", "Materiale: Cotone", "Set da 6 pezzi", "Colori personalizzabili"]
    },
    {
        id: 7,
        name: "Sciarpa Infinity",
        category: "accessori",
        price: 48.00,
        emoji: "🧣",
        description: "Sciarpa ad anello morbida e avvolgente. Perfetta per le giornate più fredde.",
        details: ["Circonferenza: 140 cm", "Larghezza: 25 cm", "Materiale: Lana merino blend", "Colori disponibili su richiesta"]
    },
    {
        id: 8,
        name: "Cardigan Bambina",
        category: "abbigliamento",
        price: 75.00,
        emoji: "🧥",
        badge: "Esclusivo",
        description: "Delizioso cardigan per bambina con bottoni in legno. Elegante e confortevole.",
        details: ["Taglie: 2-4 anni, 4-6 anni, 6-8 anni", "Materiale: Cotone organico", "Bottoni in legno naturale", "Lavabile a 30°"]
    },
    {
        id: 9,
        name: "Coniglietto Pasquale",
        category: "amigurumi",
        price: 32.00,
        emoji: "🐰",
        description: "Tenero coniglietto perfetto per Pasqua o come regalo in ogni stagione.",
        details: ["Altezza: circa 22 cm", "Materiale: Cotone 100%", "Orecchie regolabili", "Fiocchetto decorativo"]
    },
    {
        id: 10,
        name: "Cuscino Decorativo",
        category: "casa",
        price: 55.00,
        emoji: "🛋️",
        description: "Cuscino decorativo con motivo geometrico. Aggiunge un tocco di calore a qualsiasi ambiente.",
        details: ["Dimensioni: 40x40 cm", "Materiale: Cotone", "Imbottitura inclusa", "Sfoderabile e lavabile"]
    },
    {
        id: 11,
        name: "Fascia per Capelli",
        category: "accessori",
        price: 18.00,
        emoji: "🎀",
        description: "Fascia per capelli elegante e comoda. Disponibile in molte varianti di colore.",
        details: ["Taglia unica elasticizzata", "Materiale: Cotone", "Nodo decorativo", "Ideale tutto l'anno"]
    },
    {
        id: 12,
        name: "Scarpine Neonato",
        category: "abbigliamento",
        price: 22.00,
        emoji: "👟",
        badge: "Regalo Ideale",
        description: "Scarpine morbide per i primi passi. Tengono al caldo i piedini del tuo bambino.",
        details: ["Taglie: 0-3 mesi, 3-6 mesi, 6-12 mesi", "Materiale: Lana merino", "Laccetti sicuri", "Confezionate in scatola regalo"]
    }
];

// ===== Cart State =====
let cart = [];

// ===== DOM Elements =====
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const filterBtns = document.querySelectorAll('.filter-btn');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    loadCart();
    setupEventListeners();
});

// ===== Render Products =====
function renderProducts(productsToRender) {
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <span>${product.emoji}</span>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">€${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-outline view-btn" data-id="${product.id}">Dettagli</button>
                    <button class="btn btn-primary add-btn" data-id="${product.id}">Aggiungi</button>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners to new buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openProductModal(parseInt(btn.dataset.id));
        });
    });

    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(btn.dataset.id));
        });
    });

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            openProductModal(parseInt(card.dataset.id));
        });
    });
}

// ===== Filter Products =====
function filterProducts(category) {
    if (category === 'tutti') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// ===== Cart Functions =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    saveCart();
    showNotification(`${product.name} aggiunto al carrello!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
            saveCart();
        }
    }
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `€${total.toFixed(2)}`;

    // Render cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <span>🛒</span>
                <p>Il carrello è vuoto</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">€${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        `).join('');
    }
}

function saveCart() {
    localStorage.setItem('crochetCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('crochetCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// ===== Product Modal =====
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    
    modalBody.innerHTML = `
        <div class="modal-image">${product.emoji}</div>
        <div class="modal-info">
            <span class="product-category">${product.category}</span>
            <h2 class="product-name">${product.name}</h2>
            <div class="product-price">€${product.price.toFixed(2)}</div>
            <p class="modal-description">${product.description}</p>
            <div class="modal-details">
                <h4>Caratteristiche:</h4>
                <ul>
                    ${product.details.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
            <button class="btn btn-primary btn-full" onclick="addToCart(${product.id}); closeProductModal();">
                Aggiungi al Carrello
            </button>
        </div>
    `;
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Cart Sidebar =====
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Notifications =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--color-text);
        color: white;
        padding: 16px 24px;
        border-radius: var(--radius-sm);
        box-shadow: var(--shadow-lg);
        z-index: 5000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===== Event Listeners =====
function setupEventListeners() {
    // Cart
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);

    // Modal
    modalClose.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModal();
    });

    // Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts(btn.dataset.category);
        });
    });

    // Contact Form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Messaggio inviato con successo!');
        contactForm.reset();
    });

    // Newsletter
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Iscrizione completata!');
        newsletterForm.reset();
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartSidebar();
            closeProductModal();
        }
    });
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.closeProductModal = closeProductModal;
