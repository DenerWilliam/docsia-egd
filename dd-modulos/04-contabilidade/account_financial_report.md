# account_financial_report

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_financial_report |
| Nome Amigável | Account Financial Reports |
| Autor | Camptocamp, OCA |
| Versão | 16.0.1.18.0 |
| Repositório | https://github.com/OCA/account-financial-reporting |

## Descrição

Relatórios financeiros avançados: Balanço Patrimonial, DRE, Fluxo de Caixa, Aging de Recebimentos/Pagamentos.

## Dependências

- account
- report_xlsx

## Modelos Principais

### account.financial.report
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do relatório |
| type | Selection | Tipo |
| line_ids | One2many | Linhas do relatório |

## Views/Menus

- **Menu**: Contabilidade > Relatórios > Financeiros
- **Views**: tree, form

## Segurança

- **Grupos**: account.group_account_manager

## Configuração

- Configurações > Contabilidade > Relatórios

## Notas de Migração

- Migrado para v16 pelo OCA
