# stock_picking_invoice_link

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_picking_invoice_link |
| Nome Amigável | Stock Picking Invoice Link |
| Autor | Agile Business Group, OCA |
| Versão | 16.0.1.1.6 |
| Repositório | https://github.com/OCA/stock-logistics-workflow |

## Descrição

Cria vínculo entre transferências e faturas.

## Dependências

- stock
- account

## Modelos Principais

### stock.picking (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| invoice_ids | One2many | Faturas associadas |

### account.move (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| picking_ids | Many2many | Transferências associadas |

## Views/Menus

- Extende views de stock.picking e account.move

## Segurança

- Herda permissões dos módulos stock e account

## Configuração

- Sem configuração adicional

## Notas de Migração

- Migrado para v16 pelo OCA
