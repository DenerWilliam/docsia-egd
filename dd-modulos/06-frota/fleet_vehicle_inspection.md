# fleet_vehicle_inspection

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | fleet_vehicle_inspection |
| Nome Amigável | Inspeção de Veículos |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/fleet-addons |

## Descrição

Gestão de inspeções de veículos.

## Dependencies

- fleet

## Models

### fleet.vehicle.inspection
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Número da inspeção |
| vehicle_id | Many2one | Veículo |
| date | Date | Data da inspeção |
| state | Selection | Status |

### fleet.vehicle.inspection.item
| Campo | Tipo | Descrição |
|-------|------|-----------|
| inspection_id | Many2one | Inspeção |
| name | Char | Item inspecionado |
| state | Selection | Resultado |

## Views/Menus

- **Menu**: Frota > Inspeções
- **Views**: tree, form

## Segurança

- Herda permissões do módulo fleet

## Configuração

- Configurações > Frota > Inspeções

## Notas de Migração

- Customização Escodoo
