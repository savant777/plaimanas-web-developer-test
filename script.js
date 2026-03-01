document.addEventListener("DOMContentLoaded", () => {
    // custom select handle
    const customSelects = document.querySelectorAll(".pmn-select");
    customSelects.forEach((customSelect) => {
        const selectButton = customSelect.querySelector(".pmn-select-button");
        const dropdown = customSelect.querySelector(".pmn-select-dropdown");
        const options = dropdown.querySelectorAll("li");
        const selectedValue = selectButton.querySelector(".pmn-selected-value");
        
        const handleOptionSelect = (option) => {
            options.forEach((opt) => opt.classList.remove("selected"));
            option.classList.add("selected");
            selectedValue.textContent = option.textContent.trim();
        };

        const toggleDropdown = (expand = null) => {
            const isOpen = expand !== null ? expand : dropdown.classList.contains("hidden");
            dropdown.classList.toggle("hidden", !isOpen);
            selectButton.setAttribute("aria-expanded", isOpen);
        };
        
        const defaultOption = dropdown.querySelector("li.selected") || options[0];
        
        if (defaultOption) {
            handleOptionSelect(defaultOption);
        }
        
        selectButton.addEventListener("click", () => {
            toggleDropdown();
        });

        options.forEach((option) => {
            option.addEventListener("click", () => {
                handleOptionSelect(option);
                toggleDropdown(false);
            });
        });
        
        document.addEventListener("click", (e) => {
            if (!customSelect.contains(e.target)) {
                toggleDropdown(false);
            }
        });
    });

    // toggle menu
    const burger = document.querySelector('.pmn-burger');
    const menuContainer = document.querySelector('.pmn-menu-container');
    const menuLinks = document.querySelectorAll('.pmn-list:not(.pmn-has-dropdown) > a');
    const dropdownLinks = document.querySelectorAll('.pmn-dropdown-list a');

    burger.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
        burger.classList.toggle('active');
        
        const isExpanded = menuContainer.classList.contains('active');
        burger.setAttribute('aria-expanded', isExpanded);
    });
    
    const closeAllMenus = () => {
        menuContainer.classList.remove('active');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        
        const dropdownMenu = document.querySelector(".pmn-has-dropdown");
        if (dropdownMenu) {
            dropdownMenu.classList.remove("active");
        }
    };

    menuLinks.forEach(link => link.addEventListener('click', closeAllMenus));
    dropdownLinks.forEach(link => link.addEventListener('click', closeAllMenus));

    // toggle sub menu
    const dropdownMenu = document.querySelector('.pmn-has-dropdown');
    
    dropdownMenu.addEventListener("click", function(e) {
        if (window.innerWidth <= 768) {
            e.stopPropagation();
            this.classList.toggle("active");
        }
    });
    
    document.addEventListener("click", (e) => {
        if (dropdownMenu.classList.contains("active")) {
            dropdownMenu.classList.remove("active");
        }
    });

    // switch faq tabs
    const faqTabs = document.querySelectorAll('input[name="faq"]');
    const faqItems = document.querySelectorAll('.pmn-faq-group');

    const filterFAQ = (selectedCategory) => {
        faqItems.forEach(item => {
            const itemCategory = item.getAttribute('data-group');
            
            if (itemCategory === selectedCategory) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.4s ease forwards';
            } else {
                item.style.display = 'none';
                item.removeAttribute('open');
            }
        });
    };
    
    faqTabs.forEach(tab => {
        tab.addEventListener('change', (e) => {
            filterFAQ(e.target.value);
        });
    });
    
    const initialChecked = document.querySelector('input[name="faq"]:checked');
    if (initialChecked) {
        filterFAQ(initialChecked.value);
    }
});