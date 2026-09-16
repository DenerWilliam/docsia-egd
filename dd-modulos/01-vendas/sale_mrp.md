# sale_mrp

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_mrp |
| Nome Amigável | Sales and MRP Management |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/sales |

## Descrição

Integração entre vendas e manufatura. Permite criar ordens de produção automaticamente a partir de pedidos de venda.

## Dependências

- sale
- mrp

## Modelos Principais

### sale.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| mrp_production_ids | One2many | Ordens de produção associadas |

## Views/Menus

- Extende views de sale.order

## Segurança

- Herda permissões dos módulos sale e mrp

## Configuração

- Configurações > Vendas > Produção

## Notas de Migração

- Módulo padrão Odoo
