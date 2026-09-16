# account_fleet

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_fleet |
| Nome Amigável | Ponte de contabilidade/frota |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/fleet |

## Descrição

Integração entre contabilidade e frota.

## Dependências

- account
- fleet

## Modelos Principais

### account.move (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| vehicle_id | Many2one | Veículo associado |

## Views/Menus

- Extende views de account.move

## Segurança

- Herda permissões dos módulos account e fleet

## Configuração

- Configurações > Contabilidade > Frota

## Notas de Migração

- Módulo padrão Odoo
