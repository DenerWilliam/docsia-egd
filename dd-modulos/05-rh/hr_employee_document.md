# hr_employee_document

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_employee_document |
| Nome Amigável | Documentos do Funcionário |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr |

## Descrição

Gestão de documentos de funcionários.

## Dependencies

- hr

## Models

### hr.employee (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| document_ids | One2many | Documentos |

### hr.employee.document
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do documento |
| employee_id | Many2one | Funcionário |
| file | Binary | Arquivo |

## Views/Menus

- Extende views de hr.employee

## Segurança

- Herda permissões do módulo hr

## Configuração

- Configurações > RH > Documentos

## Notas de Migração

- Migrado para v16 pelo OCA
