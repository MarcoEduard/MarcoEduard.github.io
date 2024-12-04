document.getElementById('monitorizare').addEventListener('dblclick', function () {
    const images = document.querySelectorAll('.images img');
    const modal = document.createElement('div');
    const modalImage = document.createElement('img');
    const closeButton = document.createElement('button');

    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';

    modalImage.style.maxWidth = '90%';
    modalImage.style.borderRadius = '10px';

    closeButton.textContent = 'Închide';
    closeButton.style.position = 'absolute';
    closeButton.style.bottom = '20px';
    closeButton.style.backgroundColor = '#f44336';
    closeButton.style.color = 'white';

    modal.appendChild(modalImage);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    let index = 0;

    function showNextImage() {
        modalImage.src = images[index].src;
        index = (index + 1) % images.length;
    }

    const interval = setInterval(showNextImage, 2000);

    closeButton.addEventListener('click', function () {
        clearInterval(interval);
        modal.remove();
    });
});
