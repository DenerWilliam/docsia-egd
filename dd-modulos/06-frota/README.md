# Data Dictionary - Frota

## Módulos

| Módulo | Nome | Autor | Versão |
|--------|------|-------|--------|
| fleet | Frota | Odoo S.A. | 16.0.0.1 |
| account_fleet | Ponte de contabilidade/frota | Odoo S.A. | 16.0.1.0 |
| hr_fleet | Histórico de Frota | Odoo S.A. | 16.0.1.0 |
| fleet_vehicle_fuel_type_ethanol | Fleet Vehicle Fuel Type Ethanol | OCA | 16.0.1.0.0 |
| fleet_vehicle_inspection | Fleet Vehicle Inspection | OCA | 16.0.1.1.0 |
| fleet_vehicle_inspection_template | Fleet Vehicle Inspection Template | OCA | 16.0.2.0.0 |
| fleet_vehicle_purchase | Fleet Vehicle Purchase | OCA | 16.0.1.0.0 |
| fleet_vehicle_stock | Fleet Vehicle Stock | OCA | 16.0.1.1.0 |

## Dependências Principais

- `fleet` → `base`
- `account_fleet` → `fleet`, `account`
- `hr_fleet` → `fleet`, `hr`

## Modelos Principais

### fleet.vehicle
- Campo principal de veículos
- Integração com manutenção e combustão

### fleet.vehicle.log.contract
- Contratos de frota
- Seguros e manutenção

### fleet.vehicle.log.fuel
- Registros de combustível
- Controle de custos

## Notas

- Módulo `fleet` é a base para todos os outros módulos de frota
- Integração com módulos de contabilidade e RH
