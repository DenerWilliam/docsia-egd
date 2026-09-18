# hr - Funcionários

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr |
| Nome Amigável | Funcionários |
| Autor | Odoo S.A. |
| Versão | 16.0.1.1 |
| Repositório | https://www.odoo.com/app/employees |
| Licença | LGPL-3 |

## Descrição

Módulo base para gestão de recursos humanos. Permite cadastrar funcionários, gerenciar contratos, controlar ponto e gerar relatórios de RH.

## Dependências

- `base`

## Modelos Principais

### hr.employee
- Funcionários
- Integração com contratos e ponto

#### Campos Principais
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do funcionário |
| job_id | Many2one | Cargo |
| department_id | Many2one | Departamento |
| parent_id | Many2one | Gestor |
| coach_id | Many2one | Mentor |

### hr.contract
- Contratos de trabalho
- Cálculo de salários

#### Campos Principais
| Campo | Tipo | Descrição |
|-------|------|-----------|
| employee_id | Many2one | Funcionário |
| name | Char | Nome do contrato |
| wage | Float | Salário |
| state | Selection | Estado do contrato |
| date_start | Date | Data de início |

### hr.department
- Departamentos
- Estrutura organizacional

#### Campos Principais
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do departamento |
| parent_id | Many2one | Departamento pai |
| manager_id | Many2one | Gestor |

## Views/Menus

- **RH**: Menu principal do módulo de RH
- **Funcionários**: Gestão de funcionários
- **Contratos**: Gestão de contratos
- **Departamentos**: Gestão de departamentos

## Segurança

- Grupos de acesso: `hr.group_hr_manager`, `hr.group_hr_user`
- Permissões por modelo configuradas em `ir.model.access.csv`

## Configuração

1. Instalar o módulo `hr`
2. Configurar departamentos
3. Cadastrar cargos
4. Cadastrar funcionários

## Notas de Migração

- v14 → v15: Compatível
- v15 → v16: Compatível
