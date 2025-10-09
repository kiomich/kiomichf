        class Terminal {
            constructor() {
                this.output = document.getElementById('terminal-output');
                this.input = null;
                this.history = [];
                this.historyIndex = -1;
                this.currentPath = '~';
                
                this.init();
            }

            init() {
                this.addPrompt();
            }

            executeCommand() {
                const command = this.input.value.trim();
                const currentLine = this.input ? this.input.closest('.input-line') : null;
                
                if (!command) {
                    if (currentLine) currentLine.remove();
                    this.addPrompt();
                    return;
                }

                if (currentLine) currentLine.remove();
                this.addOutput(`<span class="prompt"><span class="user">user</span>@<span class="host">NAMI-OS</span>:<span class="path">${this.currentPath}</span>$</span> ${command}`);
                
                this.history.push(command);
                this.historyIndex = this.history.length;
                
                this.processCommand(command);
                this.addPrompt();
            }

            processCommand(command) {
                const parts = command.split(' ');
                const cmd = parts[0].toLowerCase();
                const args = parts.slice(1);

                switch (cmd) {
                    case 'phone':
                        this.handlePhoneCommand(args);
                        break;
                    case 'pc':
                        this.handlePcCommand(args);
                        break;
                    case 'kiomifetch':
                        this.handleKiomifetchCommand(args);
                        break;
                    default:
                        this.addOutput(`Command not found: ${cmd}. Available: phone, pc, kiomifetch`, 'error');
                }
            }

            handlePhoneCommand(args) {
                this.addOutput('Opening mobile version...');
                window.location.href = '../mobile/index.html';
            }

            handlePcCommand(args) {
                this.addOutput('Opening desktop version...');
                window.location.href = 'load1/loadOS.html';
            }

            handleKiomifetchCommand(args) {
                const art = `⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠸⣧⡀⠀⠀⠀⠀⠀⠀⡆⠀⢠⣾⢁⣸⡄⢰⢳⠒⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⢿⣷⣄⣀⠀⠀⢠⡧⠀⢾⠇⡼⠛⢻⠆⣿⡗⠋⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠙⢻⣿⣝⣿⣟⠛⠻⣞⡻⠶⠾⠲⣾⣟⣖⣓⠲⠶⠶⢤⡯⣱⡜⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠻⢷⣮⡣⠀⠈⠙⠛⠛⠲⣔⡻⣄⡼⠃⠀⠀⠘⠢⢇⡸⣦⣥⠷⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠒⡖⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣷⣥⡀⠀⠀⠀⠈⠙⠶⠤⣄⡀⠀⠀⠀⠀⠀⢸⠳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⢀⠠⢧⠀⢸⡉⣱⣁⢽⡀⠀⠀⣀⣠⡤⠶⠶⠯⡼⢫⣬⡇⣠⡴⠾⠛⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣦⣀⠀⠀⠀⠀⠀⠀⠉⠳⣤⠀⠀⠀⠙⠀⠹⡄⢀⣴⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢜⡉⠋⢻⠀⢈⣧⣜⣁⡝⠇⣤⣾⠞⠋⠉⠀⠀⠀⠀⠀⠈⠁⠀⠉⠛⠮⣄⠀⠀⠀⢠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣻⣶⣦⣤⣤⣀⠀⠀⠈⠀⠀⠀⠀⠀⠀⢻⡛⣯⡻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣌⡟⠲⢼⣿⡊⠁⠘⢆⣿⠶⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠀⠀⠀⠈⠙⠓⠚⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣍⣉⣓⣎⣹⠀⠀⠀⠀⠀⠀⠈⢯⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡤⣦⡀⠿⢦⣀⣯⠀⠈⣿⡤⣞⣂⠀⠀⠀⣀⣀⣀⣠⡤⠴⠖⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⣤⢬⠷⠀⠀⠀⠀⠀⠀⠀⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣅⣼⠙⠀⠀⠸⣿⡙⢾⣿⡁⡶⢸⡛⠛⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢟⠻⢦⣄⣀⣀⣀⠀⠀⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⣐⣿⠛⠀⠀⠀⢀⣰⡿⠛⠉⠡⠈⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⢀⡦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⢤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⣤⣘⢿⣿⣛⠛⠻⠿⠶⣶⣦⣤⣤⣀⣄⣀⣠⣾⣿⣤⣤⣴⣶⠾⠟⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡟⢀⠀⠀⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣇⣴⣿⣻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣛⣿⡏⠻⢷⣦⣄⠀⠀⠀⠈⠉⠉⠻⣯⣽⣿⣽⡉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣏⣶⣸⣘⣧⣸⣧⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠹⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⡇⢀⠙⠻⣿⣶⣀⠀⠀⠀⠀⠈⢷⡶⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣶⠾⠟⠛⠉⠉⢏⣉⡟⢷⢾⣷⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⢰⣾⠿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⢴⡄⠀⠉⠛⠿⢦⣄⡀⠀⠘⠀⠀⠀⠀⠀⠀⠀⢀⠾⢄⠀⠀⠀⠀⠀⣠⣴⡻⠉⢄⡀⠀⠀⠀⠀⠀⠈⠓⠊⠀⠈⠳⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣠⠟⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢾⣀⠀⠀⠀⠈⠛⠷⣦⣄⣠⢤⡀⣀⡠⠦⣏⠀⣀⡧⠦⣠⣴⣯⣷⠾⠛⠋⠉⠉⠙⢲⡄⠀⠀⠀⠀⠀⠀⠀⠘⣿⡗⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠴⣄⣼⡿⢾⣶⣄⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠋⠀⠀⠀⠀⠀⣩⠧⣬⣇⣀⣧⡀⣠⣷⣯⡀⣠⡾⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠋⠉⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⠾⠤⠚⠀⠀⠀⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠓⢤⡜⢹⣄⣸⠁⠀⢨⠇⠀⡿⢺⠻⣈⠷⠶⠤⢤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠑⡆⠤⣄⠀⣀⣴⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⠆⠀⠈⠓⠒⠉⠓⠚⠏⠉⠰⠃⠀⠀⠀⠀⠀⠈⠉⠛⠲⠤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣶⣉⠙⣶⡧⣠⣾⣈⣧⡽⢤⣀⡀⠀⠀⠀⠀⠀⠀⢀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⢤⣤⣤⣤⣤⡤⠶⠶⣿⠛⠛⢻⡈⢉⣇⣀⣧⠴⠉⡶⠊⠉⠻⢽⣿⣛⣛⠛⠛⠻⠯⢭⣝⣳⣦⣀⣀⣀⣤⣄⡀⠀⠀⠀⣤⡄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡀⠙⢳⡀⠀⠀⠀⠀⠀⠻⠀⠀⠉⠁⠀⠘⠁⠀⠀⠀⠀⠀⢋⡻⣿⣏⢙⣦⠀⠈⢻⣍⠉⠳⢤⣬⣴⣿⠴⠶⠿⣿⣥
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⢢⡠⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⢬⡏⠛⠀⠀⠀⠰⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠲⠽⠻⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                                                                                ███▄    █  ▄▄▄       ███▄ ▄███▓ ██▓ ▒█████    ██████ 
                                                                                                ██ ▀█   █ ▒████▄    ▓██▒▀█▀ ██▒▓██▒▒██▒  ██▒▒██    ▒ 
                                                                                                ▓██  ▀█ ██▒▒██  ▀█▄  ▓██    ▓██░▒██▒▒██░  ██▒░ ▓██▄   
                                                                                                ▓██▒  ▐▌██▒░██▄▄▄▄██ ▒██    ▒██ ░██░▒██   ██░  ▒   ██▒
                                                                                                ▒██░   ▓██░ ▓█   ▓██▒▒██▒   ░██▒░██░░ ████▓▒░▒██████▒▒
                                                                                                ░ ▒░   ▒ ▒  ▒▒   ▓▒█░░ ▒░   ░  ░░▓  ░ ▒░▒░▒░ ▒ ▒▓▒ ▒ ░
                                                                                                ░░░   ░ ▒░  ▒   ▒▒ ░░  ░      ░ ▒ ░  ░ ▒ ▒░ ░ ░▒  ░ ░
                                                                                                ░   ░ ░   ░   ▒   ░      ░    ▒ ░░ ░ ░ ▒  ░  ░  ░  
                                                                                                        ░       ░  ░       ░    ░      ░ ░        ░  
⠀⠀`;

                this.addOutput(`<pre class="ascii">${art}</pre>`);
            }


            navigateHistory(direction) {
                if (this.history.length === 0) return;
                
                this.historyIndex += direction;
                
                if (this.historyIndex < 0) {
                    this.historyIndex = 0;
                } else if (this.historyIndex >= this.history.length) {
                    this.historyIndex = this.history.length;
                    this.input.value = '';
                    return;
                }
                
                this.input.value = this.history[this.historyIndex];
            }

            autoComplete() {
                const command = this.input.value.toLowerCase();
                const commands = ['phone', 'pc', 'kiomifetch'];
                
                const matches = commands.filter(cmd => cmd.startsWith(command));
                
                if (matches.length === 1) {
                    this.input.value = matches[0] + ' ';
                } else if (matches.length > 1) {
                    this.addOutput('Possible completions:', 'info');
                    matches.forEach(match => {
                        this.addOutput(`  ${match}`, 'info');
                    });
                }
            }

            addOutput(text, className = '') {
                const div = document.createElement('div');
                div.className = `output ${className}`;
                div.innerHTML = text;
                this.output.appendChild(div);
                this.scrollToBottom();
            }

            addPrompt() {
                // Ensure only one prompt exists
                const existingPrompts = this.output.querySelectorAll('.input-line');
                existingPrompts.forEach(el => el.remove());

                const div = document.createElement('div');
                div.className = 'input-line';
                div.innerHTML = `
                    <span class="prompt">
                        <span class="user">user</span>@<span class="host">NAMI-OS</span>:<span class="path">${this.currentPath}</span>$ 
                    </span>
                    <input type="text" class="command-input" autocomplete="off" spellcheck="false">
                    <span class="cursor">█</span>
                `;
                
                this.output.appendChild(div);
                
                const newInput = div.querySelector('.command-input');
                newInput.focus();
                
                newInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        this.executeCommand();
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        this.navigateHistory(-1);
                    } else if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        this.navigateHistory(1);
                    } else if (e.key === 'Tab') {
                        e.preventDefault();
                        this.autoComplete();
                    }
                });
                
                this.input = newInput;
                this.scrollToBottom();
            }

            scrollToBottom() {
                this.output.scrollTop = this.output.scrollHeight;
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            new Terminal();
        });
