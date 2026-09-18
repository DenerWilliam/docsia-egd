# l10n_br_fiscal - Módulo Fiscal Brasileiro

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_fiscal |
| Nome Amigável | Módulo Fiscal Brasileiro |
| Autor | Akretion, OCA |
| Versão | 16.0.22.3.1 |
| Repositório | https://github.com/OCA/l10n-brazil |
| Licença | LGPL-3 |

## Descrição

Módulo base para a localização fiscal brasileira. Fornece a estrutura para documentos fiscais, operações fiscais, impostos brasileiros e integração com NF-e.

## Dependências

- `account`
- `product`
- `uom`

## Modelos Principais

### l10n_br_fiscal.document
- Documentos fiscais brasileiros
- NF-e, NFS-e, CT-e

#### Campos Principais
| Campo | Tipo | Descrição |
|-------|------|-----------|
| document_type | Selection | Tipo de documento fiscal |
| document_number | Char | Número do documento |
| partner_id | Many2one | Parceiro |
| company_id | Many2one | Empresa |
| document_date | Date | Data do documento |
| document_state | Selection | Estado do documento |

### l10n_br_fiscal.operation
- Operações fiscais
- Definição de impostos

#### Campos Principais
| Campo | Tipo | Descrição |
|-------|------|-----------|
| code | Char | Código da operação |
| name | Char | Nome da operação |
| operation_type | Selection | Tipo de operação |
| tax_ids | One2many | Impostos da operação |

### l10n_br_fiscal.tax
- Impostos brasileiros
- ICMS, IPI, PIS, COFINS

#### Campos Principais
| Campo | Tipo | Descrição |
|-------|------|-----------|
| tax_type | Selection | Tipo de imposto |
| tax_code | Char | Código do imposto |
| name | Char | Nome do imposto |
| percent | Float | Alíquota percentual |
| value | Float | Valor fixo |

## Views/Menus

- **Fiscal**: Menu principal do módulo fiscal
- **Documentos**: Gestão de documentos fiscais
- **Operações**: Configuração de operações fiscais
- **Impostos**: Configuração de impostos

## Segurança

- Grupos de acesso: `l10n_br_fiscal.group_user`, `l10n_br_fiscal.group_manager`
- Permissões por modelo configuradas em `ir.model.access.csv`

## Configuração

1. Instalar o módulo `l10n_br_fiscal`
2. Configurar operações fiscais
3. Configurar impostos brasileiros
4. Configurar tipos de documento fiscal

## Notas de Migração

- v14 → v15: Compatível
- v15 → v16: Compatível
