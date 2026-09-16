# hr_personal_equipment_request

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_personal_equipment_request |
| Nome Amigável | Solicitação de Equipamento Pessoal |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr |

## Descrição

Solicitação de equipamentos pessoais.

## Dependencies

- hr

## Models

### hr.personal.equipment.request
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Descrição |
| employee_id | Many2one | Funcionário |
| state | Selection | Status |

## Views/Menus

- **Menu**: RH > Solicitações de Equipamento
- **Views**: tree, form

## Segurança

- Herda permissões do módulo hr

## Configuração

- Configurações > RH > Equipamentos

## Notas de Migração

- Migrado para v16 pelo OCA
