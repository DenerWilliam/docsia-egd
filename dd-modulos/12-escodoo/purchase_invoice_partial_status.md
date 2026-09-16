# purchase_invoice_partial_status

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_invoice_partial_status |
| Nome Amigável | Status Parcial Fatura Compra |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/purchase-addons |

## Descrição

Status parcial de faturamento em pedidos de compra.

## Dependencies

- purchase

## Models

### purchase.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| invoice_status | Selection | Status faturamento |

## Views/Menus

- Extende views de purchase.order

## Segurança

- Herda permissões do módulo purchase

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
