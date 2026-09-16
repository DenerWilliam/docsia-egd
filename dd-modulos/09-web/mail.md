# mail

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | mail |
| Nome Amigável | Mail |
| Autor | Odoo S.A. |
| Versão | 16.0.1.4 |
| Repositório | https://www.odoo.com/app/odoo |

## Descrição

Módulo de mensagens e discussão. Fornece Chatter, notificações e discussões.

## Dependencies

- base
- bus

## Models

### mail.message
| Campo | Tipo | Descrição |
|-------|------|-----------|
| body | Html | Conteúdo |
| author_id | Many2one | Autor |
| model | Char | Modelo |
| res_id | Integer | ID do registro |

### mail.thread
| Campo | Tipo | Descrição |
|-------|------|-----------|
| message_ids | One2many | Mensagens |
| message_follower_ids | One2many | Seguidores |

## Views/Menus

- **Menu**: Discuss
- **Views**: form

## Segurança

- **Grupos**: base.group_user

## Configuração

- Configurações > Discuss

## Notas de Migração

- Módulo base do sistema
