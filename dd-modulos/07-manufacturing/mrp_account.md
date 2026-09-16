# mrp_account

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | mrp_account |
| Nome Amigável | Manufatura Contabilidade |
| Autor | Odoo S.A. |
| Versão | 16.0.1.1 |
| Repositório | https://www.odoo.com/app/manufacturing |

## Descrição

Integração entre manufatura e contabilidade.

## Dependencies

- mrp
- account

## Models

### mrp.production (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| account_move_id | Many2one | Lançamento contábil |

## Views/Menus

- Extende views de mrp.production

## Segurança

- Herda permissões dos módulos mrp e account

## Configuração

- Configurações > Manufatura > Contabilidade

## Notas de Migração

- Módulo padrão Odoo
