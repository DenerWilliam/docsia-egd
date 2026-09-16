# web

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | web |
| Nome Amigável | Web |
| Autor | Odoo S.A. |
| Versão | 16.0.1.3 |
| Repositório | https://www.odoo.com/app/odoo |

## Descrição

Módulo base da interface web do Odoo. Fornece widgets, views e funcionalidades de UI.

## Dependencies

- base

## Models

### ir.actions.act_window
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da ação |
| res_model | Char | Modelo |

### ir.ui.view
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da view |
| type | Selection | Tipo |

## Views/Menus

- Interface web principal

## Segurança

- Herda permissões do módulo base

## Configuração

- Sem configuração adicional

## Notas de Migração

- Módulo base da UI
