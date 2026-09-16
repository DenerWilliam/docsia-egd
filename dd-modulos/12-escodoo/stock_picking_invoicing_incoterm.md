# stock_picking_invoicing_incoterm

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_picking_invoicing_incoterm |
| Nome Amigável | Incoterm Faturamento |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/stock-addons |

## Descrição

Incoterm no faturamento de transferências.

## Dependencies

- stock_picking_invoicing
- account

## Models

### stock.picking (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| incoterm_id | Many2one | Incoterm |

## Views/Menus

- Extende views de stock.picking

## Segurança

- Herda permissões dos módulos stock_picking_invoicing e account

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
