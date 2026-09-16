# Data Dictionary - Contabilidade

## Módulos

| Módulo | Nome | Autor | Versão |
|--------|------|-------|--------|
| account | Faturação | Odoo S.A. | 16.0.1.2 |
| account_financial_report | Account Financial Reports | OCA | 16.0.1.18.0 |
| account_analytic_required | Account Analytic Required | OCA | 16.0.2.0.1 |
| account_analytic_tag | Account Analytic Tag | OCA | 16.0.1.1.2 |
| account_due_list | Payments Due list | OCA | 16.0.1.2.1 |
| account_due_list_payment_mode | Payment Due List Payment Mode | OCA | 16.0.1.0.0 |
| account_edi | Importar/Exportar faturas a partir de XML/PDF | Odoo S.A. | 16.0.1.0 |
| account_edi_ubl_cii | Import/Export electronic invoices with UBL/CII | Odoo S.A. | 16.0.1.0 |
| account_fleet | Ponte de contabilidade/frota | Odoo S.A. | 16.0.1.0 |
| account_lock_date_update | Account Lock Date Update | OCA | 16.0.1.0.1 |
| account_lock_to_date | Account Lock To Date | OCA | 16.0.1.0.0 |
| account_move_csv_import | Account Move Import | Akretion | 16.0.1.0.0 |
| account_move_line_cash_basis_report | Account Move Line Cash Basis Report | Escodoo | 16.0.1.0.0 |
| account_move_name_sequence | Account Move Number Sequence | OCA | 16.0.1.1.12 |
| account_move_template | Account Move Template | OCA | 16.0.1.0.3 |
| account_move_visible_date_maturity | Account Move Visible Date Maturity | Escodoo | 16.0.1.0.0 |
| account_payment | Payment - Account | Odoo S.A. | 16.0.2.0 |
| account_payment_mode | Account Payment Mode | OCA | 16.0.2.0.0 |
| account_payment_order | Account Payment Order | OCA | 16.0.1.14.0 |
| account_payment_partner | Account Payment Partner | OCA | 16.0.1.2.9 |
| account_payment_purchase | Account Payment Purchase | OCA | 16.0.2.0.6 |
| account_payment_purchase_stock | Account Payment Purchase Stock | OCA | 16.0.1.0.1 |
| account_payment_sale | Account Payment Sale | OCA | 16.0.1.0.7 |
| account_qr_code_sepa | account_qr_code_sepa | Odoo S.A. | 16.0.0.1 |
| account_reconcile_oca | account_reconciliation_widget | OCA | 16.0.2.5.1 |
| account_statement_base | Account Bank Statement Reopen Skip Undo Reconciliation | OCA | 16.0.1.15.0 |
| account_statement_import_base | Base module for Bank Statement Import | OCA | 16.0.1.0.1 |
| account_statement_import_file | Import Statement Files | OCA | 16.0.1.1.3 |
| account_statement_import_file_reconcile_oca | Import Statement Files and Go Direct to Reconciliation | OCA | 16.0.1.0.0 |
| account_statement_import_ofx | Import OFX Bank Statement | OCA | 16.0.1.0.0 |
| account_statement_import_ofx_by_acctid | Import OFX Bank Statement by ACCTID | OCA | 16.0.1.0.0 |
| account_usability | Account - Missing Menus & Saxon Accounting | OCA | 16.0.1.1.1 |

## Dependências Principais

- `account` → `base`, `product`
- `account_financial_report` → `account`
- `account_payment_order` → `account_payment_mode`

## Modelos Principais

### account.move
- Campo principal de lançamentos contábeis
- Integração com vendas e compras

### account.move.line
- Linhas de lançamento
- Cálculo automático de impostos

### account.account
- Plano de contas
- Configuração de tipos de conta

## Notas

- Módulo `account` é a base para todos os outros módulos de contabilidade
- Integração com módulos de vendas e compras
