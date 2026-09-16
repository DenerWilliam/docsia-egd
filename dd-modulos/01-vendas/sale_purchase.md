# sale_purchase

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_purchase |
| Nome Amigável | Venda Compra |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/ |

## Descrição

Integração entre vendas e compras. Permite criar ordens de compra automaticamente a partir de pedidos de venda.

## Dependências

- sale
- purchase

## Modelos Principais

### sale.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| purchase_order_ids | One2many | Ordens de compra associadas |

## Views/Menus

- Extende views de sale.order

## Segurança

- Herda permissões dos módulos sale e purchase

## Configuração

- Configurações > Vendas > Compras

## Notas de Migração

- Módulo padrão Odoo
