# Screenshots Gerados

Screenshots automaticos dos modulos do Odoo 16.

## Estrutura

```
cypress/screenshots/
├── 00-login/
│   ├── 01-login-page.png        (27KB)
│   └── 02-apos-login.png        (38KB)
├── 01-dashboard/
│   └── 01-dashboard.png
├── 02-purchase/
│   └── 01-tela-inicial.png      (44KB)
├── 03-inventory/
│   └── 01-tela-inicial.png
├── 04-invoicing/
│   ├── 01-tela-inicial.png
│   └── 02-criar-fatura.png
└── 05-settings/
    └── 01-settings.png
```

## Modulos Capturados

| Modulo | Screenshots | Descricao |
|--------|-------------|-----------|
| **Login** | 2 | Tela de login e apos login |
| **Dashboard** | 1 | Tela inicial do sistema |
| **Purchase** | 1 | Tela de compras |
| **Inventory** | 1 | Tela de estoque |
| **Invoicing** | 2 | Tela de faturas e criacao |
| **Settings** | 1 | Configuracoes |

## Como Gerar Novos Screenshots

```bash
cd docsia/screenshots
node screenshot-completo.js
```

## Para Usar nos Treinamentos

1. Copie os screenshots desejados
2. Cole na pasta `treinamentos/{fluxo}/prints/`
3. Referencia nos arquivos `.md` ou `.html`

---

*Screenshots gerados automaticamente — Odoo 16 Localizacao Brasileira OCA*
