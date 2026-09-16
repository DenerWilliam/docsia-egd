# contract_sale

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | contract_sale |
| Nome Amigável | Contratos Vendas |
| Autor | Escodoo |
| Versão | 16.0.2.1.1 |
| Repositório | https://github.com/Escodoo/contract |

## Descrição

Integração entre contratos e vendas.

## Dependencies

- contract
- sale

## Models

### contract.contract (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| sale_order_id | Many2one | Pedido de venda |

### sale.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| contract_id | Many2one | Contrato |

## Views/Menus

- Extende views de contract.contract e sale.order

## Segurança

- Herda permissões dos módulos contract e sale

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
