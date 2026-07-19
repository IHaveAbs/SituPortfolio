let currentPage = 'home';
let currentCategory = '';
let currentSubcategory = '';

// Which fragment file renders a given nav page type.
function pageFileFor(page) {
    if (page === 'lessons') return 'lessons.html';
    if (page === 'projects') return 'projects.html';
    return 'gallery.html';
}

// Initialize the application
function init() {
    setupNavigation();
    goTo({ category: 'home', page: 'home' });
}

// Setup navigation event listeners
function setupNavigation() {
    // Site title -> Home
    const title = document.querySelector('.site-title');
    if (title) title.addEventListener('click', () => goTo({ category: 'home', page: 'home' }));

    // Hamburger (mobile) toggles the menu
    const toggle = document.querySelector('.nav-toggle');
    if (toggle) toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.nav-menu').classList.toggle('show');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            const page = link.dataset.page;
            const hasSubmenu = !!link.parentElement.querySelector('.nav-submenu');
            if (page === 'menu' && hasSubmenu) {
                toggleDropdown(link.parentElement);        // open dropdown; don't navigate
            } else {
                goTo({ category, subcategory: category, page });
            }
        });
    });

    document.querySelectorAll('.nav-sublink').forEach(sublink => {
        sublink.addEventListener('click', (e) => {
            e.preventDefault();
            const category = sublink.closest('.nav-item').querySelector('.nav-link').dataset.category;
            goTo({ category, subcategory: sublink.dataset.subcategory, page: sublink.dataset.page });
        });
    });

    // Close open menus when clicking outside the top bar
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.top-panel')) closeMenus();
    });
}

// Programmatic navigation — used by both the top menu and the Home showcase tiles.
function goTo({ category, subcategory, page }) {
    currentCategory = category;
    currentSubcategory = subcategory || category;
    currentPage = page;

    const crumbBar = document.querySelector('.breadcrumb-bar');
    if (crumbBar) crumbBar.classList.toggle('home-active', category === 'home');

    if (category === 'home') {
        loadPage('home.html');
        updateBreadcrumb(['Home']);
    } else if (subcategory && subcategory !== category) {
        loadPage(pageFileFor(page));
        updateBreadcrumb(['Home', getCategoryDisplayName(category), getSubcategoryDisplayName(subcategory)]);
    } else {
        loadPage(pageFileFor(page));
        updateBreadcrumb(['Home', getCategoryDisplayName(category)]);
    }

    highlightNav(category, subcategory);
    closeMenus();
    window.scrollTo(0, 0);
}
window.goTo = goTo;

// Toggle a top-level dropdown (closing any other open one)
function toggleDropdown(navItem) {
    const willOpen = !navItem.classList.contains('open');
    document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
    if (willOpen) navItem.classList.add('open');
}

// Close all dropdowns and the mobile menu
function closeMenus() {
    document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
    const menu = document.querySelector('.nav-menu');
    if (menu) menu.classList.remove('show');
}

// Highlight the menu item matching a destination
function highlightNav(category, subcategory) {
    let el;
    if (category === 'home') {
        el = document.querySelector('.nav-link[data-category="home"]');
    } else if (subcategory && subcategory !== category) {
        el = document.querySelector('.nav-sublink[data-subcategory="' + subcategory + '"]');
    } else {
        el = document.querySelector('.nav-link[data-category="' + category + '"]');
    }
    if (el) setActiveNav(el);
}

// Set active navigation state
function setActiveNav(activeElement) {
    // Remove all active states
    document.querySelectorAll('.nav-link, .nav-sublink').forEach(el => {
        el.classList.remove('active');
    });
    
    // Set active state
    activeElement.classList.add('active');
    
    // If it's a submenu item, also set parent as active
    if (activeElement.classList.contains('nav-sublink')) {
        activeElement.closest('.nav-item').querySelector('.nav-link').classList.add('active');
    }
}

// Load HTML page content
async function loadPage(filename) {
    const contentFrame = document.getElementById('content-frame');
    
    try {
        // Show loading state
        contentFrame.innerHTML = '<div class="loading">Loading content...</div>';
        
        const response = await fetch(filename);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const html = await response.text();
        contentFrame.innerHTML = html;
        
        // Execute any scripts in the loaded content
        const scripts = contentFrame.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }
            document.head.appendChild(newScript);
            document.head.removeChild(newScript);
        });
        
    } catch (error) {
        console.error('Error loading page:', error);
        contentFrame.innerHTML = `
            <div class="error">
                <h3>Error Loading Content</h3>
                <p>Could not load ${filename}. Please make sure the file exists.</p>
                <p><small>Error: ${error.message}</small></p>
            </div>
        `;
    }
}

// Update breadcrumb navigation
function updateBreadcrumb(items) {
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = '';
    
    items.forEach((item, index) => {
        if (index > 0) {
            const separator = document.createElement('span');
            separator.className = 'breadcrumb-separator';
            separator.textContent = '>';
            breadcrumb.appendChild(separator);
        }
        
        const breadcrumbItem = document.createElement('span');
        breadcrumbItem.className = 'breadcrumb-item';
        if (index === items.length - 1) {
            breadcrumbItem.classList.add('active');
        }
        breadcrumbItem.textContent = item;
        breadcrumb.appendChild(breadcrumbItem);
    });
}

// Get display name for category
function getCategoryDisplayName(category) {
    const names = {
        'art': 'Art',
        'activities': 'Activities',
        'community': 'Shelter volunteer',
        'personal': 'Personal',
        'cpp-classes': 'C++ Classes',
        'projects': 'Projects'
    };
    return names[category] || category;
}

// Get display name for subcategory
function getSubcategoryDisplayName(subcategory) {
    const names = {
        // Art
        'paintings': 'Paintings',
        'drawings': 'Drawings & Sketches',
        'printmaking': 'Printmaking',
        'photography': 'Photography',
        'awards': 'Scholastic Awards',
        // Activities
        'badminton': 'Badminton',
        'juggling': 'Juggling',
        'chess': 'Chess',
        // C++ Classes
        'cpp-beginner': 'Beginner',
        'cpp-advanced': 'Advanced'
    };
    return names[subcategory] || subcategory;
}

// Make current context available globally for loaded pages
window.getCurrentContext = function() {
    return {
        category: currentCategory,
        subcategory: currentSubcategory,
        page: currentPage
    };
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);
