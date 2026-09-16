# Data Dictionary - Compras

## Módulos

| Módulo | Nome | Autor | Versão |
|--------|------|-------|--------|
| purchase | Compras | Odoo S.A. | 16.0.1.2 |
| purchase_stock | Purchase Stock | Odoo S.A. | 16.0.1.2 |
| purchase_requisition | Acordos de Compra | Odoo S.A. | 16.0.0.1 |
| purchase_requisition_stock | Compra Requisição Estoque | Odoo S.A. | 16.0.1.2 |
| purchase_request | Purchase Request | OCA | 16.0.2.4.3 |
| purchase_blanket_order | Purchase Blanket Orders | OCA | 16.0.2.1.3 |
| purchase_default_terms_conditions | Purchase Default Terms Conditions | OCA | 16.0.1.0.3 |
| purchase_invoice_partial_status | Purchase Invoice Status Partial | OCA | 16.0.1.0.0 |
| purchase_mrp | Purchase and MRP Management | Odoo S.A. | 16.0.1.0 |
| purchase_order_line_menu | Purchase Order Line Menu | OCA | 16.0.2.1.2 |
| purchase_quotation_report_tax_removal | Purchase Quotation Report Tax Removal | Escodoo | 16.0.1.0.0 |
| purchase_stock_tier_validation | Purchase Stock Tier Validation | OCA | 16.0.1.0.0 |
| purchase_tier_validation | Purchase Tier Validation | OCA | 16.0.1.1.1 |
| purchase_work_acceptance | Purchase Work Acceptance | OCA | 16.0.1.0.0 |
| purchase_work_acceptance_evaluation | Purchase Work Acceptance Evaluation | OCA | 16.0.1.0.0 |

## Dependências Principais

- `purchase` → `account`, `product`
- `purchase_stock` → `purchase`, `stock`
- `purchase_request` → `purchase`

## Modelos Principais

### purchase.order
- Campo principal de ordens de compra
- Integração com estoque e contabilidade

### purchase.order.line
- Linhas de pedido de compra
- Cálculo automático de impostos

## Notas

- Módulo `purchase` é a base para todos os outros módulos de compra
- Integração com módulos de estoque e contabilidade
