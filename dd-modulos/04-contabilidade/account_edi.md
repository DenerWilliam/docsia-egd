# account_edi

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_edi |
| Nome Amigável | Importar/Exportar faturas a partir de XML/PDF |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/invoicing |

## Descrição

Permite importar e exportar faturas em formatos eletrônicos (EDI).

## Dependências

- account

## Modelos Principais

### account.edi.format
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do formato |
| code | Char | Código |

## Views/Menus

- **Menu**: Contabilidade > Configuração > Formatos EDI
- **Views**: tree, form

## Segurança

- **Grupos**: account.group_account_manager

## Configuração

- Configurações > Contabilidade > EDI

## Notas de Migração

- Módulo padrão Odoo
