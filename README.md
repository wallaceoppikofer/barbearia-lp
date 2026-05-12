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

## Como usar no GitHub Pages

1. Suba a pasta para um repositório público no GitHub
2. Vá em **Settings → Pages**
3. Em "Source", selecione a branch `main` e a pasta `/ (root)`
4. Clique em **Save** — o link ficará disponível em alguns minutos

## Personalização

Antes de entregar ao cliente, altere:

- `index.html` — Nome da barbearia, endereço, telefone, links do WhatsApp e Instagram
- `css/style.css` — Cores nas variáveis CSS (`:root`) se o cliente tiver identidade própria
- Imagens do Unsplash → substituir pelas fotos reais do estabelecimento

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
