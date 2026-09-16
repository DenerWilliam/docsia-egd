# l10n_br_purchase_requisition

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_purchase_requisition |
| Nome Amigável | Requisição de Compra Brasileira |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/l10n-brazil |

## Descrição

Integração entre requisão de compra e fiscal brasileiro.

## Dependencies

- l10n_br_fiscal
- purchase_requisition

## Models

### purchase.requisition (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| fiscal_document_id | Many2one | Documento fiscal |

## Views/Menus

- Extende views de purchase.requisition

## Segurança

- Herda permissões dos módulos l10n_br_fiscal e purchase_requisition

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
