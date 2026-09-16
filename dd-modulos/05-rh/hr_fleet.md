# hr_fleet

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_fleet |
| Nome Amigável | RH Frota |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/fleet |

## Descrição

Integração entre RH e Frota.

## Dependencies

- hr
- fleet

## Models

### hr.employee (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| vehicle_id | Many2one | Veículo |

## Views/Menus

- Extende views de hr.employee

## Segurança

- Herda permissões dos módulos hr e fleet

## Configuração

- Configurações > RH > Frota

## Notas de Migração

- Módulo padrão Odoo
