# 📖 Manual da Identidade Visual: Rocha Tech Solutions

Este documento define os pilares visuais da marca Rocha Tech Solutions, garantindo consistência, profissionalismo e alinhamento com a nossa estratégia.

## 1. Conceito e Estratégia

A identidade da Rocha Tech Solutions é construída sobre um equilíbrio fundamental:

* **O Lado "Rocha":** Representa nossos valores de **Segurança, Eficiência e Solidez**. É o pilar de confiança para nossos clientes (PMEs e Finais).
* **O Lado "Tech":** Representa nossa personalidade **Inovadora, Ágil, Amigável e Acessível**. É como entregamos nossas soluções.

## 2. Logo

O logo é a assinatura visual primária e define os elementos centrais da marca.

* **Símbolo:** [Descrição: Uma forma geométrica de montanha (Rocha) que contém um símbolo de circuito/processador (Tech) em seu centro.]
* **Tipografia do Logo:** "ROCHA TECH" em fonte robusta, geométrica e maiúscula; "SOLUTIONS" em uma fonte mais leve e espaçada.
* **Aplicações:**
    * **Principal:** Logo completo com cores (Azul-Tech, Preto/Branco) sobre fundos claros.
    * **Versão Negativa:** Logo em versão monocromática (branca ou azul-tech) para aplicação sobre fundos escuros ou fotos.

## 3. Paleta de Cores

A paleta é dividida em cores primárias (a base da marca) e uma cor de destaque (para ações).

| Função | Cor | HEX Code | Descrição |
| :--- | :--- | :--- | :--- |
| **Primária (Tech)** | Azul-Tech | `#4A90E2` | Cor do ícone do logo. Usar para links, ícones e destaques. |
| **Destaque (Ação)** | Laranja-Ágil | `#F77F00` | **Cor principal para CTAs** (botões, banners). Traz energia. |
| **Fundo Escuro (Rocha)**| Grafite | `#212529` | Representa a solidez. Usar para texto principal ou fundos escuros. |
| **Texto (Corpo)** | Cinza-Médio | `#6C757D` | Para parágrafos e textos secundários. Garante boa legibilidade. |
| **Fundo Claro** | Branco | `#FFFFFF` | Cor de fundo principal. Representa "Transparência". |
| **Bordas/Divisões**| Cinza-Claro | `#E9ECEF` | Para bordas sutis, cards e divisões de seção. |

## 4. Tipografia (A Voz)

Usamos uma combinação de fontes moderna e legível para equilibrar personalidade e clareza.

#### Fonte de Títulos (Headings): Poppins
* **Uso:** Títulos principais (H1, H2, H3), menus e banners.
* **Personalidade:** Moderna, geométrica, amigável.
* **Pesos Recomendados:** `Semibold (600)` ou `Bold (700)`.
* **CSS:** `font-family: 'Poppins', sans-serif;`

#### Fonte de Corpo (Body): Roboto
* **Uso:** Parágrafos, descrições de serviços e qualquer texto longo.
* **Personalidade:** Clara, eficiente, legível.
* **Pesos Recomendados:** `Regular (400)` e `Italic (400)`.
* **CSS:** `font-family: 'Roboto', sans-serif;`

#### Importação (Google Fonts):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Roboto:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
```

## 5. Sistema de Temas (Claro, Escuro, Sistema)

O projeto inclui um sistema de temas robusto que suporta os modos claro, escuro e um modo de sistema que respeita as preferências do sistema operacional do usuário.

### Como Funciona

- **CSS Custom Properties:** O sistema é construído com variáveis CSS (`--background-primary`, `--text-primary`, etc.) definidas em `src/styles/theme.css`.
- **Lógica de Troca:** A lógica para alternar temas e persistir a escolha do usuário está em `src/scripts/theme-switcher.js`.
- **Persistência:** A preferência do usuário (claro ou escuro) é salva no `localStorage` e sobrepõe a configuração do sistema.
- **Modo Sistema:** Se o usuário escolher "Sistema", o tema mudará automaticamente com base na configuração de `prefers-color-scheme` do sistema operacional.

### Integração em um Projeto React

1.  **Importe o CSS do Tema:**
    No seu componente principal (ex: `App.tsx`), importe o arquivo de tema:
    ```javascript
    import './styles/theme.css';
    ```

2.  **Inicialize o Theme Switcher:**
    Ainda no seu componente principal, use um `useEffect` para inicializar o sistema de temas:
    ```javascript
    import React, { useEffect } from 'react';
    import { setupThemeSwitcher } from './scripts/theme-switcher';

    function App() {
      useEffect(() => {
        setupThemeSwitcher();
      }, []);

      // ... resto do seu componente
    }
    ```

3.  **Adicione o Componente Seletor de Tema:**
    Crie ou use o componente `ThemeSelector.tsx` para permitir que o usuário escolha o tema. Este componente deve usar a função `setTheme` do `theme-switcher.js`.

    **Exemplo de snippet do seletor:**
    ```jsx
    // src/components/ThemeSelector/ThemeSelector.tsx
    import React, { useState } from 'react';
    import { setTheme, getInitialTheme, THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '../../scripts/theme-switcher';

    const ThemeSelector = () => {
      const [currentTheme, setCurrentTheme] = useState(getInitialTheme());

      const handleThemeChange = (theme) => {
        setTheme(theme);
        setCurrentTheme(theme);
      };

      return (
        <div className="theme-selector">
          <button onClick={() => handleThemeChange(THEME_LIGHT)} className={currentTheme === THEME_LIGHT ? 'active' : ''}>Claro</button>
          <button onClick={() => handleThemeChange(THEME_DARK)} className={currentTheme === THEME_DARK ? 'active' : ''}>Escuro</button>
          <button onClick={() => handleThemeChange(THEME_SYSTEM)} className={currentTheme === THEME_SYSTEM ? 'active' : ''}>Sistema</button>
        </div>
      );
    };

    export default ThemeSelector;
    ```

4.  **Use as Variáveis de Tema no seu CSS:**
    Ao estilizar seus componentes, use as variáveis definidas em `theme.css` em vez de cores hardcoded.
    ```css
    .meu-componente {
      background-color: var(--background-secondary);
      color: var(--text-primary);
      border: 1px solid var(--border-primary);
    }
    ```

### Testes Manuais

Para garantir que o sistema de temas está funcionando corretamente:

1.  **Teste de Seleção Manual:**
    - Clique no botão "Claro". O tema deve mudar para claro.
    - Recarregue a página. O tema claro deve persistir.
    - Clique no botão "Escuro". O tema deve mudar para escuro.
    - Recarregue a página. O tema escuro deve persistir.

2.  **Teste do Modo Sistema:**
    - Clique no botão "Sistema".
    - Altere a preferência de tema do seu sistema operacional (de claro para escuro, ou vice-versa).
    - O tema do site deve mudar automaticamente para corresponder à preferência do seu sistema, sem a necessidade de recarregar a página.

3.  **Teste de Fallback:**
    - Limpe o `localStorage` do seu navegador (nas ferramentas de desenvolvedor).
    - Recarregue a página. O tema deve corresponder à preferência do seu sistema (comportamento padrão do modo "Sistema").


## 5. Sistema de Temas (Claro, Escuro, Sistema)

O projeto inclui um sistema de temas robusto que suporta os modos claro, escuro e um modo de sistema que respeita as preferências do sistema operacional do usuário.

### Como Funciona

- **CSS Custom Properties:** O sistema é construído com variáveis CSS (`--background-primary`, `--text-primary`, etc.) definidas em `src/styles/theme.css`.
- **Lógica de Troca:** A lógica para alternar temas e persistir a escolha do usuário está em `src/scripts/theme-switcher.js`.
- **Persistência:** A preferência do usuário (claro ou escuro) é salva no `localStorage` e sobrepõe a configuração do sistema.
- **Modo Sistema:** Se o usuário escolher "Sistema", o tema mudará automaticamente com base na configuração de `prefers-color-scheme` do sistema operacional.

### Integração em um Projeto React

1.  **Importe o CSS do Tema:**
    No seu componente principal (ex: `App.tsx`), importe o arquivo de tema:
    ```javascript
    import './styles/theme.css';
    ```

2.  **Inicialize o Theme Switcher:**
    Ainda no seu componente principal, use um `useEffect` para inicializar o sistema de temas:
    ```javascript
    import React, { useEffect } from 'react';
    import { setupThemeSwitcher } from './scripts/theme-switcher';

    function App() {
      useEffect(() => {
        setupThemeSwitcher();
      }, []);

      // ... resto do seu componente
    }
    ```

3.  **Adicione o Componente Seletor de Tema:**
    Crie ou use o componente `ThemeSelector.tsx` para permitir que o usuário escolha o tema. Este componente deve usar a função `setTheme` do `theme-switcher.js`.

    **Exemplo de snippet do seletor:**
    ```jsx
    // src/components/ThemeSelector/ThemeSelector.tsx
    import React, { useState } from 'react';
    import { setTheme, getInitialTheme, THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '../../scripts/theme-switcher';

    const ThemeSelector = () => {
      const [currentTheme, setCurrentTheme] = useState(getInitialTheme());

      const handleThemeChange = (theme) => {
        setTheme(theme);
        setCurrentTheme(theme);
      };

      return (
        <div className="theme-selector">
          <button onClick={() => handleThemeChange(THEME_LIGHT)} className={currentTheme === THEME_LIGHT ? 'active' : ''}>Claro</button>
          <button onClick={() => handleThemeChange(THEME_DARK)} className={currentTheme === THEME_DARK ? 'active' : ''}>Escuro</button>
          <button onClick={() => handleThemeChange(THEME_SYSTEM)} className={currentTheme === THEME_SYSTEM ? 'active' : ''}>Sistema</button>
        </div>
      );
    };

    export default ThemeSelector;
    ```

4.  **Use as Variáveis de Tema no seu CSS:**
    Ao estilizar seus componentes, use as variáveis definidas em `theme.css` em vez de cores hardcoded.
    ```css
    .meu-componente {
      background-color: var(--background-secondary);
      color: var(--text-primary);
      border: 1px solid var(--border-primary);
    }
    ```

### Testes Manuais

Para garantir que o sistema de temas está funcionando corretamente:

1.  **Teste de Seleção Manual:**
    - Clique no botão "Claro". O tema deve mudar para claro.
    - Recarregue a página. O tema claro deve persistir.
    - Clique no botão "Escuro". O tema deve mudar para escuro.
    - Recarregue a página. O tema escuro deve persistir.

2.  **Teste do Modo Sistema:**
    - Clique no botão "Sistema".
    - Altere a preferência de tema do seu sistema operacional (de claro para escuro, ou vice-versa).
    - O tema do site deve mudar automaticamente para corresponder à preferência do seu sistema, sem a necessidade de recarregar a página.

3.  **Teste de Fallback:**
    - Limpe o `localStorage` do seu navegador (nas ferramentas de desenvolvedor).
    - Recarregue a página. O tema deve corresponder à preferência do seu sistema (comportamento padrão do modo "Sistema").
```