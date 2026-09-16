# Mapa de Dependências

## Visão Geral

Este documento mostra as dependências entre os principais módulos do sistema.

## Dependências Principais por Área

```
+===========================================================================+
|                    DEPENDÊNCIAS ENTRE ÁREAS                               |
+===========================================================================+

                    +------------------+
                    |     BASE         |
                    |  (base, mail,    |
                    |   contacts)      |
                    +--------+---------+
                             |
           +-----------------+-----------------+
           |                 |                 |
           v                 v                 v
    +------------+    +------------+    +------------+
    | CONTABIL.  |    |    RH      |    |   FROTA    |
    | (account)  |    |    (hr)    |    |  (fleet)   |
    +-----+------+    +-----+------+    +-----+------+
          |                 |                 |
          |                 |                 |
    +-----+------+    +-----+------+    +-----+------+
    |   ESTOQUE   |    |   COMPRAS  |    |    MRP     |
    |   (stock)   |    | (purchase) |    |   (mrp)    |
    +-----+------+    +-----+------+    +-----+------+
          |                 |                 |
          +-----------------+-----------------+
                            |
                            v
                    +------------------+
                    |      VENDAS      |
                    |     (sale)       |
                    +------------------+
```

## Dependências Críticas

### Contabilidade (account)
-Depende de: `base`, `mail`, `contacts`
-É dependência de: `stock_account`, `purchase`, `sale`, `hr_expense`

### Estoque (stock)
-Depende de: `base`, `mail`
-É dependência de: `stock_account`, `purchase_stock`, `sale_stock`

### Compras (purchase)
-Depende de: `base`, `mail`, `account`
-É dependência de: `purchase_stock`, `purchase_request`

### Vendas (sale)
-Depende de: `base`, `mail`, `account`
-É dependência de: `sale_stock`, `sale_project`

### RH (hr)
-Depende de: `base`, `mail`
-É dependência de: `hr_contract`, `hr_expense`, `hr_timesheet`

### Frota (fleet)
-Depende de: `base`, `mail`
-É dependência de: `hr_fleet`, `account_fleet`

### Manufacturing (mrp)
-Depende de: `base`, `mail`, `stock`
-É dependência de: `mrp_account`, `quality_control_mrp_oca`

## Módulos de Integração

| Módulo | Conecta | Com |
|--------|---------|-----|
| account_fleet | Contabilidade | Frota |
| hr_fleet | RH | Frota |
| mrp_account | Manufacturing | Contabilidade |
| purchase_stock | Compras | Estoque |
| sale_stock | Vendas | Estoque |
| sale_project | Vendas | Projetos |
| sale_mrp | Vendas | Manufacturing |
| purchase_mrp | Compras | Manufacturing |

## Localização Brasileira (l10n_br_*)

A localização brasileira depende de praticamente todas as áreas:

```
+===========================================================================+
|                LOCALIZAÇÃO BRASILEIRA - DEPENDÊNCIAS                      |
+===========================================================================+

    l10n_br_base (Base)
         |
         +---> l10n_br_account (Contabilidade)
         |         |
         |         +---> l10n_br_nfe (NF-e)
         |         +---> l10n_br_nfse (NFS-e)
         |         +---> l10n_br_account_payment_order
         |
         +---> l10n_br_stock (Estoque)
         |         |
         |         +---> l10n_br_stock_account
         |         +---> l10n_br_delivery
         |
         +---> l10n_br_purchase (Compras)
         |         |
         |         +---> l10n_br_purchase_stock
         |
         +---> l10n_br_sale (Vendas)
         |         |
         |         +---> l10n_br_sale_stock
         |
         +---> l10n_br_hr (RH)
                   |
                   +---> l10n_br_hr_expense_invoice
```

## Módulos OCA - Dependências Comuns

### Bank Payment
- `account_payment_mode` → `account_payment_order`
- `account_payment_partner` → `account_payment_order`
- `account_payment_purchase` → `account_payment_order`
- `account_payment_sale` → `account_payment_order`

### Purchase Workflow
- `purchase_request` → `purchase_request_tier_validation`
- `purchase_blanket_order` → `purchase_request`
- `stock_request_purchase` → `purchase_request`

### Stock Logistics
- `stock_request` → `stock_request_mrp`
- `stock_request` → `stock_request_purchase`
- `stock_picking_invoice_link` → `stock_picking_invoicing`

## Módulos Escodoo - Dependências

Os módulos Escodoo dependem dos módulos padrão que estendem:

| Módulo Escodoo | Estende |
|----------------|---------|
| egd_account_custom | account |
| egd_analytic_custom | analytic |
| egd_purchase_custom | purchase |
| egd_stock_custom | stock |
| egd_hr_timesheet_custom | hr_timesheet |
| egd_sale_blanket_order_custom | sale_blanket_order |
| egd_stock_picking_custom | stock_picking |
| l10n_br_* | l10n_br_fiscal + módulo específico |

## Recomendações

1. **Migração**: Sempre migrar `base` e `account` primeiro
2. **Ordem**: Base → Contabilidade → Estoque → Compras → Vendas → RH
3. **Localização BR**: Migrar por último (depende de tudo)
4. **Testes**: Verificar integrações após cada área migrada
