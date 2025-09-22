import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // O hook `useLocation` nos dá acesso ao objeto de localização,
  // que contém informações sobre a URL atual.
  const { pathname } = useLocation();

  // O `useEffect` é executado toda vez que `pathname` muda.
  useEffect(() => {
    // Rola a janela para o topo da página, nas coordenadas (0, 0).
    window.scrollTo(0, 0);
  }, [pathname]); // A dependência `pathname` garante que o efeito
                  // seja executado em cada navegação.

  return null;
};

export default ScrollToTop;
