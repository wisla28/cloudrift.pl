// breadcrumbs.js
const breadcrumbsMiddleware = (req, res, next) => {
    const fullPath = req.baseUrl + req.path; // Pełna ścieżka
    const path = fullPath.split('/').filter(Boolean); // Rozdzielenie ścieżki
  
    // Obiekt customowych nazw
    const customNames = {
      services: 'Usługi',
      cctv: 'Monitoring',
      cloud: 'Chmura',
      support: 'Wsparcie techniczne'
    };
  
    const breadcrumbs = [];
  
    if (path.length > 0) {
      breadcrumbs.push({ name: 'Strona główna', url: '/' });
    }
  
    path.forEach((segment, index) => {
      // Customowy URL dla `services`
      let url;
      if (segment === 'services') {
        url = '/#services'; // Zmieniony URL
      } else {
        url = '/' + path.slice(0, index + 1).join('/');
      }
  
      // Customowa nazwa lub fallback
      const name = customNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
  
      if (index === path.length - 1) {
        breadcrumbs.push({ name, url: null }); // Ostatni element
      } else {
        breadcrumbs.push({ name, url });
      }
    });
  
    res.locals.breadcrumbs = breadcrumbs; // Udostępnienie breadcrumbs w widokach
    next();
  };
  
  module.exports = breadcrumbsMiddleware;
  