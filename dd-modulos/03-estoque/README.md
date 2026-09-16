# Data Dictionary - Estoque

## Módulos

| Módulo | Nome | Autor | Versão |
|--------|------|-------|--------|
| stock | Inventário | Odoo S.A. | 16.0.1.1 |
| stock_account | WMS Contabilidade | Odoo S.A. | 16.0.1.1 |
| stock_analytic | Stock Analytic | OCA | 16.0.1.4.0 |
| stock_picking_analytic | Stock Picking Analytic | OCA | 16.0.1.0.1 |
| stock_picking_back2draft | Pickings back to draft | OCA | 16.0.1.0.0 |
| stock_picking_invoice_link | Stock Picking Invoice Link | OCA | 16.0.1.1.6 |
| stock_picking_invoicing | Stock Picking Invoicing | OCA | 16.0.1.0.4 |
| stock_request | Stock Request | OCA | 16.0.1.1.3 |
| stock_request_analytic | Stock Request Analytic | OCA | 16.0.1.0.0 |
| stock_request_mrp | Stock Request MRP | OCA | 16.0.1.0.2 |
| stock_request_picking_type | Stock Request Picking Type | OCA | 16.0.1.0.0 |
| stock_request_purchase | Stock Request Purchase | OCA | 16.0.1.0.3 |
| stock_request_purchase_request | Stock Request Purchase Request | OCA | 16.0.1.0.0 |

## Dependências Principais

- `stock` → `product`, `uom`
- `stock_account` → `stock`, `account`
- `stock_request` → `stock`

## Modelos Principais

### stock.picking
- Campo principal de transferências
- Integração com vendas e compras

### stock.move
- Movimentações de estoque
- Rastreamento de lotes e séries

### stock.quant
- Quantidades em estoque
- Validação de disponibilidade

## Notas

- Módulo `stock` é a base para todos os outros módulos de estoque
- Integração com módulos de vendas e compras
