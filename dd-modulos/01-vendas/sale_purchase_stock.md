# sale_purchase_stock

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_purchase_stock |
| Nome Amigável | PSE Venda <-> Compra |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/ |

## Descrição

Ponte de estoque entre vendas e compras. Sincroniza movimentações de estoque entre pedidos de venda e compra.

## Dependências

- sale_stock
- purchase_stock

## Modelos Principais

### stock.move (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| purchase_line_id | Many2one | Linha de compra associada |

## Views/Menus

- Extende views de stock.move

## Segurança

- Herda permissões dos módulos de estoque

## Configuração

- Configurações > Estoque > Compras

## Notas de Migração

- Módulo padrão Odoo
