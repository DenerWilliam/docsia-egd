# helpdesk_mgmt_timesheet_stock

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | helpdesk_mgmt_timesheet_stock |
| Nome Amigável | Helpdesk Timesheet Estoque |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/helpdesk-addons |

## Descrição

Integração entre helpdesk, timesheet e estoque.

## Dependencies

- helpdesk_mgmt
- hr_timesheet
- stock

## Models

### helpdesk.ticket (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| timesheet_ids | One2many | Timesheets |
| picking_ids | One2many | Transferências |

## Views/Menus

- Extende views de helpdesk.ticket

## Segurança

- Herda permissões dos módulos helpdesk_mgmt, hr_timesheet e stock

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
