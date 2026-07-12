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
    loadPage('home.html');
    updateBreadcrumb(['Home']);
}

// Setup navigation event listeners
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navSublinks = document.querySelectorAll('.nav-sublink');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            const page = link.dataset.page;
            
            if (category === 'home') {
                loadPage('home.html');
                updateBreadcrumb(['Home']);
                setActiveNav(link);
                // Close all expanded menus
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('expanded');
                });
            } else {
                toggleNavItem(link.parentElement);
                if (page === 'menu') {
                    // Parent category with sub-galleries: open its first gallery.
                    currentCategory = category;
                    const firstSub = link.parentElement.querySelector('.nav-sublink');
                    if (firstSub) {
                        currentSubcategory = firstSub.dataset.subcategory;
                        loadPage(pageFileFor(firstSub.dataset.page));
                        updateBreadcrumb([
                            'Home',
                            getCategoryDisplayName(category),
                            getSubcategoryDisplayName(currentSubcategory)
                        ]);
                        setActiveNav(firstSub);
                    }
                } else if (page === 'gallery' || page === 'projects') {
                    // Single-page category (Community, Personal, Projects).
                    currentCategory = category;
                    currentSubcategory = category;
                    loadPage(pageFileFor(page));
                    updateBreadcrumb(['Home', getCategoryDisplayName(category)]);
                    setActiveNav(link);
                }
            }
        });
    });
    
    navSublinks.forEach(sublink => {
        sublink.addEventListener('click', (e) => {
            e.preventDefault();
            const category = sublink.closest('.nav-item').querySelector('.nav-link').dataset.category;
            const subcategory = sublink.dataset.subcategory;
            const page = sublink.dataset.page;
            
            if (page === 'gallery' || page === 'lessons' || page === 'sub_menu') {
                currentCategory = category;
                currentSubcategory = subcategory;
                loadPage(pageFileFor(page));
                updateBreadcrumb([
                    'Home',
                    getCategoryDisplayName(category),
                    getSubcategoryDisplayName(subcategory)
                ]);
                setActiveNav(sublink);
            }
        });
    });
}

// Toggle navigation item expansion
function toggleNavItem(navItem) {
    const isExpanded = navItem.classList.contains('expanded');
    
    // Close all other nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item !== navItem) {
            item.classList.remove('expanded');
        }
    });
    
    // Toggle current item
    if (!isExpanded) {
        navItem.classList.add('expanded');
    }
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
        'community': 'Community & School',
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
