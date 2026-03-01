// Module script: accessible modal for artwork details
import { artworks as ARTWORKS } from './data.js';

const gallery = document.getElementById('gallery');
const modal = document.getElementById('artModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function buildGallery(){
    if(!gallery) return;
    gallery.innerHTML = ARTWORKS.map(a => `
        <div class="artwork" id="${a.id}" data-artist="${a.artist}" data-description="${a.description}">
            <img src="${a.src}" alt="${a.alt}" loading="lazy">
            <div class="overlay">
                <h3>${a.title}</h3>
                <p>${a.artist}</p>
            </div>
        </div>
    `).join('');
}

function attachGalleryHandlers(){
    const artworks = document.querySelectorAll('.artwork');
    artworks.forEach(node => {
        node.addEventListener('click', () => {
            const title = node.querySelector('.overlay h3')?.textContent || 'Artwork';
            const artist = node.dataset.artist || node.querySelector('.overlay p')?.textContent || 'Unknown';
            const description = node.dataset.description || 'No description available.';
            const image = node.querySelector('img')?.src || '';
            openModal({title, artist, description, image});
        });
        node.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === ' '){
                e.preventDefault();
                node.click();
            }
        });
        node.setAttribute('tabindex','0');
    });
}

function openModal({title, artist, description, image}){
    modalContent.innerHTML = `
        <img src="${image}" alt="${title}">
        <div>
            <h2>${title}</h2>
            <p><strong>Artist:</strong> ${artist}</p>
            <p>${description}</p>
        </div>
    `;
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
}

function closeModal(){
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    modalContent.innerHTML = '';
}

// Initialize gallery then attach handlers
document.addEventListener('DOMContentLoaded', ()=>{
    buildGallery();
    attachGalleryHandlers();

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if(e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false'){
            closeModal();
        }
    });
});

// Basic progressive enhancement: if data.js doesn't load, nothing breaks.
