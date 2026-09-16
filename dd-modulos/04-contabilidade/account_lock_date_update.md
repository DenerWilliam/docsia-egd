# account_lock_date_update

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_lock_date_update |
| Nome Amigável | Account Lock Date Update |
| Autor | ACSONE SA/NV, OCA |
| Versão | 16.0.1.0.1 |
| Repositório | https://github.com/OCA/account-financial-tools |

## Descrição

Permite atualizar datas de bloqueio contábil.

## Dependências

- account

## Models

### account.period (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| - | - | Atualização de data de bloqueio |

## Views/Menus

- Extende views de account.period

## Segurança

- Herda permissões do módulo account

## Configuração

- Configurações > Contabilidade > Datas de Bloqueio

## Notas de Migração

- Migrado para v16 pelo OCA
