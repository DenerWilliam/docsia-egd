# account_statement_import_ofx

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_statement_import_ofx |
| Nome Amigável | Import OFX Bank Statement |
| Autor | Odoo SA, Akretion, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/bank-statement-import |

## Descrição

Permite importar extratos bancários no formato OFX.

## Dependências

- account_statement_import_file

## Modelos Principais

### account.statement.import
| Campo | Tipo | Descrição |
|-------|------|-----------|
| - | - | Suporte a formato OFX |

## Views/Menus

- Extende wizard de importação

## Segurança

- Herda permissões do módulo account_statement_import_file

## Configuração

- Sem configuração adicional

## Notas de Migração

- Migrado para v16 pelo OCA
