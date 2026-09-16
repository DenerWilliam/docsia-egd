# mrp_product_expiry

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | mrp_product_expiry |
| Nome Amigável | Validade do Produto |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/manufacturing |

## Descrição

Gestão de validade de produtos manufaturados.

## Dependencies

- mrp
- stock_account

## Models

### mrp.production (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| use_expiration_date | Boolean | Usar data de validade |
| expiration_date | Datetime | Data de validade |

## Views/Menus

- Extende views de mrp.production

## Segurança

- Herda permissões do módulo mrp

## Configuração

- Configurações > Manufatura > Validade

## Notas de Migração

- Módulo padrão Odoo
