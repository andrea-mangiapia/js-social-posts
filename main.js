// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.


// Creo l'array di oggetti che rappresenteranno ciascun post:
const postArray = [
    {
        id: 1,
        author: 'Paolo Rossi',
        profilePics:'https://unsplash.it/300/300?image=51',
        date: '06-20-2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet dignissimos laudantium quidem maxime, iste totam, pariatur molestias animi, labore voluptas possimus voluptatem consectetur placeat incidunt unde quas beatae voluptate.',
        image:'https://unsplash.it/500/300?image=52',
        likes:'441'
    },
    {
        id: 2,
        author: 'Andrea Nero',
        profilePics:'https://unsplash.it/300/300?image=20',
        date: '06-21-2022',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque possimus veritatis dignissimos vero assumenda fugiat cupiditate velit eligendi id, delectus, rerum quo labore necessitatibus unde quae alias corporis eaque placeat!',
        image:'https://unsplash.it/500/300?image=60',
        likes:'573'
    },
    {
        id: 3,
        author: 'Michela Bianchi',
        profilePics: null,
        date: '06-23-2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate dolorum ex! Aut repellendus eum rem tempore, ipsa optio magnam ad dolore alias voluptas. Nemo tenetur excepturi rem ducimus totam!',
        image:'https://unsplash.it/500/300?image=55',
        likes:'305'
    },
    {
        id: 4,
        author: 'Mario Verdi',
        profilePics:'https://unsplash.it/300/300?image=42',
        date: '06-24-2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus animi quos voluptate eius praesentium repudiandae aliquid voluptatibus. Debitis, asperiores! Deserunt officiis ratione totam eos recusandae, assumenda quae dolore veniam.',
        image: null,
        likes:'284'
    },
];