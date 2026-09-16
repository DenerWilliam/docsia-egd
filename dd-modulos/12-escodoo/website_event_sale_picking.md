# website_event_sale_picking

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | website_event_sale_picking |
| Nome Amigável | Venda Evento Website Picking |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/website-addons |

## Descrição

Integração entre venda de evento website e picking.

## Dependencies

- website_event_sale
- stock

## Models

### event.registration (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| picking_id | Many2one | Transferência |

## Views/Menus

- Extende views de event.registration

## Segurança

- Herda permissões dos módulos website_event_sale e stock

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
