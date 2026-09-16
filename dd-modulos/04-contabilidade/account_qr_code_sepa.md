# account_qr_code_sepa

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_qr_code_sepa |
| Nome Amigável | account_qr_code_sepa |
| Autor | Odoo S.A. |
| Versão | 16.0.0.1 |
| Repositório | https://www.odoo.com/app/invoicing |

## Descrição

Códigos QR para pagamentos SEPA.

## DependENCIES

- account_payment_sepa
- qr_code

## Models

### account.move (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| qr_code | Binary | Código QR SEPA |

## Views/Menus

- Extende views de account.move

## Segurança

- Herda permissões do módulo account

## Configuração

- Configurações > Contabilidade > SEPA

## Notas de Migração

- Módulo padrão Odoo
