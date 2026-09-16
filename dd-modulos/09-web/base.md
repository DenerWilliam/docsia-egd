# base

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | base |
| Nome Amigável | Base |
| Autor | Odoo S.A. |
| Versão | 16.0.1.4 |
| Repositório | https://www.odoo.com/app/odoo |

## Descrição

Módulo base do Odoo. Fornece funcionalidades essenciais como parceiros, empresas, idiomas e taxas de câmbio.

## Dependencies

- Nenhuma

## Models

### res.partner
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome |
| email | Char | E-mail |
| phone | Char | Telefone |
| address | Text | Endereço |

### res.company
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da empresa |
| currency_id | Many2one | Moeda |

### res.users
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome |
| login | Char | Login |

## Views/Menus

- **Menu**: Configurações
- **Views**: tree, form

## Segurança

- **Grupos**: base.group_user

## Configuração

- Configurações > Empresa

## Notas de Migração

- Módulo base do sistema
