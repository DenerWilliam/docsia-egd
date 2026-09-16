# purchase_stock

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_stock |
| Nome Amigável | Purchase Stock |
| Autor | Odoo S.A. |
| Versão | 16.0.1.2 |
| Repositório | https://www.odoo.com/app/purchase |

## Descrição

Integração entre compras e estoque. Permite criar transferências automaticamente a partir de ordens de compra.

## Dependências

- purchase
- stock

## Modelos Principais

### purchase.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| picking_ids | One2many | Transferências associadas |

### stock.picking (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| purchase_id | Many2one | Ordem de compra associada |

## Views/Menus

- Extende views de purchase.order e stock.picking

## Segurança

- Herda permissões dos módulos purchase e stock

## Configuração

- Configurações > Compras > Estoque

## Notas de Migração

- Módulo padrão Odoo
