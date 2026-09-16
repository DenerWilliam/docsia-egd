# hr_personal_equipment_stock

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_personal_equipment_stock |
| Nome Amigável | Estoque de Equipamento Pessoal |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr |

## Descrição

Integração entre equipamento pessoal e estoque.

## Dependencies

- hr_personal_equipment_request
- stock

## Models

### hr.personal.equipment.request (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| picking_id | Many2one | Transferência associada |

## Views/Menus

- Extende views de hr.personal.equipment.request

## Segurança

- Herda permissões dos módulos hr_personal_equipment_request e stock

## Configuração

- Configurações > RH > Equipamentos

## Notas de Migração

- Migrado para v16 pelo OCA
