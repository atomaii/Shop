document.addEventListener('DOMContentLoaded', function() {
    console.log('Скрипт загружен, начинаем инициализацию...');

    // ---------- Данные товаров (20 штук) ----------
    const products = [
        // Женская обувь
        { id: 1, name: 'Босоножки на каблуке', brand: 'Nike', price: 5990, description: 'Элегантные босоножки.', images: ['./img/туфл.jpg', './img/кед.jpeg', './img/туфл.jpg'], gender: 'women', category: 'shoes', sizes: ['38', '39', '40'] },
        { id: 2, name: 'Кеды женские', brand: 'Adidas', price: 4490, description: 'Удобные кеды.', images: ['./img/кед.jpeg', './img/кед2.jpg', './img/кед.jpeg'], gender: 'women', category: 'shoes', sizes: ['38', '39', '40'] },
        { id: 3, name: 'Туфли лодочки', brand: 'Puma', price: 6990, description: 'Классические туфли.', images: ['./img/туфл.jpg', './img/кед.jpeg', './img/туфл.jpg'], gender: 'women', category: 'shoes', sizes: ['38', '39', '40'] },
        { id: 4, name: 'Сапоги зимние', brand: 'Reebok', price: 9990, description: 'Тёплые сапоги.', images: ['./img/туфл.jpg', './img/кед.jpeg', './img/туфл.jpg'], gender: 'women', category: 'shoes', sizes: ['38', '39', '40'] },
        // Мужская обувь
        { id: 5, name: 'Кроссовки мужские', brand: 'Nike', price: 7990, description: 'Для спорта и жизни.', images: ['./img/крос1.jpg', './img/лоф.jpg', './img/крос1.jpg'], gender: 'men', category: 'shoes', sizes: ['39', '40', '41'] },
        { id: 6, name: 'Ботинки рабочие', brand: 'Adidas', price: 8990, description: 'Надёжная защита.', images: ['./img/крос1.jpg', './img/лоф.jpg', './img/крос1.jpg'], gender: 'men', category: 'shoes', sizes: ['40', '41', '42'] },
        { id: 7, name: 'Мокасины', brand: 'Puma', price: 5490, description: 'Лёгкие мокасины.', images: ['./img/лоф.jpg', './img/крос1.jpg', './img/лоф.jpg'], gender: 'men', category: 'shoes', sizes: ['39', '40'] },
        { id: 8, name: 'Сандалии мужские', brand: 'Reebok', price: 3490, description: 'Для пляжа.', images: ['./img/лоф.jpg', './img/крос1.jpg', './img/лоф.jpg'], gender: 'men', category: 'shoes', sizes: ['40', '41'] },
        // Женская одежда
        { id: 9, name: 'Платье летнее', brand: 'Nike', price: 4990, description: 'Лёгкое платье.', images: ['./img/плач.jpg', './img/куртка1.jpg', './img/плач.jpg'], gender: 'women', category: 'clothing', sizes: ['XS', 'S', 'M'] },
        { id: 10, name: 'Юбка карандаш', brand: 'Adidas', price: 3990, description: 'Строгая юбка.', images: ['./img/плач.jpg', './img/куртка1.jpg', './img/плач.jpg'], gender: 'women', category: 'clothing', sizes: ['S', 'M'] },
        { id: 11, name: 'Блуза шёлковая', brand: 'Puma', price: 3590, description: 'Изысканная блуза.', images: ['./img/плач.jpg', './img/куртка1.jpg', './img/плач.jpg'], gender: 'women', category: 'clothing', sizes: ['XS', 'S'] },
        { id: 12, name: 'Джинсы skinny', brand: 'Reebok', price: 5990, description: 'Узкие джинсы.', images: ['./img/куртка1.jpg', './img/плач.jpg', './img/куртка1.jpg'], gender: 'women', category: 'clothing', sizes: ['S', 'M', 'L'] },
        // Мужская одежда
        { id: 13, name: 'Рубашка классическая', brand: 'Nike', price: 3490, description: 'Белая рубашка.', images: ['./img/руб.jpg', './img/куртка2.jpg', './img/руб.jpg'], gender: 'men', category: 'clothing', sizes: ['M', 'L', 'XL'] },
        { id: 14, name: 'Брюки чинос', brand: 'Adidas', price: 4590, description: 'Удобные брюки.', images: ['./img/руб.jpg', './img/куртка2.jpg', './img/руб.jpg'], gender: 'men', category: 'clothing', sizes: ['S', 'M', 'L'] },
        { id: 15, name: 'Куртка джинсовая', brand: 'Puma', price: 7990, description: 'Мужская куртка.', images: ['./img/куртка2.jpg', './img/руб.jpg', './img/куртка2.jpg'], gender: 'men', category: 'clothing', sizes: ['L', 'XL'] },
        { id: 16, name: 'Футболка с принтом', brand: 'Reebok', price: 1990, description: 'Хлопковая футболка.', images: ['./img/руб.jpg', './img/куртка2.jpg', './img/руб.jpg'], gender: 'men', category: 'clothing', sizes: ['S', 'M', 'L', 'XL'] },
        // Ещё несколько
        { id: 17, name: 'Кроссовки повседневные', brand: 'Nike', price: 6790, description: 'Универсальные.', images: ['./img/крос1.jpg', './img/лоф.jpg', './img/крос1.jpg'], gender: 'women', category: 'shoes', sizes: ['38', '39', '40'] },
        { id: 18, name: 'Лоферы мужские', brand: 'Adidas', price: 7290, description: 'Кожаные лоферы.', images: ['./img/лоф.jpg', './img/крос1.jpg', './img/лоф.jpg'], gender: 'men', category: 'shoes', sizes: ['40', '41'] },
        { id: 19, name: 'Толстовка женская', brand: 'Puma', price: 4590, description: 'С капюшоном.', images: ['./img/куртка1.jpg', './img/плач.jpg', './img/куртка1.jpg'], gender: 'women', category: 'clothing', sizes: ['S', 'M', 'L'] },
        { id: 20, name: 'Свитер мужской', brand: 'Reebok', price: 3890, description: 'Тёплый свитер.', images: ['./img/куртка2.jpg', './img/руб.jpg', './img/куртка2.jpg'], gender: 'men', category: 'clothing', sizes: ['M', 'L', 'XL'] }
    ];

    // Хиты продаж (первые 3)
    const hitProducts = products.slice(0, 3);

    // ---------- Элементы DOM ----------
    const homePage = document.getElementById('home-page');
    const categoryPage = document.getElementById('category-page');
    const productPage = document.getElementById('product-page');
    const hitsContainer = document.getElementById('hits-container');
    const categoryProductsContainer = document.getElementById('category-products-container');
    const tabs = document.querySelectorAll('.tab');
    const categoryTitle = document.getElementById('category-title');
    const brandFilters = document.querySelectorAll('.brand-filter');
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    const sortSelect = document.querySelector('.sort-select');
    const cartCountSpan = document.querySelector('.cart-count');
    const addToCartBtn = document.getElementById('add-to-cart');
    const productMainImage = document.getElementById('product-main-image');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productBrand = document.getElementById('product-brand');
    const productDescription = document.getElementById('product-description');
    const thumbnailsContainer = document.getElementById('product-thumbnails');
    const sliderPrev = document.getElementById('slider-prev');
    const sliderNext = document.getElementById('slider-next');
    const logo = document.getElementById('logo');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const catShoes = document.getElementById('cat-shoes');
    const catClothing = document.getElementById('cat-clothing');
    const sizeOptions = document.getElementById('size-options');
    const colorSelect = document.getElementById('color-options');
    const backToHome = document.getElementById('back-to-home');
    const burgerIcon = document.getElementById('burger-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const filterToggle = document.getElementById('mobile-filter-toggle');
    const filterSidebar = document.querySelector('.filter-sidebar');

    // Корзина
    const cartModal = document.getElementById('cart-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCart = document.querySelector('.close-cart');
    const closeCheckout = document.querySelector('.close-checkout');
    const cartIconWrapper = document.getElementById('cart-icon-wrapper');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalSpan = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');
    const orderItemsList = document.getElementById('order-items-list');
    const orderTotalSpan = document.getElementById('order-total-price');
    const cartMessage = document.getElementById('cart-message');
    const checkoutMessage = document.getElementById('checkout-message');

    // ---------- Состояние ----------
    let currentGender = null;
    let currentCategory = null;
    let currentProduct = null;
    let currentImageIndex = 0;
    let selectedSize = null;
    let selectedColor = 'Красный';

    // Корзина (загружаем из localStorage)
    let cart = JSON.parse(localStorage.getItem('lamoda_cart')) || [];

    // ---------- Функции для сообщений ----------
    function showCartMessage(text, isError = true) {
        if (cartMessage) {
            cartMessage.textContent = text;
            cartMessage.className = `cart-message show ${isError ? 'error' : 'success'}`;
            setTimeout(() => cartMessage.classList.remove('show'), 3000);
        }
    }

    function showCheckoutMessage(text, isError = true) {
        if (checkoutMessage) {
            checkoutMessage.textContent = text;
            checkoutMessage.className = `checkout-message show ${isError ? 'error' : 'success'}`;
            setTimeout(() => checkoutMessage.classList.remove('show'), 3000);
        }
    }

    // ---------- Функции корзины ----------
    function saveCart() {
        localStorage.setItem('lamoda_cart', JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        if (cartCountSpan) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountSpan.textContent = totalItems;
            // Обновляем счётчик в мобильном меню
            const mobileCount = document.querySelector('.mobile-menu .cart-count');
            if (mobileCount) mobileCount.textContent = totalItems;
        }
    }

    function addToCart(product, size, color) {
        const existingItem = cart.find(item => 
            item.id === product.id && item.size === size && item.color === color
        );
        if (existingItem) {
            existingItem.quantity++;
            showCartMessage('Количество товара увеличено', false);
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                size: size,
                color: color,
                quantity: 1
            });
            showCartMessage('Товар добавлен в корзину', false);
        }
        saveCart();
        renderCartItems();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCart();
        renderCartItems();
        showCartMessage('Товар удалён из корзины', false);
    }

    function updateQuantity(index, delta) {
        if (cart[index].quantity + delta > 0) {
            cart[index].quantity += delta;
        } else {
            cart.splice(index, 1);
        }
        saveCart();
        renderCartItems();
    }

    function renderCartItems() {
        if (!cartItemsContainer) return;
        let html = '';
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            html += `
                <div class="cart-item">
                    <div class="cart-item-image" style="background-image: url('${item.image}');"></div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-size">Размер: ${item.size}, Цвет: ${item.color}</div>
                        <div class="cart-item-price">${item.price.toLocaleString()} ₽</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="window.updateQuantity(${index}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="window.updateQuantity(${index}, 1)">+</button>
                            <button class="remove-btn" onclick="window.removeFromCart(${index})">Удалить</button>
                        </div>
                    </div>
                </div>
            `;
        });
        cartItemsContainer.innerHTML = html || '<p>Корзина пуста</p>';
        if (cartTotalSpan) cartTotalSpan.textContent = total.toLocaleString() + ' ₽';
        if (checkoutModal && !checkoutModal.classList.contains('hidden')) {
            renderOrderSummary();
        }
    }

    function renderOrderSummary() {
        let html = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            html += `
                <div class="order-item">
                    <span>${item.name} (${item.size}, ${item.color}) x${item.quantity}</span>
                    <span>${(item.price * item.quantity).toLocaleString()} ₽</span>
                </div>
            `;
        });
        if (orderItemsList) orderItemsList.innerHTML = html;
        if (orderTotalSpan) orderTotalSpan.textContent = total.toLocaleString() + ' ₽';
    }

    // Делаем функции глобальными
    window.removeFromCart = removeFromCart;
    window.updateQuantity = updateQuantity;

    // ---------- Отправка заказа в Telegram (имитация) ----------
    async function sendOrderToTelegram(orderData) {
        console.log('Отправка заказа в Telegram:', orderData);
        return true;
    }

    // ---------- Обработчики корзины ----------
    if (cartIconWrapper) {
        cartIconWrapper.addEventListener('click', () => {
            renderCartItems();
            if (cartMessage) cartMessage.classList.remove('show');
            if (cartModal) cartModal.classList.remove('hidden');
        });
    }

    // Клик по корзине в мобильном меню
    document.querySelector('.mobile-cart')?.addEventListener('click', () => {
        renderCartItems();
        if (cartMessage) cartMessage.classList.remove('show');
        if (cartModal) cartModal.classList.remove('hidden');
        // Закрываем мобильное меню
        if (burgerIcon && mobileMenu) {
            burgerIcon.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    if (closeCart) {
        closeCart.addEventListener('click', () => {
            if (cartModal) cartModal.classList.add('hidden');
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showCartMessage('Корзина пуста', true);
                return;
            }
            if (cartModal) cartModal.classList.add('hidden');
            renderOrderSummary();
            if (checkoutMessage) checkoutMessage.classList.remove('show');
            if (checkoutModal) checkoutModal.classList.remove('hidden');
        });
    }

    if (closeCheckout) {
        closeCheckout.addEventListener('click', () => {
            if (checkoutModal) checkoutModal.classList.add('hidden');
        });
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const phone = document.getElementById('phone')?.value;
            const address = document.getElementById('address')?.value;
            const email = document.getElementById('email')?.value;

            if (!phone || !address || !email) {
                showCheckoutMessage('Заполните все поля', true);
                return;
            }

            const itemsList = cart.map(item => 
                `${item.name} (${item.size}, ${item.color}) x${item.quantity} = ${(item.price * item.quantity).toLocaleString()} ₽`
            ).join('\n');
            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

            const orderData = {
                phone,
                address,
                email,
                items: itemsList,
                total: total.toLocaleString()
            };

            const success = await sendOrderToTelegram(orderData);
            if (success) {
                showCheckoutMessage('Заказ успешно оформлен!', false);
                cart = [];
                saveCart();
                renderCartItems();
                setTimeout(() => {
                    if (checkoutModal) checkoutModal.classList.add('hidden');
                }, 2000);
            } else {
                showCheckoutMessage('Ошибка при оформлении заказа', true);
            }
        });
    }

    // ---------- Функции отрисовки карточек ----------
    function renderHits() {
        if (!hitsContainer) return;
        let html = '';
        hitProducts.forEach(p => {
            html += `
                <div class="product-card" data-id="${p.id}">
                    <div class="product-image" style="background-image: url('${p.images[0]}');"></div>
                    <div class="product-name">${p.name}</div>
                    <div class="product-price">${p.price.toLocaleString()} ₽</div>
                    <div class="product-brand">${p.brand}</div>
                    <button class="product-link" data-id="${p.id}">Подробнее</button>
                </div>
            `;
        });
        hitsContainer.innerHTML = html;
        attachProductCardListeners(hitsContainer);
    }

    function attachProductCardListeners(container) {
        if (!container) return;
        container.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.tagName !== 'BUTTON') {
                    const id = card.dataset.id;
                    openProductPage(id);
                }
            });
        });
        container.querySelectorAll('.product-link').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                openProductPage(id);
            });
        });
    }

    // ---------- Динамический фильтр размеров ----------
    function renderSizeFilters(productsList) {
        const sizeFilterContainer = document.querySelector('.size-filter-container');
        if (!sizeFilterContainer) return;

        const allSizes = new Set();
        productsList.forEach(p => {
            p.sizes.forEach(s => allSizes.add(s));
        });

        const sortedSizes = Array.from(allSizes).sort((a, b) => {
            const aNum = !isNaN(parseFloat(a)) && isFinite(a);
            const bNum = !isNaN(parseFloat(b)) && isFinite(b);
            if (aNum && bNum) return parseFloat(a) - parseFloat(b);
            if (aNum) return -1;
            if (bNum) return 1;
            return a.localeCompare(b);
        });

        let html = '';
        sortedSizes.forEach(size => {
            html += `<label><input type="checkbox" class="size-filter" value="${size}"> ${size}</label>`;
        });
        sizeFilterContainer.innerHTML = html;

        document.querySelectorAll('.size-filter').forEach(cb => {
            cb.addEventListener('change', () => {
                renderCategoryProducts();
                saveCategoryState();
            });
        });
    }

    function renderCategoryProducts() {
        if (!categoryProductsContainer) return;

        let filtered = products.filter(p => {
            if (currentGender && p.gender !== currentGender) return false;
            if (currentCategory && p.category !== currentCategory) return false;
            const selectedBrands = Array.from(brandFilters).filter(cb => cb.checked).map(cb => cb.value);
            if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
            const currentSizeFilters = document.querySelectorAll('.size-filter');
            const selectedSizes = Array.from(currentSizeFilters).filter(cb => cb.checked).map(cb => cb.value);
            if (selectedSizes.length && !p.sizes.some(s => selectedSizes.includes(s))) return false;
            const min = priceMin.value ? Number(priceMin.value) : 0;
            const max = priceMax.value ? Number(priceMax.value) : Infinity;
            if (p.price < min || p.price > max) return false;
            return true;
        });

        const sort = sortSelect.value;
        if (sort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
        if (sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);

        let baseForSizes = products.filter(p => {
            if (currentGender && p.gender !== currentGender) return false;
            if (currentCategory && p.category !== currentCategory) return false;
            return true;
        });
        renderSizeFilters(baseForSizes);

        let html = '';
        filtered.forEach(p => {
            html += `
                <div class="product-card" data-id="${p.id}">
                    <div class="product-image" style="background-image: url('${p.images[0]}');"></div>
                    <div class="product-name">${p.name}</div>
                    <div class="product-price">${p.price.toLocaleString()} ₽</div>
                    <div class="product-brand">${p.brand}</div>
                    <button class="product-link" data-id="${p.id}">Подробнее</button>
                </div>
            `;
        });
        categoryProductsContainer.innerHTML = html;
        attachProductCardListeners(categoryProductsContainer);
    }

    // ---------- Детальная страница ----------
    function openProductPage(id) {
        const product = products.find(p => p.id == id);
        if (!product) return;
        currentProduct = product;
        currentImageIndex = 0;
        selectedSize = product.sizes[0] || null;
        selectedColor = 'Красный';
        updateProductDetail(product);
        renderSizeOptions(product.sizes);
        showPage(productPage);
    }

    function renderSizeOptions(sizes) {
        if (!sizeOptions) return;
        let html = '';
        sizes.forEach(size => {
            const isSelected = (size === selectedSize) ? 'selected' : '';
            html += `<button class="size-btn ${isSelected}" data-size="${size}">${size}</button>`;
        });
        sizeOptions.innerHTML = html;
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedSize = btn.dataset.size;
            });
        });
    }

    function updateProductDetail(product) {
        if (productName) productName.textContent = product.name;
        if (productPrice) productPrice.textContent = product.price.toLocaleString() + ' ₽';
        if (productBrand) productBrand.textContent = product.brand;
        if (productDescription) productDescription.textContent = product.description;
        if (productMainImage) productMainImage.src = product.images[0];
        let thumbHtml = '';
        product.images.forEach((img, idx) => {
            thumbHtml += `<img src="${img}" class="thumbnail ${idx === 0 ? 'active' : ''}" data-index="${idx}">`;
        });
        if (thumbnailsContainer) thumbnailsContainer.innerHTML = thumbHtml;
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', function() {
                currentImageIndex = parseInt(this.dataset.index);
                if (productMainImage) productMainImage.src = product.images[currentImageIndex];
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // ---------- Сохранение состояния ----------
    function savePageState(page, params = {}) {
        const state = {
            page: page.id,
            params: params
        };
        localStorage.setItem('lamoda_page_state', JSON.stringify(state));
    }

    function saveCategoryState() {
        if (!categoryPage.classList.contains('hidden')) {
            const filters = {
                brands: Array.from(brandFilters).filter(cb => cb.checked).map(cb => cb.value),
                sizes: Array.from(document.querySelectorAll('.size-filter')).filter(cb => cb.checked).map(cb => cb.value),
                priceMin: priceMin.value,
                priceMax: priceMax.value,
                sort: sortSelect.value
            };
            savePageState(categoryPage, {
                gender: currentGender,
                category: currentCategory,
                title: categoryTitle.textContent,
                filters: filters
            });
        }
    }

    function showPage(page) {
        if (homePage) homePage.classList.add('hidden');
        if (categoryPage) categoryPage.classList.add('hidden');
        if (productPage) productPage.classList.add('hidden');
        if (page) page.classList.remove('hidden');

        if (backToHome) {
            if (page === homePage) {
                backToHome.classList.add('hidden');
            } else {
                backToHome.classList.remove('hidden');
            }
        }

        if (page === homePage) {
            savePageState(page);
        } else if (page === categoryPage) {
            saveCategoryState();
        } else if (page === productPage && currentProduct) {
            savePageState(page, { productId: currentProduct.id });
        }
    }

    function loadPageState() {
        const saved = localStorage.getItem('lamoda_page_state');
        if (!saved) return;

        try {
            const state = JSON.parse(saved);
            switch (state.page) {
                case 'home-page':
                    showPage(homePage);
                    break;
                case 'category-page':
                    if (state.params) {
                        currentGender = state.params.gender || null;
                        currentCategory = state.params.category || null;
                        categoryTitle.textContent = state.params.title || 'Каталог';
                        resetFilters();
                        renderCategoryProducts();
                        if (state.params.filters) {
                            const f = state.params.filters;
                            brandFilters.forEach(cb => {
                                cb.checked = f.brands ? f.brands.includes(cb.value) : false;
                            });
                            setTimeout(() => {
                                const sizeCbs = document.querySelectorAll('.size-filter');
                                sizeCbs.forEach(cb => {
                                    cb.checked = f.sizes ? f.sizes.includes(cb.value) : false;
                                });
                                priceMin.value = f.priceMin || '';
                                priceMax.value = f.priceMax || '';
                                sortSelect.value = f.sort || 'default';
                                renderCategoryProducts();
                            }, 50);
                        }
                        showPage(categoryPage);
                    } else {
                        showPage(homePage);
                    }
                    break;
                case 'product-page':
                    if (state.params && state.params.productId) {
                        openProductPage(state.params.productId);
                    } else {
                        showPage(homePage);
                    }
                    break;
                default:
                    showPage(homePage);
            }
        } catch (e) {
            console.warn('Ошибка загрузки состояния', e);
            showPage(homePage);
        }
    }

    function resetFilters() {
        brandFilters.forEach(cb => cb.checked = false);
        const sizeContainer = document.querySelector('.size-filter-container');
        if (sizeContainer) sizeContainer.innerHTML = '';
        if (priceMin) priceMin.value = '';
        if (priceMax) priceMax.value = '';
        if (sortSelect) sortSelect.value = 'default';
    }

    function loadCatalog(gender = null, category = null, title = 'Каталог') {
        currentGender = gender;
        currentCategory = category;
        if (categoryTitle) categoryTitle.textContent = title;
        resetFilters();
        renderCategoryProducts();
        showPage(categoryPage);
    }

    // ---------- Обработчики ----------
    if (tabs.length) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const gender = this.dataset.gender;
                const title = gender === 'women' ? 'Женская одежда' : 'Мужская одежда';
                loadCatalog(gender, null, title);
                if (burgerIcon && mobileMenu) {
                    burgerIcon.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            });
        });
    }

    if (categoryBtns.length) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const category = this.dataset.category;
                const title = category === 'shoes' ? 'Обувь' : 'Одежда';
                loadCatalog(null, category, title);
            });
        });
    }

    if (catShoes) {
        catShoes.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON') return;
            loadCatalog(null, 'shoes', 'Обувь');
        });
    }
    if (catClothing) {
        catClothing.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON') return;
            loadCatalog(null, 'clothing', 'Одежда');
        });
    }

    if (backToHome) {
        backToHome.addEventListener('click', function() {
            showPage(homePage);
            tabs.forEach(t => t.classList.remove('active'));
        });
    }

    if (logo) {
        logo.addEventListener('click', function() {
            showPage(homePage);
            tabs.forEach(t => t.classList.remove('active'));
        });
    }

    brandFilters.forEach(cb => cb.addEventListener('change', () => {
        renderCategoryProducts();
        saveCategoryState();
    }));

    if (priceMin) priceMin.addEventListener('input', () => {
        renderCategoryProducts();
        saveCategoryState();
    });
    if (priceMax) priceMax.addEventListener('input', () => {
        renderCategoryProducts();
        saveCategoryState();
    });
    if (sortSelect) sortSelect.addEventListener('change', () => {
        renderCategoryProducts();
        saveCategoryState();
    });

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            if (!currentProduct) {
                showCartMessage('Товар не выбран', true);
                return;
            }
            if (!selectedSize) {
                showCartMessage('Выберите размер', true);
                return;
            }
            addToCart(currentProduct, selectedSize, selectedColor);
        });
    }

    if (sliderPrev) {
        sliderPrev.addEventListener('click', () => {
            if (!currentProduct) return;
            currentImageIndex = (currentImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
            if (productMainImage) productMainImage.src = currentProduct.images[currentImageIndex];
            updateThumbnailsActive();
        });
    }
    if (sliderNext) {
        sliderNext.addEventListener('click', () => {
            if (!currentProduct) return;
            currentImageIndex = (currentImageIndex + 1) % currentProduct.images.length;
            if (productMainImage) productMainImage.src = currentProduct.images[currentImageIndex];
            updateThumbnailsActive();
        });
    }
    function updateThumbnailsActive() {
        document.querySelectorAll('.thumbnail').forEach((thumb, idx) => {
            thumb.classList.toggle('active', idx === currentImageIndex);
        });
    }

    if (colorSelect) {
        colorSelect.addEventListener('change', (e) => {
            selectedColor = e.target.value;
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === cartModal && cartModal) cartModal.classList.add('hidden');
        if (e.target === checkoutModal && checkoutModal) checkoutModal.classList.add('hidden');
    });

    // ---------- Бургер-меню ----------
    if (burgerIcon && mobileMenu) {
        burgerIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            burgerIcon.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            // обновляем счётчик при открытии
            const mobileCount = mobileMenu.querySelector('.cart-count');
            if (mobileCount && cartCountSpan) {
                mobileCount.textContent = cartCountSpan.textContent;
            }
        });

        mobileMenu.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                burgerIcon.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', function(e) {
            if (!burgerIcon.contains(e.target) && !mobileMenu.contains(e.target)) {
                burgerIcon.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }

    // ---------- Мобильный фильтр ----------
    if (filterToggle && filterSidebar) {
        filterToggle.addEventListener('click', function() {
            filterSidebar.classList.toggle('mobile-visible');
            const isVisible = filterSidebar.classList.contains('mobile-visible');
            filterToggle.innerHTML = isVisible ? '<i class="fas fa-times"></i> Закрыть' : '<i class="fas fa-sliders-h"></i> Фильтр';
        });
    }

    // Инициализация
    renderHits();
    loadPageState();
    updateCartCount();

    console.log('Инициализация завершена');
});
