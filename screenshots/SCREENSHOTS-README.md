# Screenshots Gerados

Screenshots automaticos dos modulos do Odoo 14.

## Estrutura

```
cypress/screenshots/
├── 00-login/
│   ├── 01-login-page.png        (27KB)
│   └── 02-apos-login.png        (46KB)
├── 01-dashboard/
│   └── 01-dashboard.png         (46KB)
├── 02-purchase/
│   ├── 01-tela-inicial.png      (135KB)
│   └── 02-criar-pedido.png      (135KB)
├── 03-inventory/
│   ├── 01-tela-inicial.png      (140KB)
│   └── 02-criar-transferencia.png (140KB)
└── 04-invoicing/
    ├── 01-tela-inicial.png      (181KB)
    └── 02-criar-fatura.png      (182KB)
```

## Modulos Capturados

| Modulo | Screenshots | Descricao |
|--------|-------------|-----------|
| **Login** | 2 | Tela de login e apos login |
| **Dashboard** | 1 | Tela inicial do sistema |
| **Purchase** | 2 | Lista de pedidos e criacao |
| **Inventory** | 2 | Lista de transferencias e criacao |
| **Invoicing** | 2 | Lista de faturas e criacao |

## Como Gerar Novos Screenshots

```bash
cd docsia/screenshots
node screenshot-fixed.js
```

## Para Usar nos Treinamentos

1. Copie os screenshots desejados
2. Cole na pasta `treinamentos/{fluxo}/prints/`
3. Referencia nos arquivos `.md` ou `.html`

---

*Screenshots gerados automaticamente — Odoo 14 Localizacao Brasileira OCA*
