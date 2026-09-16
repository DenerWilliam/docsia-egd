# analytic

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | analytic |
| Nome Amigável | Contabilidade Analítica |
| Autor | Odoo S.A. |
| Versão | 16.0.1.1 |
| Repositório | https://www.odoo.com/app/invoicing |

## Descrição

Módulo de contabilidade analítica na nova arquitetura do Odoo 16. Substitui o sistema de tags por Analytic Plans e Distribution.

## Dependências

- account

## Modelos Principais

### account.analytic.plan
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do plano |
| description | Text | Descrição |

### account.analytic.account
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da conta |
| plan_id | Many2one | Plano associado |

### account.analytic.distribution.model
| Campo | Tipo | Descrição |
|-------|------|-----------|
| plan_id | Many2one | Plano |
| analytic_distribution | Json | Distribuição |

## Views/Menus

- **Menu**: Contabilidade > Configuração > Planos Analíticos
- **Views**: tree, form

## Segurança

- **Grupos**: account.group_account_manager

## Configuração

- Configurações > Contabilidade > Planos Analíticos

## Notas de Migração

- Odoo 14 → 16: **MUDANÇA CRÍTICA** - Tags removidas, substituídas por Plans e Distribution
