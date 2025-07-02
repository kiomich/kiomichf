        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { 
                hour12: true, 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            const dayString = now.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
            const shortTime = now.toLocaleTimeString('en-US', { 
                hour12: false, 
                hour: '2-digit', 
                minute: '2-digit',
                weekday: 'short'
            });
            
            document.getElementById('time').textContent = timeString;
            document.getElementById('weekday').textContent = dayString;
            document.getElementById('taskbar-time').textContent = shortTime;
        }

        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        function openApp(appId) {
            const windows = document.querySelectorAll('.app-window');
            windows.forEach(window => window.classList.remove('active'));
            
            const targetWindow = document.getElementById(appId);
            if (targetWindow) {
                targetWindow.classList.add('active');
            }

            if (appId === 'terminal') {
                document.getElementById('terminal').classList.add('active');
            }
        }

        function closeApp(appId) {
            const targetWindow = document.getElementById(appId);
            if (targetWindow) {
                targetWindow.classList.remove('active');
            }
        }

        function closeTerminal() {
            document.getElementById('terminal').classList.remove('active');
        }

        function toggleSettings() {
            const settingsMenu = document.getElementById('settings-menu');
            if (settingsMenu.classList.contains('active')) {
                settingsMenu.classList.remove('active');
            } else {
                settingsMenu.classList.add('active');
            }
        }

        function closeSettings() {
            document.getElementById('settings-menu').classList.remove('active');
        }

        document.addEventListener('DOMContentLoaded', function() {
            updateTime();
            createParticles();
            setInterval(updateTime, 1000);
        });

        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.altKey && e.key === 't') {
                openApp('terminal');
            }
            if (e.key === 'Escape') {
                closeTerminal();
                closeSettings();
                const windows = document.querySelectorAll('.app-window');
                windows.forEach(window => window.classList.remove('active'));
            }
        });
        // Tab switching functionality
document.querySelectorAll('.q2w5i').forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all tabs
        document.querySelectorAll('.q2w5i').forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Hide all content
        document.getElementById('aboutContent').style.display = 'none';
        document.getElementById('galleryContent').style.display = 'none';
        document.getElementById('postsContent').style.display = 'none';
        
        // Show selected content
        const tabName = tab.dataset.tab;
        document.getElementById(tabName + 'Content').style.display = 'block';
    });
});

// Donation tab switching - simplified for one tab only
document.querySelectorAll('.p8t3v').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.p8t3v').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Update donation button text when amount changes
document.getElementById('donationAmount').addEventListener('input', (e) => {
    const amount = e.target.value || 5;
    document.getElementById('donateBtn').textContent = `Donate €${amount}`;
});

// Donation button functionality
document.getElementById('donateBtn').addEventListener('click', () => {
    const amount = document.getElementById('donationAmount').value;
    const message = document.getElementById('donationMessage').value;
    
    // Reset form
    document.getElementById('donationMessage').value = '';
});

// Profile avatar click animation
document.getElementById('profileAvatar').addEventListener('click', () => {
    const avatar = document.getElementById('profileAvatar');
    avatar.style.transform = 'scale(1.2) rotate(360deg)';
    setTimeout(() => {
        avatar.style.transform = 'scale(1)';
    }, 500);
});

// Quick update functionality
document.getElementById('quickUpdate').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const text = e.target.value;
        if (text.trim()) {
            e.target.value = '';
        }
    }
});

// Composer button functionality
document.querySelectorAll('.g9x4c').forEach(btn => {
    btn.addEventListener('click', () => {
        // Button clicked without notification
    });
});

// Add button functionality
document.querySelectorAll('.e6q2d').forEach(btn => {
    btn.addEventListener('click', () => {
        // Button clicked without notification
    });
});

// Badge hover effects
document.querySelectorAll('.n7r4t').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        // Badge hovered without notification
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic greeting based on time
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = '👋';
    
    if (hour < 12) greeting = '🌅';
    else if (hour < 18) greeting = '☀️';
    else greeting = '🌙';
    
    document.getElementById('profileAvatar').textContent = greeting;
}

updateGreeting();
setInterval(updateGreeting, 60000); // Update every minute

// GitHub Profile Card JavaScript

// Function to close the app window
function closeApp(windowId) {
    const window = document.getElementById(windowId);
    if (window) {
        window.style.display = 'none';
    }
}

// Function to show the app window
function showApp(windowId) {
    const window = document.getElementById(windowId);
    if (window) {
        window.style.display = 'block';
    }
}

// Function to handle follow button click
function handleFollow() {
    const followBtn = document.querySelector('.btn-primary');
    if (followBtn.textContent === 'Follow') {
        followBtn.textContent = 'Following';
        followBtn.style.background = '#21262d';
        followBtn.style.border = '1px solid #404040';
        
        // Update follower count
        const followerStat = document.querySelector('.stat-item:nth-child(2) .stat-number');
        const currentCount = parseInt(followerStat.textContent);
        followerStat.textContent = currentCount + 1;
        
        // Show notification
        showNotification('Now following Kiomichzxc');
    } else {
        followBtn.textContent = 'Follow';
        followBtn.style.background = '#238636';
        followBtn.style.border = 'none';
        
        // Update follower count
        const followerStat = document.querySelector('.stat-item:nth-child(2) .stat-number');
        const currentCount = parseInt(followerStat.textContent);
        followerStat.textContent = currentCount - 1;
        
        // Show notification
        showNotification('Unfollowed Kiomichzxc');
    }
}

// Function to handle view profile button click
function handleViewProfile() {
    // Simulate opening GitHub profile
    showNotification('Opening GitHub profile...');
    
    // In a real app, this would open the actual GitHub profile
    setTimeout(() => {
        window.open('https://github.com/kiomichdev', '_blank');
    }, 500);
}

// Function to show notifications
function showNotification(message) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #238636;
        color: white;
        padding: 12px 16px;
        border-radius: 6px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Function to handle repository clicks
function handleRepositoryClick(repoName) {
    showNotification(`Opening ${repoName} repository...`);
    
    // In a real app, this would open the actual repository
    setTimeout(() => {
        window.open(`https://github.com/kiomichdev/${repoName}`, '_blank');
    }, 500);
}

// Function to animate stats on load
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((stat, index) => {
        const finalValue = parseInt(stat.textContent);
        stat.textContent = '0';
        
        // Animate counter
        let current = 0;
        const increment = finalValue / 30; // 30 frames for smooth animation
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
                stat.textContent = finalValue;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 50);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to buttons
    const followBtn = document.querySelector('.btn-primary');
    if (followBtn) {
        followBtn.addEventListener('click', handleFollow);
    }
    
    const viewProfileBtn = document.querySelector('.btn-secondary');
    if (viewProfileBtn) {
        viewProfileBtn.addEventListener('click', handleViewProfile);
    }
    
    // Add click handlers to repository names
    const repoNames = document.querySelectorAll('.repo-name');
    repoNames.forEach(repo => {
        repo.style.cursor = 'pointer';
        repo.addEventListener('click', () => {
            handleRepositoryClick(repo.textContent);
        });
    });
    
    // Add hover effects to repository items
    const repoItems = document.querySelectorAll('.repository-item');
    repoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.borderColor = '#58a6ff';
            item.style.transition = 'border-color 0.2s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.borderColor = '#404040';
        });
    });
    
    // Animate stats on load
    setTimeout(animateStats, 500);
    
    // Add status indicator animation
    const statusIndicator = document.querySelector('.status-indicator');
    if (statusIndicator) {
        setInterval(() => {
            statusIndicator.style.opacity = '0.5';
            setTimeout(() => {
                statusIndicator.style.opacity = '1';
            }, 500);
        }, 2000);
    }
});

// Utility functions for external integration
window.GitHubProfile = {
    open: () => showApp('github-window'),
    close: () => closeApp('github-window'),
    updateStats: (repos, followers, following) => {
        document.querySelector('.stat-item:nth-child(1) .stat-number').textContent = repos;
        document.querySelector('.stat-item:nth-child(2) .stat-number').textContent = followers;
        document.querySelector('.stat-item:nth-child(3) .stat-number').textContent = following;
    },
    updateProfile: (username, handle, bio, avatar) => {
        document.querySelector('.username').textContent = username;
        document.querySelector('.handle').textContent = handle;
        document.querySelector('.bio').textContent = bio;
        document.querySelector('.avatar').src = avatar;
    }
};