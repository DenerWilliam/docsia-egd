# purchase_blanket_order

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_blanket_order |
| Nome Amigável | Purchase Blanket Orders |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.2.1.3 |
| Repositório | https://github.com/OCA/purchase-workflow |

## Descrição

Permite criar contratos de compra de longo prazo (Blanket Orders) com quantidades e preços definidos por período.

## Dependências

- purchase

## Modelos Principais

### purchase.blanket.order
| Campo | Tipo | Descrição |
|-------|------|-----------|
| partner_id | Many2one | Fornecedor |
| state | Selection | Status |
| line_ids | One2many | Linhas do contrato |
| date_start | Date | Data início |
| date_end | Date | Data fim |

### purchase.blanket.order.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| order_id | Many2one | Contrato |
| product_id | Many2one | Produto |
| quantity | Float | Quantidade total |
| quantity_received | Float | Quantidade recebida |
| quantity_invoiced | Float | Quantidade faturada |

## Views/Menus

- **Menu**: Compras > Contratos > Blanket Orders
- **Views**: tree, form

## Segurança

- Herda permissões do módulo purchase

## Configuração

- Configurações > Compras > Blanket Orders

## Notas de Migração

- Migrado para v16 pelo OCA
