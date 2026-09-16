# hr_contract

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_contract |
| Nome Amigável | Contratos |
| Autor | Odoo S.A. |
| Versão | 16.0.2.1 |
| Repositório | https://www.odoo.com/app/employees |

## Descrição

Gestão de contratos de trabalho.

## Dependencies

- hr

## Models

### hr.contract
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do contrato |
| employee_id | Many2one | Funcionário |
| date_start | Date | Data de início |
| date_end | Date | Data de término |
| wage | Monetário | Salário |

## Views/Menus

- **Menu**: RH > Contratos
- **Views**: tree, form

## Segurança

- **Grupos**: hr.group_hr_manager

## Configuração

- Configurações > RH > Contratos

## Notas de Migração

- Módulo padrão Odoo
