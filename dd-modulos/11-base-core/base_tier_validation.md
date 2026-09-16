# base_tier_validation

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | base_tier_validation |
| Nome Amigável | Validação de Múltiplos Níveis |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.1.2 |
| Repositório | https://github.com/OCA/server-ux |

## Descrição

Framework de validação com múltiplos níveis de aprovação.

## Dependencies

- base

## Models

### tier.validation
| Campo | Tipo | Descrição |
|-------|------|-----------|
| review_ids | One2many | Validações |
| state | Selection | Status |

## Views/Menus

- **Menu**: Configurações > Validações
- **Views**: tree, form

## Segurança

- **Grupos**: base.group_system

## Configuração

- Configurações > Validações

## Notas de Migração

- Migrado para v16 pelo OCA
