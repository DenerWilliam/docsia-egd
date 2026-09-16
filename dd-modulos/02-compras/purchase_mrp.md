# purchase_mrp

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_mrp |
| Nome Amigável | Purchase and MRP Management |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/purchase |

## Descrição

Integração entre compras e manufatura.

## Dependências

- purchase
- mrp

## Modelos Principais

### purchase.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| mrp_production_ids | One2many | Ordens de produção associadas |

## Views/Menus

- Extende views de purchase.order

## Segurança

- Herda permissões dos módulos purchase e mrp

## Configuração

- Configurações > Compras > Produção

## Notas de Migração

- Módulo padrão Odoo
