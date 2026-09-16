# account_statement_base

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_statement_base |
| Nome Amigável | Account Bank Statement Reopen Skip Undo Reconciliation |
| Autor | Akretion, OCA |
| Versão | 16.0.1.15.0 |
| Repositório | https://github.com/OCA/account-reconcile |

## Descrição

Base para extratos bancários, pulando desfazer conciliação.

## DependENCIES

- account

## Models

### account.bank.statement (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| - | - | Pular desfazer conciliação |

## Views/Menus

- Extende views de account.bank.statement

## Segurança

- Herda permissões do módulo account

## Configuração

- Sem configuração adicional

## Notas de Migração

- Migrado para v16 pelo OCA
