# base_automation

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | base_automation |
| Nome Amigável | Automação |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/odoo |

## Descrição

Módulo de automações. Permite criar regras automáticas baseadas em eventos.

## Dependencies

- base

## Models

### base.automation
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da automação |
| model_id | Many2one | Modelo |
| trigger | Selection | Gatilho |

## Views/Menus

- **Menu**: Configurações > Automações
- **Views**: tree, form

## Segurança

- **Grupos**: base.group_system

## Configuração

- Configurações > Automações

## Notas de Migração

- Módulo padrão Odoo
