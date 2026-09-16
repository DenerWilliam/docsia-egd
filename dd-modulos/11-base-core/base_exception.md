# base_exception

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | base_exception |
| Nome Amigável | Exceções Base |
| Autor | Akretion, OCA |
| Versão | 16.0.1.1.2 |
| Repositório | https://github.com/OCA/server-ux |

## Descrição

Framework de exceções para validação de regras de negócio.

## Dependencies

- base

## Models

### base.exception
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da exceção |
| rule_ids | One2many | Regras |

### base.exception.rule
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da regra |
| code | Text | Código |

## Views/Menus

- **Menu**: Configurações > Exceções
- **Views**: tree, form

## Segurança

- **Grupos**: base.group_system

## Configuração

- Configurações > Exceções

## Notas de Migração

- Migrado para v16 pelo OCA
