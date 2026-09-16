# Data Dictionary - Manufacturing

## Módulos

| Módulo | Nome | Autor | Versão |
|--------|------|-------|--------|
| mrp | Manufacturing | Odoo S.A. | 16.0.2.0 |
| mrp_account | Accounting - MRP | Odoo S.A. | 16.0.1.0 |
| mrp_product_expiry | Manufacturing Expiry | Odoo S.A. | 16.0.1.0 |
| quality_control_mrp_oca | MRP extension for quality control (OCA) | OCA | 16.0.1.2.0 |
| quality_control_oca | Quality Control OCA | OCA | 16.0.1.8.0 |
| quality_control_stock_oca | Quality control - Stock (OCA) | OCA | 16.0.1.4.0 |

## Dependências Principais

- `mrp` → `stock`, `product`
- `mrp_account` → `mrp`, `account`
- `quality_control_mrp_oca` → `mrp`, `quality_control_oca`

## Modelos Principais

### mrp.production
- Campo principal de ordens de produção
- Integração com estoque e compras

### mrp.bom
- Lista de materiais (BOM)
- Cálculo de custos

### mrp.workcenter
- Centros de trabalho
- Capacidade e agendamento

## Notas

- Módulo `mrp` é a base para todos os outros módulos de fabricação
- Integração com módulos de estoque e contabilidade
