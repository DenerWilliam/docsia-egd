# sale_stock

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_stock |
| Nome Amigável | Gestão de Vendas e Armazéns |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/sales |

## Descrição

Integração entre vendas e estoque. Permite criar transferências automaticamente a partir de pedidos de venda.

## Dependências

- sale
- stock

## Modelos Principais

### sale.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| picking_ids | One2many | Transferências associadas |
| picking_state | Selection | Status da transferência |

### stock.picking (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| sale_id | Many2one | Pedido de venda associado |

## Views/Menus

- Extende views de sale.order e stock.picking

## Segurança

- Herda permissões dos módulos sale e stock

## Configuração

- Configurações > Vendas > Estoque
- Tipos de operação de transferência

## Notas de Migração

- Odoo 14 → 16: Batch transfer automático
