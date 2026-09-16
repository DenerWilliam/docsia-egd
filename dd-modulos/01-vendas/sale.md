# sale - Vendas

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale |
| Nome Amigável | Vendas |
| Autor | Odoo S.A. |
| Versão | 16.0.1.2 |
| Repositório | https://www.odoo.com/app/sales |
| Licença | LGPL-3 |

## Descrição

Módulo base para gestão de vendas. Permite criar ordens de venda, gerenciar clientes, calcular impostos e integrar com estoque.

## Dependências

- `account`
- `product`
- `uom`

## Modelos Principais

### sale.order
- Ordens de venda
- Integração com estoque e contabilidade

#### Campos Principais
| Campo | Tipo | Descrição |
|-------|------|-----------|
| partner_id | Many2one | Cliente |
| order_line | One2many | Linhas do pedido |
| state | Selection | Estado do pedido |
| date_order | Datetime | Data do pedido |
| currency_id | Many2one | Moeda |

### sale.order.line
- Linhas de pedido de venda
- Cálculo automático de impostos

#### Campos Principais
| Campo | Tipo | Descrição |
|-------|------|-----------|
| product_id | Many2one | Produto |
| name | Char | Descrição |
| product_uom_qty | Float | Quantidade |
| price_unit | Float | Preço unitário |
| tax_id | Many2many | Impostos |

## Views/Menus

- **Vendas**: Menu principal do módulo de vendas
- **Ordens**: Gestão de ordens de venda
- **Clientes**: Gestão de clientes
- **Produtos**: Gestão de produtos

## Segurança

- Grupos de acesso: `sale.group_sale_manager`, `sale.group_sale_user`
- Permissões por modelo configuradas em `ir.model.access.csv`

## Configuração

1. Instalar o módulo `sale`
2. Configurar equipes de venda
3. Configurar listas de preços
4. Configurar impostos

## Notas de Migração

- v14 → v15: Compatível
- v15 → v16: Compatível
- v16 → v17: Requer ajustes de views
- v17 → v18: Compatível
- v18 → v19: Compatível com AI CRM
