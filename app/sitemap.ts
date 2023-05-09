export default async function sitemap() {

  const routes = ['/', '/about'].map(
    (route) => ({
      url: `https://www.scherera.ch${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes];
}
