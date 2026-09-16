# escodoo_magento2_connector

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | escodoo_magento2_connector |
| Nome Amigável | Conector Magento2 |
| Autor | Escodoo |
| Versão | 16.0.1.1.1 |
| Repositório | https://github.com/Escodoo/magento2-connector |

## Descrição

Conector entre Odoo e Magento2.

## Dependencies

- base
- queue_job

## Models

### magento2.backend
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome |
| url | Char | URL |
| api_key | Char | Chave API |

### magento2.storeview
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome |
| backend_id | Many2one | Backend |

## Views/Menus

- **Menu**: Magento2 > Configuração
- **Views**: tree, form

## Segurança

- **Grupos**: magento2.group_magento2_manager

## Configuração

- Configurações > Magento2

## Notas de Migração

- Customização Escodoo
