# l10n_br_account_payment_order

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_account_payment_order |
| Nome Amigável | Ordem de Pagamento Brasileira |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Ordem de pagamento brasileira (CNAB).

## Dependencies

- l10n_br_cnab_structure
- account_payment_order

## Models

### account.payment.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| cnab_structure_id | Many2one | Estrutura CNAB |

## Views/Menus

- Extende views de account.payment.order

## Segurança

- Herda permissões dos módulos l10n_br_cnab_structure e account_payment_order

## Configuração

- Configurações > Contabilidade > Ordens de Pagamento

## Notas de Migração

- Migrado para v16 pelo OCA
