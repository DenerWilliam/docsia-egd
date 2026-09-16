# Screenshots Automaticos — Odoo 16

Scripts Cypress para capturar screenshots dos fluxos principais do Odoo.

## Pre-requisitos

- Node.js 16+
- Odoo 16 rodando em `localhost:14069`
- Cypress instalado

## Instalacao

```bash
cd docsia/screenshots
npm install
```

## Executando

### Abrir Cypress (interface)
```bash
npm run cy:open
```

### Executar todos os testes
```bash
npm run cy:all
```

### Executar por fluxo
```bash
npm run cy:vendas
npm run cy:compras
npm run cy:estoque
npm run cy:nfe
```

## Fluxos Disponiveis

| Fluxo | Arquivo | Screenshots |
|-------|---------|-------------|
| **Vendas** | `01-vendas.cy.js` | 14 screenshots |
| **Compras** | `02-compras.cy.js` | 10 screenshots |
| **Estoque** | `03-estoque.cy.js` | 10 screenshots |
| **NF-e** | `04-nfe.cy.js` | 12 screenshots |

## Estrutura de Saidas

```
cypress/screenshots/
├── 01-vendas/
│   ├── 01-tela-inicial.png
│   ├── 02-criar-orcamento.png
│   ├── ...
│   └── 14-pagamento-confirmado.png
├── 02-compras/
│   ├── 01-tela-inicial.png
│   ├── ...
│   └── 10-pagar-fornecedor.png
├── 03-estoque/
│   ├── 01-tela-inicial.png
│   ├── ...
│   └── 10-inventarios.png
└── 04-nfe/
    ├── 01-tela-inicial.png
    ├── ...
    └── 12-historico-nfe.png
```

## Configuracao

### URL do Odoo

Se o Odoo estiver rodando em outra porta, altere em `cypress.config.js`:

```javascript
baseUrl: 'http://localhost:14069'
```

### Credenciais

Os testes usam login padrao `admin/admin`. Se alterou, mude nos arquivos `.cy.js`:

```javascript
cy.get('#login').type('seu-usuario')
cy.get('#password').type('sua-senha')
```

## Screenshots para Treinamento

Os screenshots gerados podem ser usados nos treinamentos:

1. Execute os testes: `npm run cy:all`
2. Copie os screenshots de `cypress/screenshots/`
3. Cole na pasta `docsia/treinamentos/{fluxo}/prints/`
4. Referencia nos arquivos `.md` ou `.html`

---

*Screenshots automaticos — Odoo 16 Localizacao Brasileira OCA*
