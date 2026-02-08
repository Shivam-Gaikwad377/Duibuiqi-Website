  // Create background particles
        function createParticles() {
            const container = document.getElementById('particles');
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                container.appendChild(particle);
            }
        }
        createParticles();

        let currentMeterValue = 0;
        let messageRevealed = false;

        // Reveal hidden message with animation
        function revealMessage() {
            const message = document.getElementById('hiddenMessage');
            if (!messageRevealed) {
                message.classList.add('show');
                messageRevealed = true;
                setTimeout(() => {
                    createConfetti();
                }, 500);
            }
        }

        // Create floating hearts with variety
        function createHearts() {
            const container = document.getElementById('heartContainer');
            container.classList.add('active');
            
            const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞', '💟', '🧡', '💛', '💚', '💙', '💜'];
            
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.animationDelay = (Math.random() * 0.5) + 's';
                    heart.style.fontSize = (15 + Math.random() * 20) + 'px';
                    container.appendChild(heart);

                    setTimeout(() => heart.remove(), 4500);
                }, i * 80);
            }

            setTimeout(() => container.classList.remove('active'), 6000);
        }

    let music = new Audio("music.mp3");
    music.volume = 1;   // 0.0 to 1.0
    music.loop = false;   // true if you want looping

    function playSound() {
    // Restart if already playing
    music.currentTime = 0;
    music.play();

    // Optional visual effect
    createMusicNotes();
}

        // Create floating music notes
        function createMusicNotes() {
            const notes = ['🎵', '🎶', '🎼', '🎹'];
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const note = document.createElement('div');
                    note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
                    note.style.position = 'fixed';
                    note.style.left = Math.random() * window.innerWidth + 'px';
                    note.style.top = window.innerHeight + 'px';
                    note.style.fontSize = (20 + Math.random() * 20) + 'px';
                    note.style.pointerEvents = 'none';
                    note.style.zIndex = '9999';
                    note.style.animation = 'music-float 3s ease-out forwards';
                    document.body.appendChild(note);

                    setTimeout(() => note.remove(), 3000);
                }, i * 100);
            }
        }

        // Add music note animation
        const musicStyle = document.createElement('style');
        musicStyle.textContent = `
            @keyframes music-float {
                to {
                    opacity: 0;
                    transform: translateY(-${window.innerHeight + 100}px) translateX(${Math.random() * 200 - 100}px);
                }
            }
        `;
        document.head.appendChild(musicStyle);

        // Shake animation effect
        function shakeApology() {
            document.body.style.animation = 'shake 0.5s';
            setTimeout(() => {
                document.body.style.animation = '';
                createStars();
            }, 500);
        }

        // Add shake animation
        const shakeStyle = document.createElement('style');
        shakeStyle.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(shakeStyle);

        // Create star explosion
        function createStars() {
            for (let i = 0; i < 20; i++) {
                const star = document.createElement('div');
                star.innerHTML = '⭐';
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                star.style.position = 'fixed';
                star.style.left = centerX + 'px';
                star.style.top = centerY + 'px';
                star.style.fontSize = (15 + Math.random() * 15) + 'px';
                star.style.pointerEvents = 'none';
                star.style.zIndex = '9999';
                
                const angle = (Math.PI * 2 * i) / 20;
                const distance = 100 + Math.random() * 200;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                star.style.animation = `star-burst-${i} 1s ease-out forwards`;
                
                const starAnim = document.createElement('style');
                starAnim.textContent = `
                    @keyframes star-burst-${i} {
                        to {
                            opacity: 0;
                            transform: translate(${tx}px, ${ty}px) rotate(360deg) scale(0.5);
                        }
                    }
                `;
                document.head.appendChild(starAnim);
                
                document.body.appendChild(star);
                setTimeout(() => {
                    star.remove();
                    starAnim.remove();
                }, 1000);
            }
        }

        // Create confetti effect
        function createConfetti() {
            const colors = ['#ff9aa2', '#ffb7b2', '#ffdac1', '#e2f0cb', '#b5ead7', '#c7ceea'];
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.style.position = 'fixed';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.top = '-10px';
                    confetti.style.width = (5 + Math.random() * 10) + 'px';
                    confetti.style.height = (5 + Math.random() * 10) + 'px';
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.pointerEvents = 'none';
                    confetti.style.zIndex = '9999';
                    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                    
                    const duration = 2 + Math.random() * 2;
                    const tx = (Math.random() - 0.5) * 200;
                    confetti.style.animation = `confetti-fall-${i} ${duration}s linear forwards`;
                    
                    const confettiAnim = document.createElement('style');
                    confettiAnim.textContent = `
                        @keyframes confetti-fall-${i} {
                            to {
                                transform: translateY(${window.innerHeight + 20}px) translateX(${tx}px) rotate(${Math.random() * 720}deg);
                                opacity: 0;
                            }
                        }
                    `;
                    document.head.appendChild(confettiAnim);
                    
                    document.body.appendChild(confetti);
                    setTimeout(() => {
                        confetti.remove();
                        confettiAnim.remove();
                    }, duration * 1000);
                }, i * 30);
            }
        }

        // Update forgiveness meter with celebrations
        function updateMeter(value) {
            currentMeterValue = value;
            const meterFill = document.getElementById('meterFill');
            meterFill.style.width = value + '%';
            meterFill.textContent = value + '%';

            if (value === 100) {
                setTimeout(() => {
                    createHearts();
                    createConfetti();
                    playVictorySound();
                    
                    // Show thank you message
                    setTimeout(() => {
                        showThankYouMessage();
                    }, 1000);
                }, 500);
            } else if (value >= 50) {
                createStars();
            }
        }

        // Play victory sound
        function playVictorySound() {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const notes = [523.25, 659.25, 783.99, 1046.50];
            
            notes.forEach((freq, i) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.frequency.value = freq;
                osc.type = 'sine';
                const start = audioContext.currentTime + (i * 0.15);
                gain.gain.setValueAtTime(0.3, start);
                gain.gain.exponentialRampToValueAtTime(0.01, start + 0.3);
                osc.start(start);
                osc.stop(start + 0.3);
            });
        }

        // Show thank you message
        function showThankYouMessage() {
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.5s;
            `;
            
            const message = document.createElement('div');
            message.style.cssText = `
                background: linear-gradient(135deg, var(--cream), white);
                padding: 60px;
                border-radius: 30px;
                text-align: center;
                max-width: 500px;
                box-shadow: 0 30px 100px rgba(0,0,0,0.5);
                animation: scaleIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            `;
            
            message.innerHTML = `
                <div style="font-size: 4rem; margin-bottom: 20px;">🎉💕✨</div>
                <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: var(--warm-brown); margin-bottom: 20px;">
                    Thank You So Much!
                </h2>
                <p style="font-size: 1.3rem; line-height: 1.8; color: var(--deep-brown);">
                    You've just made my day! Your forgiveness means the world to me. 
                    I promise to be the best friend you deserve. 💖
                </p>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="margin-top: 30px; padding: 15px 40px; font-size: 1.2rem; 
                               background: var(--warm-brown); color: white; border: none; 
                               border-radius: 50px; cursor: pointer; font-family: 'Crimson Pro', serif; 
                               font-weight: 600; box-shadow: 0 5px 20px rgba(0,0,0,0.3);">
                    Close 💫
                </button>
            `;
            
            overlay.appendChild(message);
            document.body.appendChild(overlay);
            
            // Add animations
            const animations = document.createElement('style');
            animations.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { transform: scale(0.5); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `;
            document.head.appendChild(animations);
        }

        // Surprise me button
        function surpriseMe() {
            const surprises = [
                () => { createHearts(); createConfetti(); },
                () => { playSound(); createStars(); },
                () => { shakeApology(); createMusicNotes(); },
                () => { 
                    revealMessage(); 
                    setTimeout(() => createHearts(), 500);
                }
            ];
            
            const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
            randomSurprise();
        }

        // Add click animation to reason cards
        document.querySelectorAll('.reason-card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(1.08) rotate(2deg)';
                createMiniHearts(this);
                setTimeout(() => {
                    this.style.transform = '';
                }, 300);
            });
        });

        // Create mini hearts on card click
        function createMiniHearts(element) {
            const rect = element.getBoundingClientRect();
            for (let i = 0; i < 5; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = '💕';
                heart.style.position = 'fixed';
                heart.style.left = (rect.left + rect.width / 2) + 'px';
                heart.style.top = (rect.top + rect.height / 2) + 'px';
                heart.style.fontSize = '20px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '9999';
                
                const angle = (Math.PI * 2 * i) / 5;
                const tx = Math.cos(angle) * 50;
                const ty = Math.sin(angle) * 50;
                
                heart.style.animation = `mini-float-${i} 1s ease-out forwards`;
                
                const anim = document.createElement('style');
                anim.textContent = `
                    @keyframes mini-float-${i} {
                        to {
                            opacity: 0;
                            transform: translate(${tx}px, ${ty - 50}px);
                        }
                    }
                `;
                document.head.appendChild(anim);
                
                document.body.appendChild(heart);
                setTimeout(() => {
                    heart.remove();
                    anim.remove();
                }, 1000);
            }
        }

        // Add sparkle cursor effect (enhanced)
        let lastSparkle = 0;
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastSparkle > 100 && Math.random() > 0.7) {
                lastSparkle = now;
                const sparkle = document.createElement('div');
                const sparkles = ['✨', '⭐', '💫', '🌟'];
                sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
                sparkle.style.position = 'fixed';
                sparkle.style.left = e.clientX + 'px';
                sparkle.style.top = e.clientY + 'px';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.fontSize = (15 + Math.random() * 10) + 'px';
                sparkle.style.animation = 'fade-sparkle 1s forwards';
                sparkle.style.zIndex = '9999';
                document.body.appendChild(sparkle);

                setTimeout(() => sparkle.remove(), 1000);
            }
        });

        // Add fade sparkle animation
        const sparkleStyle = document.createElement('style');
        sparkleStyle.textContent = `
            @keyframes fade-sparkle {
                to {
                    opacity: 0;
                    transform: translateY(-30px) scale(0.5);
                }
            }
        `;
        document.head.appendChild(sparkleStyle);

        // Note interactions
        document.querySelectorAll('.note').forEach(item => {
            item.addEventListener('click', function() {
                createMiniHearts(this);
            });
        });

        // Timeline items interaction
        document.querySelectorAll('.timeline-content').forEach(item => {
            item.addEventListener('click', function() {
                this.style.background = 'linear-gradient(135deg, rgba(255, 212, 196, 0.5), rgba(199, 206, 234, 0.5))';
                setTimeout(() => {
                    this.style.background = '';
                }, 1000);
            });
        });

        // Promise cards interaction
        document.querySelectorAll('.promise-card').forEach(card => {
            card.addEventListener('click', function() {
                const checkmark = this.querySelector('h4');
                checkmark.style.transform = 'scale(1.2)';
                checkmark.style.color = 'var(--rose)';
                setTimeout(() => {
                    checkmark.style.transform = '';
                    checkmark.style.color = '';
                }, 300);
            });
        });