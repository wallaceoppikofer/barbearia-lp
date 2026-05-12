# Black Label Barbearia — Landing Page

Landing page profissional para barbearia, desenvolvida com HTML semântico, CSS responsivo e JavaScript vanilla.

## Estrutura do projeto

```
barbearia-lp/
├── index.html        # HTML semântico (roles, aria, landmarks)
├── css/
│   └── style.css     # CSS responsivo com variáveis e mobile-first
├── js/
│   └── main.js       # Navbar scroll, menu mobile, animações, smooth scroll
└── README.md
```

## Tecnologias

- HTML5 semântico (header, nav, section, article, figure, address, footer, blockquote)
- CSS3 com variáveis customizadas, Grid e Flexbox
- JavaScript vanilla (ES6+), sem dependências
- Google Fonts: Playfair Display + Outfit
- Imagens: Unsplash (substituir pelas reais do cliente)

## Boas práticas aplicadas

- HTML semântico com landmarks (`role="banner"`, `role="contentinfo"`, etc.)
- Atributos `aria-label`, `aria-expanded`, `aria-controls` para acessibilidade
- `aria-hidden="true"` em elementos puramente decorativos
- `rel="noopener noreferrer"` em todos os links externos
- `loading="lazy"` nas imagens abaixo da dobra
- `fetchpriority="high"` na imagem principal do hero
- `width` e `height` em todas as imagens (evita layout shift)
- Responsivo: desktop → tablet (900px) → mobile (600px)
- Animações via IntersectionObserver com fallback
