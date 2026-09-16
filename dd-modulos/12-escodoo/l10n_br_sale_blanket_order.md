# l10n_br_sale_blanket_order

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_sale_blanket_order |
| Nome Amigável | Ordem Abrangente de Venda Brasileira |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/l10n-brazil |

## Descrição

Integração entre ordem abrangente de venda e fiscal brasileiro.

## Dependencies

- l10n_br_fiscal
- sale_blanket_order

## Models

### sale.blanket.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| fiscal_document_id | Many2one | Documento fiscal |

## Views/Menus

- Extende views de sale.blanket.order

## Segurança

- Herda permissões dos módulos l10n_br_fiscal e sale_blanket_order

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
