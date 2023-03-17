function getArticleGenerator(articles) {
  return () => {
    const divElement = document.querySelector('#content');
    const articleElement = document.createElement('article');

    if (articles.length > 0) {
    const article = articles.shift();
    articleElement.innerText = article;
    divElement.appendChild(articleElement);
    }
  };
}
