# Data Dictionary - Vendas

## Módulos

| Módulo | Nome | Autor | Versão |
|--------|------|-------|--------|
| sale | Vendas | Odoo S.A. | 16.0.1.2 |
| sale_management | Vendas | Odoo S.A. | 16.0.1.0 |
| sale_blanket_order | Sale Blanket Orders | OCA | 16.0.2.3.1 |
| sale_stock | Gestão de Vendas e Armazéns | Odoo S.A. | 16.0.1.0 |
| sale_timesheet | Registo de Horas das Vendas | Odoo S.A. | 16.0.1.0 |
| sale_expense | Despesas de Vendas | Odoo S.A. | 16.0.1.0 |
| sale_mrp | Sales and MRP Management | Odoo S.A. | 16.0.1.0 |
| sale_project | Vendas - Projeto | Odoo S.A. | 16.0.1.0 |
| sale_purchase | Venda Compra | Odoo S.A. | 16.0.1.0 |
| sale_purchase_stock | PSE Venda ↔ Compra | Odoo S.A. | 16.0.1.0 |
| sale_stock_picking_invoicing | Sales Stock Picking Invocing | OCA | 16.0.1.0.1 |
| sale_analytic_restrictions | Sale Analytic Restrictions | Escodoo | 16.0.1.0.0 |
| sales_team | Equipas de Vendas | Odoo S.A. | 16.0.1.1 |

## Dependências Principais

- `sale` → `account`, `product`, `uom`
- `sale_stock` → `sale`, `stock`
- `sale_timesheet` → `sale`, `hr_timesheet`

## Modelos Principais

### sale.order
- Campo principal de ordens de venda
- Integração com estoque e contabilidade

### sale.order.line
- Linhas de pedido de venda
- Cálculo automático de impostos

## Notas

- Módulo `sale` é a base para todos os outros módulos de venda
- `sale_management` é a versão Enterprise do módulo `sale`
