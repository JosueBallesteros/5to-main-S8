$().ready(() => {
  carga_noticias();
});

var carga_noticias = () => {
  let html = '';
  $.get("https://gnews.io/api/v4/search?q=technology&lang=es&country=us&max=10&apikey=e04996382df1470c8c5260a5cc479981")
    .done((lista_noticias) => {
      if (typeof lista_noticias === 'string') {
        lista_noticias = JSON.parse(lista_noticias);
      }
      $.each(lista_noticias.articles, (index, noticia) => {
        let imagen = noticia.image || 'https://via.placeholder.com/400x200?text=Sin+Imagen';
        html += `
          <div class="news-card">
            <div class="news-image">
              <img src="${imagen}" alt="${noticia.title}">
            </div>
            <div class="news-body">
              <span class="news-source">${noticia.source.name}</span>
              <h3 class="news-title">${noticia.title}</h3>
              <p class="news-description">${noticia.description}</p>
              <a href="${noticia.url}" target="_blank" class="news-link">Leer más</a>
            </div>
          </div>`;
      });
      $('#Contenido_Noticias').html(html);
    })
    .fail((error) => {
      $('#Contenido_Noticias').html('<div class="error-message">Error al cargar las noticias</div>');
    });
};