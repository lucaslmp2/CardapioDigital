// array de objetos representando o cardápio
const menu = [
    {
        category: 'PIZZAS',
        items: [
            {name: 'Pizza Calabresa', price: 45.00, description: 'Molho de tomate fresco, calabresa especial fatiada, rodelas de cebola, orégano e azeitonas.'},
            {name: 'Pizza Frango c/ Catupiry', price: 45.00, description: 'Molho de tomate fresco, cobertura de catupiry, frango desfiado, orégano e azeitonas.'},
            {name: 'Pizza CARNE SECA C/Banana', price: 50.00, description: 'Molho de tomate fresco, Mussarela, Carne seca e banana da terra'},
            {name: 'PIZZA PORTUGUESA', price: 56.00, description: 'Molho de Tomate, Ovo Calabresa, Presunto, Mussarela Oregano e Cebola'},
            {name: 'Pizza CARNE SECA Acebolada', price: 47.00, description: 'Molho de tomate fresco, Mussarela, Carne seca e cebola'},
            {name: 'Pizza CARNE SECA C/Catupiry', price: 50.00, description: 'Molho de tomate fresco, Mussarela, Carne seca, milho, orégano e catupiry'},
            {name: 'Pizza Milho', price: 45.00, description: 'Molho de tomate fresco, Mussarela, Milho, Rodelas de cebola, Orégano e azeitonas.'},
            {name: 'Pizza Marguerita', price: 45.00, description: 'Mussarela, Manjericão, Molho de Tomate, Orégano e Azeitonas.'},
            {name: 'Pizza Atum', price: 45.00, description: 'Molho de tomate, Mussarela, atum, cebola e orégano.'},
            {name: 'Pizza Quatro Queijos', price: 56.00, description: 'Mussarela, Provolone, Parmesão, Catupiry ou Requeijão, Molho de Tomate, Orégano e Azeitonas.'},
            {name: 'Pizza Cheddar com Bacon', price: 50.00, description: 'Mussarela, cheddar, bacon, Molho de Tomate, Orégano e Azeitonas.'},
            {name: 'Pizza Frango Especial', price: 56.00, description: 'Mussarela, frango, milho, bacon, catupiy, Tomate, Molho de Tomate, Orégano e Azeitonas.'},
            {name: 'Pizza Costelinha', price: 56.00, description: 'mussarela, costela, molho, barbecue, orégano'},
            {name: 'Pizza de Bacon', price: 50.00, description: 'Molho de tomate fresco, queijo, Bacon, rodelas de cebola, orégano e azeitonas.'},
            {name: 'Pizza Frango c/ Bacon', price: 50.00, description: 'Molho de tomate fresco, queijo, frango desfiado, bacon picado, orégano e azeitonas.'},
            {name: 'Pizza Lombo Canadense', price: 50.00, description: 'Mussarela, Lombo Canadense, Catupiry, Molho de Tomate, Orégano e Azeitonas.'},
            {name: 'Pizza Crocante', price: 56.00, description: 'molho de tomate, mussarela, presunto, milho, bacon, batata palha, orégano'},
            {name: 'Pizza Mista', price: 50.00, description: 'molho, mussarela, presunto, frango, milho, calabresa, orégano'},
            {name: 'Pizza Moda da Mayara', price: 56.00, description: 'molho, azeitona, catupiry, cebola, banana, orégano, carne seca e mussarela'}
        ]
    },
    {
        category: 'PIZZAS DOCES',
        items: [
            {name: 'Pizza de Chocolate', price: 45.00, description: 'Mussarela, chocolate, granulado'},
            {name: 'Pizza de Romeu e Julieta', price: 45.00, description: 'Mussarela e goiabada'},
            {name: 'Pizza de Banana com Canela', price: 45.00, description: 'Mussarela, Banana, canela, leite condensado'}
        ]
    },
    {
        category: 'PORÇÕES',
        items: [
            {name: 'Batata Frita, carne, Calabresa Acebolada', price: 40.00, description: 'Serve 2 pessoas'},
            {name: 'Batata Frita, carne, Frango, Calabresa e Cheddar', price: 50.00, description: ''},
            {name: 'Batata Frita Tradicional', price: 10.00, description: ''},
            {name: 'Batata c/ Carne seca e catupiry', price: 20.00, description: ''},
            {name: 'Frango coreano', price: 25.00, description: ''},
            {name: 'Costelinha de porco frita', price: 25.00, description: 'c/ farofa de manteiga e vinagrete'},
            {name: 'Coxinha da asa', price: 30.00, description: 'c/ farofa de manteiga e vinagrete'},
            {name: 'Porção de tulipa frita', price: 15.00, description: 'c/maionese caseira'},
            {name: 'Amostradinho', price: 18.00, description: 'pirão de aipim, vinagrete, carne do sol e calabresa'},
            {name: 'Cuscuz recheado sabor carne seca', price: 25.00, description: 'c/molho de queijo'},
            {name: 'Cuscuz recheado sabor calabresa com bacon', price: 15.00, description: 'c/molho de queijo'},
            {name: 'Codorna frita', price: 15.00, description: 'c/ farofa de manteiga e vinagrete'}
        ]
    },
    {
        category: 'ESFIHAS',
        items: [
            {name: 'Esfiha Carne', price: 4.00, description: ''},
            {name: 'Esfiha Frango com catupiry', price: 4.00, description: ''},
            {name: 'Esfiha Carne seca com banana', price: 5.00, description: ''},
            {name: 'Esfiha Bacon', price: 5.00, description: ''},
            {name: 'Esfiha Queijo', price: 4.00, description: ''},
            {name: 'Esfiha Banana com canela', price: 5.00, description: ''},
            {name: 'Esfiha Romeu e Julieta', price: 5.00, description: ''},
            {name: 'Esfiha Chocolate', price: 4.00, description: ''},
            {name: 'Esfiha Calabresa', price: 4.00, description: ''}
        ]
    },
    {
        category: 'CERVEJAS',
        items: [
            {name: 'Heineken', price: 10.00, description: ''},
            {name: 'Skol 330ml', price: 5.00, description: ''},
            {name: 'Brahma lata', price: 6.00, description: ''},
            {name: 'Coronita', price: 10.00, description: ''},
            {name: 'Budweiser', price: 10.00, description: ''},
            {name: 'Amstel lata', price: 6.00, description: ''},
            {name: 'Original lata', price: 6.00, description: ''},
            {name: 'Skol lata', price: 6.00, description: ''},
            {name: 'Ice Cabaré', price: 10.00, description: ''}
        ]
    },
    {
        category: 'BEBIDAS SEM ÁLCOOL',
        items: [
            {name: 'Suco Natural', price: 6.00, description: ''},
            {name: 'Água Mineral', price: 4.00, description: ''},
            {name: 'Água Mineral c/ Gás', price: 4.00, description: ''},
            {name: 'Coca-cola 1 Litro', price: 10.00, description: ''},
            {name: 'Guaraná Antártica 1 Litro', price: 9.00, description: ''},
            {name: 'Energético Redbull', price: 15.00, description: ''}
        ]
    },
    {
        category: 'DRINKS',
        items: [
            {name: 'Amanhecer', price: 25.00, description: 'Ice cabaré, laranja, maracujá, leite condensado e gelo'},
            {name: 'Amor perfeito', price: 25.00, description: 'Framboesa, morango, leite condensado, creme de leite , gelo e vodka'},
            {name: 'Ice vibe', price: 25.00, description: 'Ice de frutas vermelhas, gelo, leite condensado, Framboesa, morango e vodka meio copinho'},
            {name: 'Beijo vermelho', price: 25.00, description: 'Framboesa, gelo, Sprite e vodka'},
            {name: 'Caipirinha', price: 18.00, description: 'Sabores: kiwi, limão, maracujá e morango'},
            {name: 'Pina Colada', price: 16.00, description: 'Abacaxi, leite de coco, leite condesado, rum e gelo'},
            {name: 'Gin', price: 18.00, description: 'Água tônica, fruta e gin'},
            {name: 'Flor Vermelha', price: 18.00, description: 'Framboesa, Açucar, Gelo e Vodka'},
            {name: 'Tropical Vermelho', price: 28.00, description: 'Framboesa, açucar, gelo, morango, leite condensado, creme de leite, Vodka'},
            {name: 'Céu Estrelado', price: 25.00, description: 'Tônico, leite condensado, vodka, gelo, fanta uva'},
            {name: 'Drink Misterioso', price: 20.00, description: '???'}
        ]
    }
];

const order = [];
let currentItem = null; // track which item is being customized
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-modal');
const cancelBtn = document.getElementById('cancel-btn');
const confirmBtn = document.getElementById('confirm-btn');
const quantityInput = document.getElementById('quantity');
const observationsInput = document.getElementById('observations');
const modalTitle = document.getElementById('modal-title');

// Modal functions
function openModal(item) {
    currentItem = item;
    modalTitle.textContent = item.name;
    quantityInput.value = 1;
    observationsInput.value = '';
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    currentItem = null;
}

function addItemFromModal() {
    if (!currentItem) return;
    
    const quantity = parseInt(quantityInput.value) || 1;
    const observations = observationsInput.value.trim();
    
    // build item name with observations if provided
    let name = currentItem.name;
    if (observations) {
        name += ` (${observations})`;
    }
    
    // check if exact same item (with observations) already exists
    const existing = order.find(i => i.name === name);
    if (existing) {
        existing.quantity += quantity;
    } else {
        order.push({ 
            name, 
            price: currentItem.price, 
            description: currentItem.description, 
            quantity 
        });
    }
    
    closeModal();
    updateWhatsappButton();
}

// Modal event listeners
closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);
confirmBtn.addEventListener('click', addItemFromModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

quantityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItemFromModal();
});

// helper for pizza customization
function renderMenu() {
    const container = document.getElementById('menu-container');
    // prepare list of pizzas for flavor selection
    const pizzaNames = menu
        .filter(s => s.category.toUpperCase().includes('PIZZA'))
        .flatMap(s => s.items.map(i => ({name: i.name, price: i.price})));

    menu.forEach(section => {
        const catDiv = document.createElement('div');
        catDiv.className = 'category';
        const heading = document.createElement('h2');
        heading.textContent = section.category;
        catDiv.appendChild(heading);
        section.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.style.cursor = 'pointer';
            
            const info = document.createElement('div');
            // ensure first letter of name is uppercase
            const displayName = item.name.charAt(0).toUpperCase() + item.name.slice(1);
            info.innerHTML = `<strong>${displayName}</strong> - R$ ${item.price.toFixed(2)}`;
            if (item.description) {
                const desc = document.createElement('div');
                desc.textContent = item.description;
                desc.style.fontSize = '0.9rem';
                desc.style.color = '#666';
                info.appendChild(desc);
            }
            
            // pizzas need special handling for customization
            if (section.category.toUpperCase().includes('PIZZA')) {
                itemDiv.addEventListener('click', () => {
                    openPizzaCustomizationModal(item, pizzaNames);
                });
            } else {
                // regular items go straight to modal
                itemDiv.addEventListener('click', () => openModal(item));
            }
            
            itemDiv.appendChild(info);
            catDiv.appendChild(itemDiv);
        });
        container.appendChild(catDiv);
    });
}


function updateWhatsappButton() {
    const fab = document.getElementById('whatsapp-fab');
    const counter = document.getElementById('fab-counter');
    const icon = document.getElementById('fab-icon');
    
    // Calculate total items
    const totalItems = order.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems === 0) {
        fab.classList.add('disabled');
        counter.classList.add('hidden');
        icon.textContent = '🔒'; // empty cart
    } else {
        fab.classList.remove('disabled');
        counter.classList.remove('hidden');
        counter.textContent = totalItems;
        icon.textContent = '🛒'; // full cart
    }
}

function generateWhatsappLink() {
    let text = 'Pedido%3A%0A'; // URL encoded
    let total = 0;
    order.forEach(i => {
        text += `${encodeURIComponent(i.quantity + 'x ' + i.name)}%20- R$%20${encodeURIComponent(i.price.toFixed(2))}%0A`;
        total += i.quantity * i.price;
    });
    // append total
    text += `%0ATotal%3A%20R%24%20${encodeURIComponent(total.toFixed(2))}`;
    // use fixed restaurant number
    const number = '5573988819190'; // sem símbolos
    return `https://wa.me/${number}?text=${text}`;
}

document.getElementById('whatsapp-fab').addEventListener('click', () => {
    const fab = document.getElementById('whatsapp-fab');
    if (!fab.classList.contains('disabled') && order.length > 0) {
        openOrderReviewModal();
    }
});

// Order review modal functions
function openOrderReviewModal() {
    renderOrderItems();
    document.getElementById('order-modal').classList.remove('hidden');
}

function renderOrderItems() {
    const orderItemsEl = document.getElementById('order-items');
    const orderTotalEl = document.getElementById('order-total');
    
    orderItemsEl.innerHTML = '';
    let total = 0;
    
    order.forEach((item, index) => {
        const itemTotal = item.quantity * item.price;
        total += itemTotal;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'order-item';
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'order-item-info';
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'order-item-name';
        nameDiv.textContent = item.name;
        
        const priceDiv = document.createElement('div');
        priceDiv.className = 'order-item-price';
        priceDiv.textContent = `${item.quantity}x R$ ${item.price.toFixed(2)} = R$ ${itemTotal.toFixed(2)}`;
        
        infoDiv.appendChild(nameDiv);
        infoDiv.appendChild(priceDiv);
        
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'order-item-controls';
        
        // Quantity controls
        const quantityControls = document.createElement('div');
        quantityControls.className = 'quantity-controls';
        
        const minusBtn = document.createElement('button');
        minusBtn.className = 'quantity-btn';
        minusBtn.textContent = '-';
        minusBtn.addEventListener('click', () => updateItemQuantity(index, item.quantity - 1));
        
        const quantityDisplay = document.createElement('span');
        quantityDisplay.className = 'quantity-display';
        quantityDisplay.textContent = item.quantity;
        
        const plusBtn = document.createElement('button');
        plusBtn.className = 'quantity-btn';
        plusBtn.textContent = '+';
        plusBtn.addEventListener('click', () => updateItemQuantity(index, item.quantity + 1));
        
        quantityControls.appendChild(minusBtn);
        quantityControls.appendChild(quantityDisplay);
        quantityControls.appendChild(plusBtn);
        
        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remover';
        removeBtn.addEventListener('click', () => removeItem(index));
        
        controlsDiv.appendChild(quantityControls);
        controlsDiv.appendChild(removeBtn);
        
        itemDiv.appendChild(infoDiv);
        itemDiv.appendChild(controlsDiv);
        
        orderItemsEl.appendChild(itemDiv);
    });
    
    // Update total
    orderTotalEl.innerHTML = `
        <span class="total-label">Total:</span>
        <span class="total-amount">R$ ${total.toFixed(2)}</span>
    `;
}

function updateItemQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        removeItem(index);
        return;
    }
    order[index].quantity = newQuantity;
    renderOrderItems();
    updateWhatsappButton();
}

function removeItem(index) {
    order.splice(index, 1);
    renderOrderItems();
    updateWhatsappButton();
}

// Order modal event listeners
const orderModal = document.getElementById('order-modal');
const closeOrderModal = document.getElementById('close-order-modal');
const continueShoppingBtn = document.getElementById('continue-shopping');
const sendOrderBtn = document.getElementById('send-order');

closeOrderModal.addEventListener('click', () => {
    orderModal.classList.add('hidden');
});

continueShoppingBtn.addEventListener('click', () => {
    orderModal.classList.add('hidden');
});

sendOrderBtn.addEventListener('click', () => {
    orderModal.classList.add('hidden');
    window.open(generateWhatsappLink(), '_blank');
});

orderModal.addEventListener('click', (e) => {
    if (e.target === orderModal) orderModal.classList.add('hidden');
});

// inicializa
renderMenu();
updateWhatsappButton();

// Pizza customization modals
function openPizzaCustomizationModal(item, pizzaList) {
    // Store current state for pizza customization
    window.pizzaCustomizing = {
        item: item,
        second: null,
        secondPrice: 0,
        extra: null,
        extraFee: 0
    };

    // Populate pizza flavor list
    const pizzaListEl = document.getElementById('pizza-list');
    pizzaListEl.innerHTML = '';
    
    pizzaList.forEach(flavor => {
        const btn = document.createElement('button');
        btn.className = 'pizza-option-btn';
        btn.textContent = `${flavor.name} - R$ ${flavor.price.toFixed(2)}`;
        btn.addEventListener('click', () => selectSecondFlavor(flavor));
        pizzaListEl.appendChild(btn);
    });
    
    // Show pizza selection modal
    document.getElementById('pizza-modal').classList.remove('hidden');
}

function selectSecondFlavor(flavor) {
    window.pizzaCustomizing.second = flavor.name;
    window.pizzaCustomizing.secondPrice = flavor.price;
    document.getElementById('pizza-modal').classList.add('hidden');
    
    // Open addon modal
    document.getElementById('addon-modal').classList.remove('hidden');
    document.getElementById('addon-input').value = '';
}

function proceedWithPizzaCustomization(addon) {
    const customizing = window.pizzaCustomizing;
    
    // build custom item name
    let customName = customizing.item.name;
    if (customizing.second) customName += ' + ' + customizing.second;
    if (addon) customName += ' + ' + addon;
    
    // calculate price
    let price = customizing.item.price;
    if (customizing.second) price = Math.max(customizing.item.price, customizing.secondPrice);
    if (addon) price += 5.00;

    // now open main modal for quantity and observations
    currentItem = {name: customName, price: price, description: customizing.item.description};
    openModal(currentItem);
    
    // Clean up
    window.pizzaCustomizing = null;
}

// Pizza modal event listeners
const pizzaModal = document.getElementById('pizza-modal');
const closePizzaModal = document.getElementById('close-pizza-modal');
const addonModal = document.getElementById('addon-modal');
const closeAddonModal = document.getElementById('close-addon-modal');
const confirmAddonBtn = document.getElementById('confirm-addon');
const skipAddonBtn = document.getElementById('skip-addon');
const skipSecondFlavorBtn = document.getElementById('skip-second-flavor');

closePizzaModal.addEventListener('click', () => {
    pizzaModal.classList.add('hidden');
});

skipSecondFlavorBtn.addEventListener('click', () => {
    pizzaModal.classList.add('hidden');
    addonModal.classList.remove('hidden');
    document.getElementById('addon-input').value = '';
});

closeAddonModal.addEventListener('click', () => {
    addonModal.classList.add('hidden');
});

skipAddonBtn.addEventListener('click', () => {
    proceedWithPizzaCustomization(null);
    addonModal.classList.add('hidden');
});

confirmAddonBtn.addEventListener('click', () => {
    const addon = document.getElementById('addon-input').value.trim();
    proceedWithPizzaCustomization(addon);
    addonModal.classList.add('hidden');
});

pizzaModal.addEventListener('click', (e) => {
    if (e.target === pizzaModal) pizzaModal.classList.add('hidden');
});

addonModal.addEventListener('click', (e) => {
    if (e.target === addonModal) addonModal.classList.add('hidden');
});

document.getElementById('addon-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const addon = document.getElementById('addon-input').value.trim();
        proceedWithPizzaCustomization(addon);
        addonModal.classList.add('hidden');
    }
});
