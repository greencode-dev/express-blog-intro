const express = require('express');
const app = express();
const port = 3000;

// Configurazione asset statici
// I file inseriti nella cartella 'public' saranno accessibili via HTTP
// Esempio: se hai un file in public/images/ciambellone.jpeg, sarà accessibile a http://localhost:3000/images/ciambellone.jpeg
app.use(express.static('public'));

// Lista dei post (Array di oggetti)
const posts = [
  {
    title: 'Ciambellone',
    content: 'Un dolce soffice e semplice, perfetto per la colazione o la merenda.',
    image: '/images/ciambellone.jpeg',
    tags: ['dolce', 'colazione', 'fatto in casa'],
  },
  {
    title: 'Cracker alla barbabietola',
    content: 'Uno snack croccante e colorato, ideale per un aperitivo originale.',
    image: '/images/cracker_barbabietola.jpeg',
    tags: ['snack', 'aperitivo', 'barbabietola'],
  },
  {
    title: 'Pane fritto dolce',
    content: 'Una ricetta golosa per recuperare il pane raffermo.',
    image: '/images/pane_fritto_dolce.jpeg',
    tags: ['dolce', 'fritto', 'tradizione'],
  },
  {
    title: 'Pasta alla barbabietola',
    content: 'Un primo piatto scenografico e dal sapore delicato.',
    image: '/images/pasta_barbabietola.jpeg',
    tags: ['primo piatto', 'barbabietola', 'pasta'],
  },
  {
    title: 'Torta paesana',
    content: 'Un dolce povero della tradizione lombarda a base di pane e latte.',
    image: '/images/torta_paesana.jpeg',
    tags: ['dolce', 'tradizione', 'Lombardia'],
  },
];

// Rotta base "/"
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// Rotta "/bacheca"
app.get('/bacheca', (req, res) => {
  res.json({
    count: posts.length,
    posts: posts,
  });
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
