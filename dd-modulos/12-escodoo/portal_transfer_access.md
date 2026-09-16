# portal_transfer_access

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | portal_transfer_access |
| Nome Amigável | Acesso Transferência Portal |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/portal-addons |

## Descrição

Acesso a transferências pelo portal.

## Dependencies

- portal
- stock

## Models

### stock.picking (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| portal_access | Boolean | Acesso portal |

## Views/Menus

- Extende views de stock.picking

## Segurança

- Herda permissões dos módulos portal e stock

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
