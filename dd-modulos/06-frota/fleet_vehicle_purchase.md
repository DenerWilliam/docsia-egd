# fleet_vehicle_purchase

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | fleet_vehicle_purchase |
| Nome Amigável | Compra de Veículos |
| Autor | KMEE, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/fleet |

## Descrição

Integração entre frota e compras.

## Dependencies

- fleet
- purchase

## Models

### fleet.vehicle (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| purchase_order_id | Many2one | Ordem de compra |

## Views/Menus

- Extende views de fleet.vehicle

## Segurança

- Herda permissões dos módulos fleet e purchase

## Configuração

- Configurações > Frota > Compras

## Notas de Migração

- Migrado para v16 pelo OCA
