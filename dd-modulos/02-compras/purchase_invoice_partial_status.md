# purchase_invoice_partial_status

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_invoice_partial_status |
| Nome Amigável | Purchase Invoice Status Partial |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/purchase-addons |

## Descrição

Permite controlar o status de faturamento parcial em ordens de compra.

## Dependências

- purchase
- account

## Modelos Principais

### purchase.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| invoice_status | Selection | Status de faturamento (partial, fully) |

## Views/Menus

- Extende views de purchase.order

## Segurança

- Herda permissões do módulo purchase

## Configuração

- Configurações > Compras > Faturamento

## Notas de Migração

- Customização Escodoo
