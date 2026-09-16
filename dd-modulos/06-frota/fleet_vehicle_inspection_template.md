# fleet_vehicle_inspection_template

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | fleet_vehicle_inspection_template |
| Nome Amigável | Modelo de Inspeção de Veículos |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/fleet-addons |

## Descrição

Modelos de inspeção de veículos.

## Dependencies

- fleet_vehicle_inspection

## Models

### fleet.vehicle.inspection.template
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do modelo |
| line_ids | One2many | Itens do modelo |

### fleet.vehicle.inspection.template.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| template_id | Many2one | Modelo |
| name | Char | Item |

## Views/Menus

- **Menu**: Frota > Modelos de Inspeção
- **Views**: tree, form

## Segurança

- Herda permissões do módulo fleet_vehicle_inspection

## Configuração

- Configurações > Frota > Modelos de Inspeção

## Notas de Migração

- Customização Escodoo
