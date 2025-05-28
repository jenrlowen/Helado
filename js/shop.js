document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const input = this.parentNode.querySelector('.quantity');
                const currentValue = parseInt(input.value);
                
                if (this.textContent === '+') {
                    input.value = currentValue + 1;
                } else if (this.textContent === '-' && currentValue > 1) {
                    input.value = currentValue - 1;
                }
            });
        });