# l10n_br_sale

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_sale |
| Nome Amigável | Venda Brasileira |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Integração entre venda e fiscal brasileiro.

## Dependencies

- l10n_br_fiscal
- sale

## Models

### sale.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| fiscal_document_id | Many2one | Documento fiscal |

## Views/Menus

- Extende views de sale.order

## Segurança

- Herda permissões dos módulos l10n_br_fiscal e sale

## Configuração

- Configurações > Vendas > Fiscal

## Notas de Migração

- Migrado para v16 pelo OCA
