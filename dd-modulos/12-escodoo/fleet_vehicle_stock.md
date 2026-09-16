# fleet_vehicle_stock

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | fleet_vehicle_stock |
| Nome Amigável | Estoque de Veículos |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/fleet-addons |

## Descrição

Integração entre frota e estoque.

## Dependencies

- fleet
- stock

## Models

### fleet.vehicle (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| stock_location_id | Many2one | Localização de estoque |

## Views/Menus

- Extende views de fleet.vehicle

## Segurança

- Herda permissões dos módulos fleet e stock

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
