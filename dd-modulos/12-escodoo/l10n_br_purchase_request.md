# l10n_br_purchase_request

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_purchase_request |
| Nome Amigável | Requisição de Compra Brasileira |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/l10n-brazil |

## Descrição

Integração entre requisição de compra e fiscal brasileiro.

## Dependencies

- l10n_br_fiscal
- purchase_request

## Models

### purchase.request (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| fiscal_document_id | Many2one | Documento fiscal |

## Views/Menus

- Extende views de purchase.request

## Segurança

- Herda permissões dos módulos l10n_br_fiscal e purchase_request

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
