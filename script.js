document.addEventListener("DOMContentLoaded", () => {
    // custom select handle
    const customSelects = document.querySelectorAll(".pmn-select");

    customSelects.forEach((customSelect) => {
        const selectButton = customSelect.querySelector(".pmn-select-button");
        const dropdown = customSelect.querySelector(".pmn-select-dropdown");
        const options = dropdown.querySelectorAll("li");
        const selectedValue = selectButton.querySelector(".pmn-selected-value");
        const hiddenInput = customSelect.querySelector("input[type='hidden']");

        const handleOptionSelect = (option) => {
            options.forEach((opt) => opt.classList.remove("selected"));
            option.classList.add("selected");
            
            const text = option.textContent.trim();
            const val = option.dataset.value || text;

            selectedValue.textContent = text;
            if (hiddenInput) hiddenInput.value = val;
            
            customSelect.classList.add("is-selected");
        };

        const toggleDropdown = (expand = null) => {
            const isOpen = expand !== null ? expand : dropdown.classList.contains("hidden");
            dropdown.classList.toggle("hidden", !isOpen);
            selectButton.setAttribute("aria-expanded", isOpen);
        };
        
        const hasSelected = dropdown.querySelector("li.selected");
        
        if (customSelect.id === "menuLang" || hasSelected) {
            handleOptionSelect(hasSelected || options[0]);
        }
        
        else {
            customSelect.classList.remove("is-selected");
        }

        selectButton.addEventListener("click", (e) => {
            e.preventDefault();
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
    
    // menu handle
    const burger = document.querySelector('.pmn-burger');
    const menuContainer = document.querySelector('.pmn-menu-container');
    const dropdownMenu = document.querySelector('.pmn-has-dropdown');
    const overlay = document.querySelector('.pmn-overlay');
    const allLinks = document.querySelectorAll('.pmn-menu-links a');

    // close all function
    const closeAll = () => {
        menuContainer.classList.remove('active');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        if (dropdownMenu) dropdownMenu.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    };

    // toggle burger menu
    burger.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
        burger.classList.toggle('active');
        const isExpanded = menuContainer.classList.contains('active');
        burger.setAttribute('aria-expanded', isExpanded);
    });

    // toggle sub menu
    if (dropdownMenu) {
        // on desktop hover
        dropdownMenu.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                dropdownMenu.classList.add('active');
                overlay.classList.add('active');
            }
        });

        dropdownMenu.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                dropdownMenu.classList.remove('active');
                overlay.classList.remove('active');
            }
        });

        // on mobile click
        const dropdownLink = dropdownMenu.querySelector(':scope > a');
    
        dropdownLink.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                dropdownMenu.classList.toggle('active');
            }
        });
    }
    
    // close menu when click outer area
    document.addEventListener('click', (e) => {
        if (dropdownMenu && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('active');
            overlay.classList.remove('active');
        }
    });

    // close menu when click links
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            const isDropdownParent = link.parentElement.classList.contains('pmn-has-dropdown');

            if (window.innerWidth <= 768 && isDropdownParent) { return; }

            closeAll();
            link.blur();
        });
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

    // form handle for test
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            data.tc = formData.has('tc');
            console.log("Form Submitted Data:", data);
            
            contactForm.reset();

            // reset custom select
            const customSelect = contactForm.querySelector('.pmn-select');
            const selectedValue = customSelect.querySelector('.pmn-selected-value');
            const hiddenInput = customSelect.querySelector('input[type="hidden"]');
            const options = customSelect.querySelectorAll('li');
            
            customSelect.classList.remove('is-selected');
            const fieldParent = customSelect.closest('.pmn-select-field');
            if (fieldParent) fieldParent.classList.remove('has-value');
            
            selectedValue.textContent = "";
            if (hiddenInput) hiddenInput.value = "";
            
            options.forEach(opt => opt.classList.remove('selected'));
        });
    }
});