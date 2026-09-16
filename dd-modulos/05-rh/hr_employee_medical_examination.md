# hr_employee_medical_examination

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_employee_medical_examination |
| Nome Amigável | Exame Médico do Funcionário |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr |

## Descrição

Gestão de exames médicos de funcionários.

## Dependencies

- hr

## Models

### hr.employee (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| medical_examination_ids | One2many | Exames médicos |

### hr.employee.medical.examination
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do exame |
| employee_id | Many2one | Funcionário |
| date | Date | Data do exame |

## Views/Menus

- Extende views de hr.employee

## Segurança

- Herda permissões do módulo hr

## Configuração

- Configurações > RH > Exames Médicos

## Notas de Migração

- Migrado para v16 pelo OCA
