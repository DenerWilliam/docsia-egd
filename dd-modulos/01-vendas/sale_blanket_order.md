# sale_blanket_order

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_blanket_order |
| Nome Amigável | Sale Blanket Orders |
| Autor | Acsone SA/NV, OCA |
| Versão | 16.0.2.3.1 |
| Repositório | https://github.com/OCA/sale-workflow |

## Descrição

Permite criar contratos de venda de longo prazo (Blanket Orders) com quantidades e preços definidos por período.

## Dependências

- sale
- account

## Modelos Principais

### sale.blanket.order
| Campo | Tipo | Descrição |
|-------|------|-----------|
| partner_id | Many2one | Cliente |
| state | Selection | Status |
| line_ids | One2many | Linhas do contrato |
| date_start | Date | Data início |
| date_end | Date | Data fim |

### sale.blanket.order.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| order_id | Many2one | Contrato |
| product_id | Many2one | Produto |
| quantity | Float | Quantidade total |
| quantity_delivered | Float | Quantidade entregue |
| quantity_invoiced | Float | Quantidade faturada |

## Views/Menus

- **Menu**: Vendas > Contratos > Blanket Orders
- **Views**: tree, form

## Segurança

- Herda permissões do módulo sale

## Configuração

- Configurações > Vendas > Blanket Orders

## Notas de Migração

- Migrado para v16 pelo OCA
