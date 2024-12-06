document.addEventListener('DOMContentLoaded', () => {
    const tntBlock = document.getElementById('tnt-block');
    const whiteFlash = document.getElementById('white-flash');
    const finalText = document.getElementById('final-text');

    // Start the wick burning animation
    setTimeout(() => {
        // Wick has finished burning, start explosion sequence
        tntBlock.style.animation = 'explode 0.5s ease-out forwards';
        
        setTimeout(() => {
            // Show white flash
            whiteFlash.style.opacity = '1';
            
            setTimeout(() => {
                // Hide white flash
                whiteFlash.style.opacity = '0';
                
                setTimeout(() => {
                    // Show final text
                    finalText.style.opacity = '1';
                }, 500);
            }, 1000);
        }, 500);
    }, 3000); // Wait for 3 seconds (wick burning time)
});

