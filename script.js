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