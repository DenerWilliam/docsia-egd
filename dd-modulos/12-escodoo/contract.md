# contract

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | contract |
| Nome Amigável | Contratos |
| Autor | Escodoo |
| Versão | 16.0.2.2.0 |
| Repositório | https://github.com/Escodoo/contract |

## Descrição

Gestão de contratos recorrentes.

## Dependencies

- account
- base

## Models

### contract.contract
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do contrato |
| partner_id | Many2one | Parceiro |
| state | Selection | Status |
| line_ids | One2many | Linhas do contrato |

### contract.template
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do template |
| line_ids | One2many | Linhas do template |

## Views/Menus

- **Menu**: Contratos > Contratos
- **Views**: tree, form, kanban

## Segurança

- **Grupos**: contract.group_contract_manager

## Configuração

- Configurações > Contratos

## Notas de Migração

- Migrado para v16
