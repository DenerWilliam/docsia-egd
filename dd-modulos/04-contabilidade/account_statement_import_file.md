# account_statement_import_file

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_statement_import_file |
| Nome Amigável | Import Statement Files |
| Autor | Odoo SA, Akretion, OCA |
| Versão | 16.0.1.1.3 |
| Repositório | https://github.com/OCA/bank-statement-import |

## Descrição

Permite importar extratos bancários a partir de arquivos (OFX, QIF, CSV, etc.).

## DependENCIES

- account
- account_statement_import_base

## Modelos Principais

### account.statement.import
| Campo | Tipo | Descrição |
|-------|------|-----------|
| - | - | Wizard de importação |

## Views/Menus

- **Menu**: Contabilidade > Extratos Bancários > Importar
- **Views**: wizard de importação

## Segurança

- Herda permissões do módulo account

## Configuração

- Configurações > Contabilidade > Extratos Bancários

## Notas de Migração

- Migrado para v16 pelo OCA
