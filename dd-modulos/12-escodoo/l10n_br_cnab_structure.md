# l10n_br_cnab_structure

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_cnab_structure |
| Nome Amigável | Estrutura CNAB |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/l10n-brazil |

## Descrição

Estrutura para arquivos CNAB (Comunicação Bancária).

## Dependencies

- l10n_br_base

## Models

### l10n_br_cnab.structure
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da estrutura |
| type | Selection | Tipo (remessa/retorno) |
| line_ids | One2many | Linhas da estrutura |

## Views/Menus

- **Menu**: Fiscal > CNAB
- **Views**: tree, form

## Segurança

- Herda permissões do módulo l10n_br_base

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
