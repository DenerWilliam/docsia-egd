# fleet

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | fleet |
| Nome Amigável | Frota |
| Autor | Odoo S.A. |
| Versão | 16.0.1.10 |
| Repositório | https://www.odoo.com/app/fleet |

## Descrição

Módulo base de gestão de frota. Permite cadastrar veículos, marcas, modelos e manutenção.

## Dependencies

- base
- mail

## Models

### fleet.vehicle
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do veículo |
| license_plate | Char | Placa |
| model_id | Many2one | Modelo |
| driver_id | Many2one | Motorista |
| state | Selection | Status |

### fleet.vehicle.model
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do modelo |
| brand_id | Many2one | Marca |

## Views/Menus

- **Menu**: Frota > Veículos
- **Views**: tree, form, kanban

## Segurança

- **Grupos**: fleet_group_manager

## Configuração

- Configurações > Frota

## Notas de Migração

- Odoo 14 → 16: Novos campos e widgets
