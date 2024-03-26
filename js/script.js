// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue! :)',

            image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg'
        };
    },
}).mount('#app');