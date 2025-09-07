// Sample data structure for industry reports
const reportsData = [
    {
        id: 1,
        title: "Global Technology Trends 2024",
        industry: "Technology",
        type: "Annual Report",
        format: "PDF",
        year: 2024,
        style: "Modern",
        description: "Comprehensive analysis of emerging technologies and their impact on global markets.",
        image: "https://via.placeholder.com/400x200/2a2a2a/00ff80?text=Tech+Report+2024",
        url: "#"
    },
    {
        id: 2,
        title: "Healthcare Industry Outlook",
        industry: "Healthcare",
        type: "Market Research",
        format: "Interactive",
        year: 2024,
        style: "Professional",
        description: "In-depth market analysis covering healthcare innovations and regulatory changes.",
        image: "https://via.placeholder.com/400x200/2a2a2a/00ff80?text=Healthcare+Report",
        url: "#"
    },
    {
        id: 3,
        title: "Financial Services Digital Transformation",
        industry: "Finance",
        type: "White Paper",
        format: "PDF",
        year: 2023,
        style: "Corporate",
        description: "Exploring digital transformation strategies in the financial services sector.",
        image: "https://via.placeholder.com/400x200/2a2a2a/00ff80?text=Finance+Report",
        url: "#"
    },
    {
        id: 4,
        title: "Sustainable Energy Market Analysis",
        industry: "Energy",
        type: "Research Report",
        format: "Interactive",
        year: 2024,
        style: "Modern",
        description: "Comprehensive study on renewable energy adoption and market trends.",
        image: "https://via.placeholder.com/400x200/2a2a2a/00ff80?text=Energy+Report",
        url: "#"
    },
    {
        id: 5,
        title: "Retail E-commerce Evolution",
        industry: "Retail",
        type: "Industry Analysis",
        format: "PDF",
        year: 2023,
        style: "Creative",
        description: "Analysis of e-commerce trends and consumer behavior shifts.",
        image: "https://via.placeholder.com/400x200/2a2a2a/00ff80?text=Retail+Report",
        url: "#"
    },
    {
        id: 6,
        title: "Manufacturing 4.0 Implementation",
        industry: "Manufacturing",
        type: "Case Study",
        format: "Interactive",
        year: 2024,
        style: "Technical",
        description: "Real-world examples of Industry 4.0 implementation in manufacturing.",
        image: "https://via.placeholder.com/400x200/2a2a2a/00ff80?text=Manufacturing+Report",
        url: "#"
    }
];

// Filter options
const filterOptions = {
    types: ["All", "Annual Report", "Market Research", "White Paper", "Research Report", "Industry Analysis", "Case Study"],
    industries: ["All", "Technology", "Healthcare", "Finance", "Energy", "Retail", "Manufacturing", "Education", "Automotive"],
    styles: ["All", "Modern", "Professional", "Corporate", "Creative", "Technical", "Minimalist"],
    formats: ["All", "PDF", "Interactive", "Web", "Print", "Video"],
    years: ["All", "2024", "2023", "2022", "2021", "2020"]
};

// Current filter state
let currentFilters = {
    type: "All",
    industry: "All",
    style: "All",
    format: "All",
    year: "All"
};

// DOM elements
const reportsGrid = document.getElementById('reportsGrid');
const filterTabs = document.querySelectorAll('.filter-tab');
const filterDropdowns = document.querySelectorAll('.filter-dropdown');
const randomBtn = document.querySelector('.random-btn');
const emailForm = document.querySelector('.email-form');
const subscribeBtn = document.querySelector('.subscribe-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderReports(reportsData);
    setupEventListeners();
    updateStats();
});

// Setup event listeners
function setupEventListeners() {
    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // You can add tab-specific filtering logic here
        });
    });

    // Filter dropdowns
    filterDropdowns.forEach((dropdown, index) => {
        dropdown.addEventListener('click', function() {
            const filterType = ['type', 'industry', 'style', 'format', 'year'][index];
            showFilterModal(filterType);
        });
    });

    // Random button
    randomBtn.addEventListener('click', function() {
        const randomReport = reportsData[Math.floor(Math.random() * reportsData.length)];
        showReportModal(randomReport);
    });

    // Email subscription
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.email-input').value;
        if (email) {
            alert('Thank you for subscribing! You\'ll receive the best industry report designs weekly.');
            this.querySelector('.email-input').value = '';
        }
    });

    // Subscribe button
    subscribeBtn.addEventListener('click', function() {
        const email = document.querySelector('.email-input').value;
        if (email) {
            alert('Thank you for subscribing! You\'ll receive the best industry report designs weekly.');
            document.querySelector('.email-input').value = '';
        } else {
            document.querySelector('.email-input').focus();
        }
    });
}

// Render reports grid
function renderReports(reports) {
    if (reports.length === 0) {
        reportsGrid.innerHTML = `
            <div class="empty-state">
                <h3>No reports found</h3>
                <p>Try adjusting your filters to see more results.</p>
                <button onclick="clearFilters()">Clear Filters</button>
            </div>
        `;
        return;
    }

    reportsGrid.innerHTML = reports.map(report => `
        <div class="report-card" onclick="showReportModal(${report.id})">
            <div class="report-image">
                <img src="${report.image}" alt="${report.title}" onerror="this.style.display='none'">
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 14px;">
                    ${report.title}
                </div>
            </div>
            <div class="report-content">
                <h3 class="report-title">${report.title}</h3>
                <div class="report-meta">
                    <span class="report-industry">${report.industry}</span>
                    <span class="report-type">${report.type}</span>
                </div>
                <p class="report-description">${report.description}</p>
            </div>
        </div>
    `).join('');
}

// Show filter modal (simplified version)
function showFilterModal(filterType) {
    const options = filterOptions[filterType + 's'];
    const currentValue = currentFilters[filterType];
    
    // Create a simple dropdown menu
    const dropdown = document.createElement('div');
    dropdown.className = 'filter-dropdown-menu';
    dropdown.style.cssText = `
        position: absolute;
        background: #1a1a1a;
        border: 1px solid #2a2a2a;
        border-radius: 8px;
        padding: 8px 0;
        z-index: 1000;
        min-width: 200px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;

    options.forEach(option => {
        const item = document.createElement('div');
        item.className = 'filter-dropdown-item';
        item.style.cssText = `
            padding: 12px 16px;
            cursor: pointer;
            color: ${option === currentValue ? '#00ff80' : '#ffffff'};
            font-size: 14px;
            transition: background-color 0.2s ease;
        `;
        item.textContent = option;
        item.addEventListener('click', function() {
            currentFilters[filterType] = option;
            applyFilters();
            document.body.removeChild(dropdown);
        });
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#222222';
        });
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
        dropdown.appendChild(item);
    });

    // Position the dropdown
    const trigger = filterDropdowns[['type', 'industry', 'style', 'format', 'year'].indexOf(filterType)];
    const rect = trigger.getBoundingClientRect();
    dropdown.style.left = rect.left + 'px';
    dropdown.style.top = (rect.bottom + 5) + 'px';

    document.body.appendChild(dropdown);

    // Close dropdown when clicking outside
    setTimeout(() => {
        document.addEventListener('click', function closeDropdown(e) {
            if (!dropdown.contains(e.target) && !trigger.contains(e.target)) {
                document.body.removeChild(dropdown);
                document.removeEventListener('click', closeDropdown);
            }
        });
    }, 0);
}

// Apply filters
function applyFilters() {
    const filteredReports = reportsData.filter(report => {
        return (
            (currentFilters.type === "All" || report.type === currentFilters.type) &&
            (currentFilters.industry === "All" || report.industry === currentFilters.industry) &&
            (currentFilters.style === "All" || report.style === currentFilters.style) &&
            (currentFilters.format === "All" || report.format === currentFilters.format) &&
            (currentFilters.year === "All" || report.year.toString() === currentFilters.year)
        );
    });

    renderReports(filteredReports);
    updateFilterLabels();
}

// Update filter labels
function updateFilterLabels() {
    const labels = ['type', 'industry', 'style', 'format', 'year'];
    filterDropdowns.forEach((dropdown, index) => {
        const label = dropdown.querySelector('.dropdown-label');
        const value = currentFilters[labels[index]];
        label.textContent = value;
    });
}

// Clear all filters
function clearFilters() {
    currentFilters = {
        type: "All",
        industry: "All",
        style: "All",
        format: "All",
        year: "All"
    };
    applyFilters();
}

// Show report modal
function showReportModal(reportId) {
    const report = typeof reportId === 'number' 
        ? reportsData.find(r => r.id === reportId)
        : reportId;
    
    if (!report) return;

    const modal = document.createElement('div');
    modal.className = 'report-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 20px;
    `;

    modal.innerHTML = `
        <div style="
            background: #1a1a1a;
            border-radius: 12px;
            max-width: 600px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
        ">
            <button onclick="this.closest('.report-modal').remove()" style="
                position: absolute;
                top: 16px;
                right: 16px;
                background: #333;
                border: none;
                color: white;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
            ">×</button>
            <div style="padding: 32px;">
                <h2 style="color: #00ff80; margin-bottom: 16px; font-size: 24px;">${report.title}</h2>
                <div style="display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap;">
                    <span style="background: #00ff80; color: #121212; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 500;">${report.industry}</span>
                    <span style="color: #666; font-size: 12px;">${report.type}</span>
                    <span style="color: #666; font-size: 12px;">${report.format}</span>
                    <span style="color: #666; font-size: 12px;">${report.year}</span>
                </div>
                <p style="color: #cccccc; line-height: 1.6; margin-bottom: 24px;">${report.description}</p>
                <div style="display: flex; gap: 12px;">
                    <button onclick="window.open('${report.url}', '_blank')" style="
                        background: #00ff80;
                        color: #121212;
                        border: none;
                        padding: 12px 24px;
                        border-radius: 8px;
                        font-weight: 600;
                        cursor: pointer;
                    ">View Report</button>
                    <button onclick="this.closest('.report-modal').remove()" style="
                        background: transparent;
                        color: #ffffff;
                        border: 1px solid #333;
                        padding: 12px 24px;
                        border-radius: 8px;
                        cursor: pointer;
                    ">Close</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Update statistics
function updateStats() {
    const stats = {
        reports: reportsData.length,
        industries: [...new Set(reportsData.map(r => r.industry))].length,
        templates: [...new Set(reportsData.map(r => r.type))].length,
        formats: [...new Set(reportsData.map(r => r.format))].length
    };

    const navNumbers = document.querySelectorAll('.nav-number');
    navNumbers[0].textContent = stats.reports.toLocaleString();
    navNumbers[1].textContent = stats.industries;
    navNumbers[2].textContent = stats.templates;
    navNumbers[3].textContent = stats.formats;
}

// Add new report function (for manual input)
function addReport(reportData) {
    const newReport = {
        id: reportsData.length + 1,
        ...reportData,
        image: reportData.image || `https://via.placeholder.com/400x200/2a2a2a/00ff80?text=${encodeURIComponent(reportData.title)}`
    };
    
    reportsData.push(newReport);
    renderReports(reportsData);
    updateStats();
}

// Export functions for manual input
window.addReport = addReport;
window.showReportModal = showReportModal;
window.clearFilters = clearFilters;
