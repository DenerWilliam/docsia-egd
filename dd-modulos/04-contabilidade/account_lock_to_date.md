# account_lock_to_date

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_lock_to_date |
| Nome Amigável | Account Lock To Date |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/account-financial-tools |

## Descrição

Permite bloquear lançamentos contábeis até uma data específica.

## Dependências

- account

## Models

### account.move (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| - | - | Bloqueio até data |

## Views/Menus

- Extende views de account.move

## Segurança

- Herda permissões do módulo account

## Configuração

- Configurações > Contabilidade > Bloqueio

## Notas de Migração

- Migrado para v16 pelo OCA
