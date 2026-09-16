# l10n_br_stock

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_stock |
| Nome Amigável | Estoque Brasileiro |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Integração entre estoque e fiscal brasileiro.

## Dependencies

- l10n_br_fiscal
- stock

## Models

### stock.picking (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| fiscal_document_id | Many2one | Documento fiscal |

## Views/Menus

- Extende views de stock.picking

## Segurança

- Herda permissões dos módulos l10n_br_fiscal e stock

## Configuração

- Configurações > Estoque > Fiscal

## Notas de Migração

- Migrado para v16 pelo OCA
