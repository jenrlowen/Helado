document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const quantityDiv = this.parentNode.querySelector('.quantity');
                let currentValue = parseInt(quantityDiv.textContent);
                
                if (this.textContent === '+') {
                    quantityDiv.textContent = currentValue + 1;
                } else if (this.textContent === '-' && currentValue > 1) {
                    quantityDiv.textContent = currentValue - 1;
                }
            });
        });