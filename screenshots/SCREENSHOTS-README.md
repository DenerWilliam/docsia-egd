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
│   ├── 01-tela-inicial.png      (50KB)
│   └── 02-criar-pedido.png      (93KB)
├── 03-inventory/
│   ├── 01-tela-inicial.png      (165KB)
│   └── 02-criar-transferencia.png (67KB)
└── 04-invoicing/
    ├── 01-tela-inicial.png      (270KB)
    └── 02-criar-fatura.png      (71KB)
```

## Modulos Capturados

| Modulo | Status | Registros |
|--------|--------|-----------|
| **Purchase** | OK | Purchase Requests (RFQ) |
| **Inventory** | OK | Transfers (15 registros) |
| **Invoicing** | OK | Invoices (4 registros) |

## Como Gerar Novos Screenshots

```bash
cd docsia/screenshots
node screenshot-menu-click.js
```

## Notas Tecnicas

- Navegacao via menu clicavel (nao via URL)
- Erros de servidor evitados
- Screenshots validos sem dialogos de erro

---

*Screenshots gerados automaticamente — Odoo 14 Localizacao Brasileira OCA*
