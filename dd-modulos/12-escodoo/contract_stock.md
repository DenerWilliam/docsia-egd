# contract_stock

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | contract_stock |
| Nome Amigável | Contratos Estoque |
| Autor | Escodoo |
| Versão | 16.0.1.2.2 |
| Repositório | https://github.com/Escodoo/contract |

## Descrição

Integração entre contratos e estoque.

## Dependencies

- contract
- stock

## Models

### contract.contract (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| picking_ids | One2many | Transferências |

## Views/Menus

- Extende views de contract.contract

## Segurança

- Herda permissões dos módulos contract e stock

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
