# purchase_requisition_stock

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_requisition_stock |
| Nome Amigável | Compra Requisição Estoque |
| Autor | Odoo S.A. |
| Versão | 16.0.1.2 |
| Repositório | https://www.odoo.com/app/purchase |

## Descrição

Integração entre requisições de compra e estoque.

## Dependências

- purchase_requisition
- stock

## Modelos Principais

### purchase.requisition (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| picking_ids | One2many | Transferências associadas |

## Views/Menus

- Extende views de purchase.requisition

## Segurança

- Herda permissões dos módulos purchase_requisition e stock

## Configuração

- Configurações > Compras > Estoque

## Notas de Migração

- Módulo padrão Odoo
