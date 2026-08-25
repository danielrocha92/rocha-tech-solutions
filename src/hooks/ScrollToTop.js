import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // O hook `useLocation` nos dá acesso ao objeto de localização,
  // que contém informações sobre a URL atual.
  const { pathname, hash } = useLocation();

  // O `useEffect` é executado toda vez que `pathname` ou `hash` mudam.
  useEffect(() => {
    // Rola para o topo apenas se não houver um hash na URL
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // As dependências garantem que o efeito
                  // seja executado em cada navegação.

  return null;
};

export default ScrollToTop;
