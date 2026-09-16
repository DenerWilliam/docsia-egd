# l10n_br_fiscal_certificate

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_fiscal_certificate |
| Nome Amigável | Certificado Fiscal |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Gestão de certificados digitais para emissão de documentos fiscais.

## Dependencies

- l10n_br_fiscal

## Models

### l10n_br_fiscal.certificate
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do certificado |
| file | Binary | Arquivo do certificado |
| password | Char | Senha |

## Views/Menus

- **Menu**: Fiscal > Certificados
- **Views**: tree, form

## Segurança

- Herda permissões do módulo l10n_br_fiscal

## Configuração

- Configurações > Fiscal > Certificados

## Notas de Migração

- Migrado para v16 pelo OCA
