# purchase_request

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_request |
| Nome Amigável | Purchase Request |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.2.4.3 |
| Repositório | https://github.com/OCA/purchase-workflow |

## Descrição

Permite criar requisições de compra antes de gerar ordens de compra. Útil para processos de aprovação.

## Dependências

- purchase
- base_tier_validation

## Modelos Principais

### purchase.request
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Número da requisição |
| requested_by | Many2one | Solicitante |
| state | Selection | Status |
| line_ids | One2many | Linhas da requisição |
| assigned_to | Many2one | Responsável |

### purchase.request.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| request_id | Many2one | Requisição |
| product_id | Many2one | Produto |
| product_qty | Float | Quantidade solicitada |

## Views/Menus

- **Menu**: Compras > Requisições
- **Views**: tree, form

## Segurança

- **Grupos**: purchase_request.group_purchase_request_manager

## Configuração

- Configurações > Compras > Requisições

## Notas de Migração

- Migrado para v16 pelo OCA
- Novo widget de Analytic Distribution
