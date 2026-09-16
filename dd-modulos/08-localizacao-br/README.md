# Data Dictionary - Localização Brasileira

## Módulos

| Módulo | Nome | Autor | Versão |
|--------|------|-------|--------|
| l10n_br_fiscal | Módulo fiscal brasileiro | OCA | 16.0.22.3.1 |
| l10n_br_account | Invoicing and accounting entries for Brazil | OCA | 16.0.16.0.3 |
| l10n_br_nfe | NF-e | OCA | 16.0.13.0.3 |
| l10n_br_base | Brazilian Localization Base | OCA | 16.0.6.5.3 |
| l10n_br_sale | Brazilian Localization Sale | OCA | 16.0.8.1.3 |
| l10n_br_purchase | Brazilian Localization Purchase | OCA | 16.0.6.0.5 |
| l10n_br_stock | Brazilian Localization Warehouse | OCA | 16.0.3.0.1 |
| l10n_br_stock_account | Brazilian Localization WMS Accounting | OCA | 16.0.4.1.2 |
| l10n_br_cnab_structure | CNAB Structure | OCA | 16.0.3.2.1 |
| l10n_br_cnpj_search | Brazilian Localization CNPJ Search | OCA | 16.0.3.3.3 |
| l10n_br_coa | Base dos Planos de Contas | OCA | 16.0.2.7.0 |
| l10n_br_coa_generic | Plano de Contas para empresas do Regime normal | OCA | 16.0.2.2.1 |
| l10n_br_contract | Brazilian Localization Contract | OCA | 16.0.7.0.3 |
| l10n_br_currency_rate_update | Currency Rate Update BR | OCA | 16.0.1.1.2 |
| l10n_br_delivery | delivery module Brazilian Localization | OCA | 16.0.4.0.0 |
| l10n_br_delivery_nfe | Brazilian Localization Delivery NFe | OCA | 16.0.2.0.0 |
| l10n_br_fiscal_certificate | A1 fiscal certificate management for Brazil | OCA | 16.0.1.2.1 |
| l10n_br_fiscal_dfe | L10n BR Fiscal Dfe | OCA | 16.0.1.3.0 |
| l10n_br_fiscal_edi | Common EDI fiscal features | OCA | 16.0.1.9.1 |
| l10n_br_hr | Brazilian Localization HR | OCA | 16.0.4.4.0 |
| l10n_br_hr_expense_invoice | Brazilian Localization Expense Invoice | OCA | 16.0.1.0.1 |
| l10n_br_ie_search | Brazilian Localization IE Search | OCA | 16.0.2.2.0 |
| l10n_br_mis_report | Relatórios contábeis brasileiros: Balanço Patrimonial e DRE | OCA | 16.0.1.0.0 |
| l10n_br_nfse | NFS-e | OCA | 16.0.7.2.1 |
| l10n_br_nfse_focus | NFS-e (FocusNFE) | OCA | 16.0.2.4.1 |
| l10n_br_portal | L10n Br Portal | OCA | 16.0.2.1.2 |
| l10n_br_purchase_request | L10n Br Purchase Request | Escodoo | 16.0.2.0.0 |
| l10n_br_purchase_requisition | Brazilian Localization Purchase Requisition | Escodoo | 16.0.1.0.0 |
| l10n_br_purchase_stock | Brazilian Localization Purchase Stock | OCA | 16.0.2.0.1 |
| l10n_br_resource | L10n Br Resource | OCA | 16.0.1.1.0 |
| l10n_br_sale_blanket_order | Brazilian Localization Sale Blanket Order | Escodoo | 16.0.2.4.0 |
| l10n_br_sale_stock | Brazilian Localization Sales and Warehouse | OCA | 16.0.3.0.2 |
| l10n_br_stock_account_report | P7 Stock Valuation Report | OCA | 16.0.2.1.0 |
| l10n_br_trade_import | Import Declaration Management | Escodoo | 16.0.1.0.0 |
| l10n_br_zip | Brazilian Localisation ZIP Codes | OCA | 16.0.2.7.0 |
| l10n_br_account_due_list | Brazilian Account Due List | OCA | 16.0.2.1.0 |
| l10n_br_account_fleet | Brazilian Localization Account Fleet | OCA | 16.0.1.0.0 |
| l10n_br_account_nfe | Account NFe/NFC-e Integration | OCA | 16.0.9.0.1 |
| l10n_br_account_payment_order | Brazilian Payment Order | OCA | 16.0.9.1.1 |
| l10n_br_escodoo_development_mode | L10n Br Escodoo Development Mode | Escodoo | 16.0.1.0.0 |
| l10n_br_fiscal_document_cancel_group | L10n Br Fiscal Document Cancel Group | Escodoo | 16.0.1.0.0 |
| l10n_br_mis_builder_cash_flow_sale | Brazilian Localization MIS Builder Cash Flow Forecast Sale | Escodoo | 16.0.1.0.0 |

## Dependências Principais

- `l10n_br_fiscal` → `account`, `product`
- `l10n_br_account` → `l10n_br_fiscal`, `account`
- `l10n_br_nfe` → `l10n_br_fiscal`, `l10n_br_account`

## Modelos Principais

### l10n_br_fiscal.document
- Documentos fiscais brasileiros
- NF-e, NFS-e, CT-e

### l10n_br_fiscal.operation
- Operações fiscais
- Definição de impostos

### l10n_br_fiscal.tax
- Impostos brasileiros
- ICMS, IPI, PIS, COFINS

## Notas

- Módulo `l10n_br_fiscal` é a base para todos os outros módulos de localização brasileira
- Integração com módulos de contabilidade, vendas e compras
- Mantido ativamente pela comunidade OCA
