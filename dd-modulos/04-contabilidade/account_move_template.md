# account_move_template

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_move_template |
| Nome Amigável | Account Move Template |
| Autor | Agile Business Group, OCA |
| Versão | 16.0.1.0.3 |
| Repositório | https://github.com/OCA/account-financial-tools |

## Descrição

Templates de lançamentos contábeis.

## Dependências

- account

## Models

### account.move.template
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do template |
| line_ids | One2many | Linhas do template |

## Views/Menus

- **Menu**: Contabilidade > Configuração > Templates de Lançamento
- **Views**: tree, form

## Segurança

- **Grupos**: account.group_account_manager

## Configuração

- Configurações > Contabilidade > Templates

## Notas de Migração

- Migrado para v16 pelo OCA
