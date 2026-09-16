# hr_timesheet_sheet

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_timesheet_sheet |
| Nome Amigável | hr_timesheet_sheet |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr-timesheet |

## Descrição

Folhas de ponto consolidadas.

## Dependencies

- hr_timesheet

## Models

### hr.timesheet.sheet
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da folha |
| employee_id | Many2one | Funcionário |
| date_start | Date | Data início |
| date_end | Date | Data fim |
| state | Selection | Status |

## Views/Menus

- **Menu**: RH > Folhas de Ponto
- **Views**: tree, form

## Segurança

- **Grupos**: hr.group_hr_manager

## Configuração

- Configurações > RH > Folhas de Ponto

## Notas de Migração

- Migrado para v16 pelo OCA
