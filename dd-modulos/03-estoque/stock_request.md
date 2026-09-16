# stock_request

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_request |
| Nome Amigável | Stock Request |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.1.3 |
| Repositório | https://github.com/OCA/stock-logistics-request |

## Descrição

Permite criar requisições de estoque antes de gerar transferências. Útil para processos de aprovação.

## Dependências

- stock

## Modelos Principais

### stock.request
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Número da requisição |
| requested_by | Many2one | Solicitante |
| state | Selection | Status |
| line_ids | One2many | Linhas da requisição |

### stock.request.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| request_id | Many2one | Requisição |
| product_id | Many2one | Produto |
| product_qty | Float | Quantidade solicitada |

## Views/Menus

- **Menu**: Estoque > Requisições
- **Views**: tree, form

## Segurança

- **Grupos**: stock_request.group_stock_request_manager

## Configuração

- Configurações > Estoque > Requisições

## Notas de Migração

- Migrado para v16 pelo OCA
