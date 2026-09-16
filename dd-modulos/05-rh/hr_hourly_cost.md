# hr_hourly_cost

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_hourly_cost |
| Nome Amigável | HR Hourly Cost |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr |

## Descrição

Custo horário do funcionário.

## Dependencies

- hr_contract

## Models

### hr.contract (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| hourly_cost | Monetário | Custo por hora |

## Views/Menus

- Extende views de hr.contract

## Segurança

- Herda permissões do módulo hr_contract

## Configuração

- Configurações > RH > Custo Horário

## Notas de Migração

- Migrado para v16 pelo OCA
