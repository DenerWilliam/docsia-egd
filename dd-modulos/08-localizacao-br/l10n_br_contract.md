# l10n_br_contract

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_contract |
| Nome Amigável | Contrato Brasileiro |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Integração entre contrato e fiscal brasileiro.

## Dependencies

- l10n_br_fiscal
- contract

## Models

### contract.contract (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| fiscal_document_id | Many2one | Documento fiscal |

## Views/Menus

- Extende views de contract.contract

## Segurança

- Herda permissões dos módulos l10n_br_fiscal e contract

## Configuração

- Configurações > Contratos > Fiscal

## Notas de Migração

- Migrado para v16 pelo OCA
