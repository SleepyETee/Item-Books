/* 
  Item Books Catalog - Comprehensive Data Operations
  This script manages a dynamic dataset with functions for filtering,
  searching, sorting, grouping, shuffling, and performing CRUD operations.
*/

// ----------------------
// Default Dataset (IDs 1-55)
// ----------------------
const defaultCatalog = [
    { id: 1, name: "Flaming Shard", category: "shard", description: "A blazing fragment imbued with dormant volcano power.", value: 50, rarity: "common", rating: 3, element: "fire", bonusEffect: "increases attack speed" },
    { id: 2, name: "Frost Shard", category: "shard", description: "A chilling fragment perfect for frost magic.", value: 45, rarity: "common", rating: 4, element: "ice", bonusEffect: "reduces enemy attack power" },
    { id: 3, name: "Arcane Crystal", category: "shard", description: "A gleaming crystal pulsing with arcane energy.", value: 65, rarity: "rare", rating: 4, element: "arcane", bonusEffect: "boosts magical potency" },
    { id: 4, name: "Eternal Ember", category: "shard", description: "An ember that never extinguishes, a fragment of primordial flame.", value: 75, rarity: "epic", rating: 5, element: "fire", bonusEffect: "burns enemies over time" },
    { id: 5, name: "Celestial Sword", category: "tool", description: "Forged in the heavens, it cleaves through darkness.", value: 150, rarity: "epic", rating: 5, element: "light", bonusEffect: "bonus damage to undead" },
    { id: 6, name: "Abyssal Armor", category: "tower", description: "A cursed set that absorbs foe power.", value: 130, rarity: "rare", rating: 4, element: "dark", bonusEffect: "increases defense and mana regen" },
    { id: 7, name: "Dragon Heart", category: "potion", description: "An elixir brewed from a dragon's essence, granting immense strength.", value: 100, rarity: "epic", rating: 5, element: "fire", bonusEffect: "boosts physical strength" },
    { id: 8, name: "Dwarven Hammer", category: "tool", description: "A mighty hammer capable of shattering mountains.", value: 140, rarity: "rare", rating: 4, element: "earth", bonusEffect: "stuns enemies on impact" },
    { id: 9, name: "Mystic Wand", category: "tool", description: "A wand channeling mystic energies for powerful spells.", value: 110, rarity: "rare", rating: 4, element: "arcane", bonusEffect: "reduces spell cooldown" },
    { id: 10, name: "Shadow Cloak", category: "tool", description: "Renders the wearer nearly invisible.", value: 120, rarity: "epic", rating: 5, element: "dark", bonusEffect: "increases evasion" },
    { id: 11, name: "Spectral Bow", category: "tool", description: "Pierces both spirit and flesh.", value: 135, rarity: "rare", rating: 4, element: "spirit", bonusEffect: "increases crit chance" },
    { id: 12, name: "Runic Ring", category: "scroll", description: "Etched with ancient runes to boost mana capacity.", value: 80, rarity: "rare", rating: 4, element: "arcane", bonusEffect: "boosts mana capacity" },
    { id: 13, name: "Sorcerer's Tome", category: "scroll", description: "A tome of forbidden spells and ancient lore.", value: 95, rarity: "epic", rating: 5, element: "arcane", bonusEffect: "reduces mana cost" },
    { id: 14, name: "Vanguard Shield", category: "tower", description: "Reflects a portion of incoming damage.", value: 160, rarity: "epic", rating: 5, element: "earth", bonusEffect: "reflects damage" },
    { id: 15, name: "Phantom Blade", category: "tool", description: "A ghostly blade boosting critical chance.", value: 125, rarity: "epic", rating: 5, element: "spirit", bonusEffect: "boosts crit damage" },
    { id: 16, name: "Ancient Talisman", category: "scroll", description: "Connects the wearer to forgotten realms.", value: 90, rarity: "rare", rating: 4, element: "spirit", bonusEffect: "increases resistance" },
    { id: 17, name: "Raven's Feather", category: "potion", description: "Grants insight and agility.", value: 40, rarity: "common", rating: 3, element: "wind", bonusEffect: "increases speed" },
    { id: 18, name: "Moonstone Amulet", category: "tower", description: "Imbued with lunar energy, it heals gradually.", value: 115, rarity: "rare", rating: 4, element: "light", bonusEffect: "heals over time" },
    { id: 19, name: "Sunfire Orb", category: "shard", description: "Channels the power of the sun for bonus damage vs dark foes.", value: 85, rarity: "rare", rating: 4, element: "light", bonusEffect: "bonus damage vs. dark enemies" },
    { id: 20, name: "Stormcaller Relic", category: "tool", description: "Summons storms with a chance to stun.", value: 140, rarity: "epic", rating: 5, element: "wind", bonusEffect: "chance to stun" },
    { id: 21, name: "Griffin Wing", category: "potion", description: "Believed to grant the power of flight.", value: 70, rarity: "rare", rating: 4, element: "wind", bonusEffect: "boosts agility" },
    { id: 22, name: "Titan's Gauntlet", category: "tower", description: "Imbued with titan strength for massive defense.", value: 200, rarity: "epic", rating: 5, element: "earth", bonusEffect: "massive defense boost" },
    { id: 23, name: "Mana Infused Spear", category: "tool", description: "Restores mana on impact.", value: 130, rarity: "rare", rating: 4, element: "arcane", bonusEffect: "restores mana" },
    { id: 24, name: "Nightfall Dagger", category: "tool", description: "Increases stealth and critical damage.", value: 95, rarity: "rare", rating: 4, element: "dark", bonusEffect: "increases stealth" },
    { id: 25, name: "Celestial Cape", category: "tower", description: "Woven from cosmic fibers that drastically reduce damage.", value: 180, rarity: "epic", rating: 5, element: "light", bonusEffect: "drastically reduces damage" },
    // Additional items (IDs 26-55)
    { id: 26, name: "Tempest Shard", category: "shard", description: "A windswept fragment that hums with storm energy.", value: 50, rarity: "common", rating: 3, element: "wind", bonusEffect: "increases attack range" },
    { id: 27, name: "Obsidian Axe", category: "tool", description: "A razor-sharp axe forged from volcanic glass.", value: 115, rarity: "rare", rating: 4, element: "earth", bonusEffect: "increases armor penetration" },
    { id: 28, name: "Starlight Turret", category: "tower", description: "A celestial spire that rains radiant bolts on foes.", value: 140, rarity: "epic", rating: 5, element: "light", bonusEffect: "attacks multiple targets" },
    { id: 29, name: "Viper’s Venom", category: "potion", description: "A toxic brew that enhances poison attacks.", value: 60, rarity: "common", rating: 3, element: "poison", bonusEffect: "adds poison damage" },
    { id: 30, name: "Void Rift Scroll", category: "scroll", description: "A parchment that tears open a rift to banish enemies.", value: 130, rarity: "epic", rating: 5, element: "dark", bonusEffect: "teleports enemies away" },
    { id: 31, name: "Glacial Shard", category: "shard", description: "A frosty sliver radiating icy power.", value: 45, rarity: "common", rating: 3, element: "ice", bonusEffect: "increases freeze duration" },
    { id: 32, name: "Thunder Staff", category: "tool", description: "A staff that crackles with electric fury.", value: 125, rarity: "rare", rating: 4, element: "lightning", bonusEffect: "chains damage to nearby foes" },
    { id: 33, name: "Eclipse Bastion", category: "tower", description: "A shadowy fortress that absorbs light and boosts stealth.", value: 120, rarity: "rare", rating: 4, element: "dark", bonusEffect: "increases ally evasion" },
    { id: 34, name: "Phoenix Tears", category: "potion", description: "A radiant elixir that revives the fallen.", value: 150, rarity: "epic", rating: 5, element: "fire", bonusEffect: "revives user once" },
    { id: 35, name: "Aether Quill", category: "scroll", description: "A feather pen that writes spells into reality.", value: 90, rarity: "rare", rating: 4, element: "arcane", bonusEffect: "increases spell duration" },
    { id: 36, name: "Emerald Shard", category: "shard", description: "A verdant gem pulsing with earthen vitality.", value: 55, rarity: "common", rating: 3, element: "earth", bonusEffect: "increases health regen" },
    { id: 37, name: "Spectral Lantern", category: "tool", description: "A glowing light that reveals hidden foes.", value: 110, rarity: "rare", rating: 4, element: "spirit", bonusEffect: "detects invisible enemies" },
    { id: 38, name: "Maelstrom Spire", category: "tower", description: "A towering vortex that pulls enemies inward.", value: 160, rarity: "epic", rating: 5, element: "wind", bonusEffect: "pulls enemies toward it" },
    { id: 39, name: "Frostbite Tonic", category: "potion", description: "A chilling draught that slows enemy movement.", value: 65, rarity: "common", rating: 3, element: "ice", bonusEffect: "slows enemy movement" },
    { id: 40, name: "Soulbind Scroll", category: "scroll", description: "A scroll that tethers an enemy’s soul, weakening them.", value: 135, rarity: "epic", rating: 5, element: "spirit", bonusEffect: "reduces enemy defense" },
    { id: 41, name: "Blaze Shard", category: "shard", description: "A fiery splinter that ignites with passion.", value: 50, rarity: "common", rating: 3, element: "fire", bonusEffect: "increases burn damage" },
    { id: 42, name: "Graviton Mace", category: "tool", description: "A heavy mace that warps gravity around it.", value: 145, rarity: "epic", rating: 5, element: "earth", bonusEffect: "knocks enemies back" },
    { id: 43, name: "Lunar Sentinel", category: "tower", description: "A moonlit guard that heals allies in its glow.", value: 130, rarity: "rare", rating: 4, element: "light", bonusEffect: "restores ally health" },
    { id: 44, name: "Storm Elixir", category: "potion", description: "A crackling potion that boosts speed and reflexes.", value: 75, rarity: "rare", rating: 4, element: "lightning", bonusEffect: "increases attack speed" },
    { id: 45, name: "Chrono Glyph", category: "scroll", description: "An inscribed stone that bends time briefly.", value: 155, rarity: "epic", rating: 5, element: "arcane", bonusEffect: "slows time for enemies" },
    { id: 46, name: "Toxic Shard", category: "shard", description: "A venomous splinter that festers with decay.", value: 45, rarity: "common", rating: 3, element: "poison", bonusEffect: "increases poison duration" },
    { id: 47, name: "Windreaver Blade", category: "tool", description: "A swift sword that slices through the air.", value: 120, rarity: "rare", rating: 4, element: "wind", bonusEffect: "increases dodge chance" },
    { id: 48, name: "Inferno Watchtower", category: "tower", description: "A blazing pillar that scorches all who approach.", value: 150, rarity: "epic", rating: 5, element: "fire", bonusEffect: "deals area fire damage" },
    { id: 49, name: "Shadow Mist Brew", category: "potion", description: "A dark concoction that cloaks the user in mist.", value: 70, rarity: "rare", rating: 4, element: "dark", bonusEffect: "grants temporary stealth" },
    { id: 50, name: "Astral Map", category: "scroll", description: "A celestial chart that reveals hidden paths.", value: 100, rarity: "rare", rating: 4, element: "spirit", bonusEffect: "reveals map secrets" },
    { id: 51, name: "Thunder Shard", category: "shard", description: "A charged fragment sparking with electric might.", value: 50, rarity: "common", rating: 3, element: "lightning", bonusEffect: "increases shock damage" },
    { id: 52, name: "Crystal Scepter", category: "tool", description: "A regal staff amplifying magical precision.", value: 135, rarity: "epic", rating: 5, element: "arcane", bonusEffect: "boosts spell accuracy" },
    { id: 53, name: "Verdant Bastion", category: "tower", description: "A living fortress that entangles foes in vines.", value: 125, rarity: "rare", rating: 4, element: "earth", bonusEffect: "roots enemies in place" },
    { id: 54, name: "Ethereal Nectar", category: "potion", description: "A shimmering drink that restores spiritual energy.", value: 60, rarity: "common", rating: 3, element: "spirit", bonusEffect: "restores mana over time" },
    { id: 55, name: "Pyre Chant Scroll", category: "scroll", description: "A fiery hymn that summons a blaze upon foes.", value: 140, rarity: "epic", rating: 5, element: "fire", bonusEffect: "casts area fire spell" }
  ];
    
  // ----------------------
  // Our Modifiable Dataset & State Flag
  // ----------------------
  let catalogItems = JSON.parse(JSON.stringify(defaultCatalog));
  let isGroupedView = false;
    
  // ----------------------
  // Helper Function: Create an Item Card
  // ----------------------
  function createItemCard(item) {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <div class="actions">
        <button class="edit" onclick="editItem(${item.id})">Edit</button>
        <button class="delete" onclick="deleteItem(${item.id})">Delete</button>
      </div>
      <h3>${item.name}</h3>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Rarity:</strong> ${item.rarity}</p>
      <p>${item.description}</p>
      <p><strong>Value:</strong> ${item.value}</p>
      <p><strong>Rating:</strong> ${item.rating}</p>
      <p><strong>Element:</strong> ${item.element}</p>
      <p><strong>Bonus Effect:</strong> ${item.bonusEffect}</p>
    `;
    return card;
  }
    
  // ----------------------
  // Display the Catalog Items
  // ----------------------
  function displayCatalog(items) {
    const catalogSection = document.getElementById("catalog");
    catalogSection.innerHTML = "";
    if (isGroupedView) {
      const groups = groupCatalogByCategory();
      for (const category in groups) {
        const groupHeader = document.createElement("h2");
        groupHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        catalogSection.appendChild(groupHeader);
        groups[category].forEach(item => {
          catalogSection.appendChild(createItemCard(item));
        });
      }
    } else {
      items.forEach(item => {
        catalogSection.appendChild(createItemCard(item));
      });
    }
  }
    
  // ----------------------
  // Data Operation Functions
  // ----------------------
  
  // Filter by category
  function filterCatalog(category) {
    return category === "all" ? catalogItems : catalogItems.filter(item => item.category === category);
  }
    
  // Search items by name (case-insensitive)
  function searchCatalog(query) {
    return catalogItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }
    
  // Sort items alphabetically
  function sortCatalog(items) {
    return items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
    
  // Filter items by value range
  function filterByValueRange(min, max) {
    return catalogItems.filter(item => item.value >= min && item.value <= max);
  }
    
  // Group items by category
  function groupCatalogByCategory() {
    return catalogItems.reduce((groups, item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
      return groups;
    }, {});
  }
    
  // Shuffle items using the Fisher-Yates algorithm
  function shuffleCatalog() {
    let shuffled = catalogItems.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    catalogItems = shuffled;
    updateCatalogDisplay();
  }
    
  // Add a new item
  function addItem(newItem) {
    newItem.id = catalogItems.length ? Math.max(...catalogItems.map(i => i.id)) + 1 : 1;
    catalogItems.push(newItem);
    updateCatalogDisplay();
  }
    
  // Update an existing item
  function updateItem(updatedItem) {
    catalogItems = catalogItems.map(item => item.id === updatedItem.id ? updatedItem : item);
    updateCatalogDisplay();
  }
    
  // Delete an item
  function deleteItem(id) {
    catalogItems = catalogItems.filter(item => item.id !== id);
    updateCatalogDisplay();
  }
    
  // Reset catalog to the default dataset
  function resetCatalog() {
    catalogItems = JSON.parse(JSON.stringify(defaultCatalog));
    updateCatalogDisplay();
  }
    
  // Toggle grouped view mode
  function toggleGroupView() {
    isGroupedView = !isGroupedView;
    updateCatalogDisplay();
  }
    
  // Combined update: Apply filtering, searching, and value range filtering
  function updateCatalogDisplay() {
    const category = document.getElementById("filterSelect").value;
    const searchQuery = document.getElementById("searchInput").value;
    const minValue = parseInt(document.getElementById("minValue").value, 10);
    const maxValue = parseInt(document.getElementById("maxValue").value, 10);
    
    let updatedList = filterCatalog(category);
    if (searchQuery.trim() !== "") {
      updatedList = updatedList.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (!isNaN(minValue) && !isNaN(maxValue)) {
      updatedList = updatedList.filter(item => item.value >= minValue && item.value <= maxValue);
    }
    displayCatalog(updatedList);
  }
    
  // Debounce utility for search input performance
  function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }
    
  // ----------------------
  // Event Listeners
  // ----------------------
  document.getElementById("searchInput").addEventListener("input", debounce(updateCatalogDisplay, 300));
  document.getElementById("filterSelect").addEventListener("change", updateCatalogDisplay);
  document.getElementById("sortButton").addEventListener("click", () => {
    const category = document.getElementById("filterSelect").value;
    let list = filterCatalog(category);
    const searchQuery = document.getElementById("searchInput").value;
    if (searchQuery.trim() !== "") list = list.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const sortedList = sortCatalog(list);
    displayCatalog(sortedList);
  });
  document.getElementById("valueFilterButton").addEventListener("click", updateCatalogDisplay);
  document.getElementById("shuffleButton").addEventListener("click", shuffleCatalog);
  document.getElementById("resetButton").addEventListener("click", resetCatalog);
  document.getElementById("groupToggleButton").addEventListener("click", toggleGroupView);
    
  document.getElementById("addItemForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("itemName").value.trim();
    const category = document.getElementById("itemCategory").value;
    const description = document.getElementById("itemDescription").value.trim();
    const value = parseInt(document.getElementById("itemValue").value, 10);
    const rarity = document.getElementById("itemRarity").value;
    const rating = parseInt(document.getElementById("itemRating").value, 10);
    const element = document.getElementById("itemElement").value.trim();
    const bonusEffect = document.getElementById("itemBonus").value.trim();
    
    if (name && category && description && !isNaN(value) && rarity && !isNaN(rating) && element && bonusEffect) {
      addItem({ name, category, description, value, rarity, rating, element, bonusEffect });
      e.target.reset();
    }
  });
    
  // Function: Edit an item via prompt dialogs
  function editItem(id) {
    const item = catalogItems.find(item => item.id === id);
    if (item) {
      const newName = prompt("Enter new name:", item.name) || item.name;
      const newCategory = prompt("Enter new category:", item.category) || item.category;
      const newDescription = prompt("Enter new description:", item.description) || item.description;
      const newValue = prompt("Enter new value:", item.value);
      const newRarity = prompt("Enter new rarity (common, rare, epic):", item.rarity) || item.rarity;
      const newRating = prompt("Enter new rating (1-5):", item.rating);
      const newElement = prompt("Enter new element:", item.element) || item.element;
      const newBonus = prompt("Enter new bonus effect:", item.bonusEffect) || item.bonusEffect;
      
      if (newValue !== null && !isNaN(parseInt(newValue, 10)) &&
          newRating !== null && !isNaN(parseInt(newRating, 10))) {
        const updatedItem = {
          ...item,
          name: newName,
          category: newCategory,
          description: newDescription,
          value: parseInt(newValue, 10),
          rarity: newRarity,
          rating: parseInt(newRating, 10),
          element: newElement,
          bonusEffect: newBonus
        };
        updateItem(updatedItem);
      }
    }
  }
    
  // ----------------------
  // Initialization
  // ----------------------
  // Display the catalog on initial load
  displayCatalog(catalogItems);
  
  // Initialize Particle Effects to cover the viewport
  function initializeParticles() {
    const particleContainer = document.createElement("div");
    particleContainer.classList.add("particle-container");
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement("div");
      particle.classList.add("contact-particle");
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.top = Math.random() * 100 + "vh";
      particle.style.animationDelay = Math.random() * 5 + "s";
      const size = Math.random() * 4 + 2 + "px";
      particle.style.width = size;
      particle.style.height = size;
      particleContainer.appendChild(particle);
    }
  }
  window.addEventListener("load", initializeParticles);
  
  // Adjust the Background Container to cover the full document height
  function adjustBackgroundContainerHeight() {
    const bgContainer = document.querySelector(".background-container");
    if (bgContainer) {
      bgContainer.style.height = document.body.scrollHeight + "px";
    }
  }
  window.addEventListener("load", adjustBackgroundContainerHeight);
  window.addEventListener("resize", adjustBackgroundContainerHeight);
  