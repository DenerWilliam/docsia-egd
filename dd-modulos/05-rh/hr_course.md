# hr_course

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_course |
| Nome Amigável | hr_course |
| Autor | Inverso GmbH, OCA |
| Versão | 16.0.1.1.0 |
| Repositório | https://github.com/OCA/hr |

## Descrição

Gestão de cursos e treinamentos.

## Dependencies

- hr

## Models

### hr.course
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do curso |
| description | Text | Descrição |

### hr.course.attendant
| Campo | Tipo | Descrição |
|-------|------|-----------|
| course_id | Many2one | Curso |
| employee_id | Many2one | Funcionário |

## Views/Menus

- **Menu**: RH > Cursos
- **Views**: tree, form

## Segurança

- **Grupos**: hr.group_hr_manager

## Configuração

- Configurações > RH > Cursos

## Notas de Migração

- Migrado para v16 pelo OCA
