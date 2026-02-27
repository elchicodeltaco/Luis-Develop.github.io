document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.querySelector('.scroll-down-arrow');
    
    if (arrow) {
        arrow.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});