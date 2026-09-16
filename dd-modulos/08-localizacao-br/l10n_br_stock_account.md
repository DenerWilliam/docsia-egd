# l10n_br_stock_account

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_stock_account |
| Nome Amigável | Estoque Contabilidade Brasileiro |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Integração entre estoque, contabilidade e fiscal brasileiro.

## Dependencies

- l10n_br_stock
- l10n_br_account

## Models

### stock.move (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| fiscal_document_line_id | Many2one | Linha do documento fiscal |

## Views/Menus

- Extende views de stock.move

## Segurança

- Herda permissões dos módulos l10n_br_stock e l10n_br_account

## Configuração

- Sem configuração adicional

## Notas de Migração

- Migrado para v16 pelo OCA
