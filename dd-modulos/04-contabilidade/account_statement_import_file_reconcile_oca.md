# account_statement_import_file_reconcile_oca

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_statement_import_file_reconcile_oca |
| Nome Amigável | Import Statement Files and Go Direct to Reconciliation |
| Autor | Akretion, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/bank-statement-import |

## Descrição

Importa extratos e vai direto para conciliação.

## DependENCIES

- account_statement_import_file
- account_reconcile_oca

## Models

### account.statement.import
| Campo | Tipo | Descrição |
|-------|------|-----------|
| - | - | Importação com conciliação direta |

## Views/Menus

- Extende wizard de importação

## Segurança

- Herda permissões do módulo account_statement_import_file

## Configuração

- Sem configuração adicional

## Notas de Migração

- Migrado para v16 pelo OCA
