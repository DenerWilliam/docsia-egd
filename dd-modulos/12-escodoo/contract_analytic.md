# contract_analytic

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | contract_analytic |
| Nome Amigável | Contratos Analíticos |
| Autor | Escodoo |
| Versão | 16.0.1.1.1 |
| Repositório | https://github.com/Escodoo/contract |

## Descrição

Integração entre contratos e contabilidade analítica.

## Dependencies

- contract
- analytic

## Models

### contract.contract (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| analytic_account_id | Many2one | Centro de custo |

## Views/Menus

- Extende views de contract.contract

## Segurança

- Herda permissões dos módulos contract e analytic

## Configuração

- Configurações > Contratos > Analítico

## Notas de Migração

- Customização Escodoo
