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

function updateUptime() {
    const startTime = Date.now();
    setInterval(() => {
        const uptime = Math.floor((Date.now() - startTime) / 60000);
        document.getElementById('uptime').textContent = `${uptime} mins`;
    }, 60000);
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

function openApp(app) {
    switch(app) {
        case 'terminal':
            document.getElementById('terminal').classList.add('active');
            break;
        case 'settings':
    document.getElementById('settings-menu').classList.add('active');
    break;
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
function toggleTheme() {
    alert('Theme toggle - можно добавить свой код');
}

function toggleParticles() {
    const particles = document.getElementById('particles');
    if (particles.style.display === 'none') {
        particles.style.display = 'block';
    } else {
        particles.style.display = 'none';
    }
}

function toggleSound() {
    alert('Sound toggle - можно добавить свой код');
}

function openAbout() {
    alert('Desktop by kiomich\nVersion 1.0');
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    updateUptime();
    createParticles();
    setInterval(updateTime, 1000);
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.key === 't') {
        openApp('terminal');
    }
    if (e.key === 'Escape') {
        closeTerminal();
    }
    if (e.key === 'Escape') {
    closeTerminal();
    closeSettings(); // добавь эту строку
    }
});

function openApp(appId) {
    // Закрыть все окна
    const windows = document.querySelectorAll('.app-window');
    windows.forEach(window => window.classList.remove('active'));
    
    // Открыть выбранное окно
    const targetWindow = document.getElementById(appId);
    if (targetWindow) {
        targetWindow.classList.add('active');
    }
}

function closeApp(appId) {
    const targetWindow = document.getElementById(appId);
    if (targetWindow) {
        targetWindow.classList.remove('active');
    }
}
        function toggleButton(button) {
            if (button.classList.contains('toggle-off')) {
                button.classList.remove('toggle-off');
                button.classList.add('toggle-on');
                button.innerHTML = '🔔';
                button.parentElement.querySelector('.toggle-label').textContent = 'On';
            } else {
                button.classList.remove('toggle-on');
                button.classList.add('toggle-off');
                button.innerHTML = '🔇';
                button.parentElement.querySelector('.toggle-label').textContent = 'Off';
            }
        }

        // Слайдер яркости
        let isDragging = false;
        const sliderFill = document.querySelector('.slider-fill');
        const sliderThumb = document.querySelector('.slider-thumb');
        const slider = document.querySelector('.slider');

        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            updateSlider(e);
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                updateSlider(e);
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        function updateSlider(e) {
            const rect = slider.getBoundingClientRect();
            const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
            sliderFill.style.width = percentage + '%';
        }

        // Анимация батареи
        setInterval(() => {
            const batteryFill = document.querySelector('.battery-fill');
            const currentWidth = parseInt(batteryFill.style.width) || 100;
            if (currentWidth > 20) {
                batteryFill.style.width = (currentWidth - 1) + '%';
                document.querySelector('.battery span').textContent = (currentWidth - 1) + '%';
            }
        }, 30000);
