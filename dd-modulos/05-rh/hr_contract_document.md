# hr_contract_document

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_contract_document |
| Nome Amigável | Documentos do Contrato |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr |

## Descrição

Gestão de documentos de contratos.

## Dependencies

- hr_contract

## Models

### hr.contract (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| document_ids | One2many | Documentos |

### hr.contract.document
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do documento |
| contract_id | Many2one | Contrato |
| file | Binary | Arquivo |

## Views/Menus

- Extende views de hr.contract

## Segurança

- Herda permissões do módulo hr_contract

## Configuração

- Configurações > RH > Documentos

## Notas de Migração

- Migrado para v16 pelo OCA
