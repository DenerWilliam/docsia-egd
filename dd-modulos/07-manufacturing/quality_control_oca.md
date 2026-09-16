# quality_control_oca

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | quality_control_oca |
| Nome Amigável | Controle de Qualidade |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.1.0 |
| Repositório | https://github.com/OCA/manufacture |

## Descrição

Módulo base de controle de qualidade.

## Dependencies

- stock

## Models

### qc.trigger
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do gatilho |

### qc.inspection
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Número da inspeção |
| state | Selection | Status |

### qc.test
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do teste |

## Views/Menus

- **Menu**: Qualidade > Inspeções
- **Views**: tree, form

## Segurança

- **Grupos**: quality.group_quality_manager

## Configuração

- Configurações > Qualidade

## Notas de Migração

- Migrado para v16 pelo OCA
