# hr_employee_relative

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_employee_relative |
| Nome Amigável | Parentesco do Funcionário |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr |

## Descrição

Gestão de parentescos de funcionários.

## Dependencies

- hr

## Models

### hr.employee (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| relative_ids | One2many | Parentescos |

### hr.employee.relative
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do parente |
| employee_id | Many2one | Funcionário |
| relationship | Selection | Parentesco |

## Views/Menus

- Extende views de hr.employee

## Segurança

- Herda permissões do módulo hr

## Configuração

- Configurações > RH > Parentescos

## Notas de Migração

- Migrado para v16 pelo OCA
