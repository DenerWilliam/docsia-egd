# hr_holidays_public

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_holidays_public |
| Nome Amigável | Feriados Públicos |
| Autor | OCA |
| Versão | 16.0.1.0.1 |
| Repositório | https://github.com/OCA/hr |

## Descrição

Permite gerenciar feriados públicos.

## Dependencies

- hr_holidays

## Models

### hr.holidays.public
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do feriado |
| date | Date | Data |
| line_ids | One2many | Feriados por país |

## Views/Menus

- **Menu**: RH > Configuração > Feriados Públicos
- **Views**: tree, form, calendar

## Segurança

- **Grupos**: hr.group_hr_manager

## Configuração

- Configurações > RH > Feriados Públicos

## Notas de Migração

- Migrado para v16 pelo OCA
