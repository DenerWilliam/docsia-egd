# hr_employee_ppe

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_employee_ppe |
| Nome Amigável | EPI do Funcionário |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr |

## Descrição

Gestão de Equipamentos de Proteção Individual.

## Dependencies

- hr

## Models

### hr.employee (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| ppe_ids | One2many | EPIs |

### hr.employee.ppe
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do EPI |
| employee_id | Many2one | Funcionário |
| date_start | Date | Data de início |
| date_end | Date | Data de término |

## Views/Menus

- Extende views de hr.employee

## Segurança

- Herda permissões do módulo hr

## Configuração

- Configurações > RH > EPIs

## Notas de Migração

- Migrado para v16 pelo OCA
