# mis_builder_budget

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | mis_builder_budget |
| Nome Amigável | MIS Builder Budget |
| Autor | ACSONE SA/NV, OCA |
| Versão | 16.0.2.1.4 |
| Repositório | https://github.com/OCA/mis-builder |

## Descrição

Gestão de orçamentos usando MIS Builder.

## Dependencies

- mis_builder

## Models

### mis.budget
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do orçamento |
| line_ids | One2many | Linhas do orçamento |

### mis.budget.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| budget_id | Many2one | Orçamento |
| amount | Monetário | Valor |

## Views/Menus

- **Menu**: Relatórios > MIS > Orçamentos
- **Views**: tree, form

## Segurança

- Herda permissões do módulo mis_builder

## Configuração

- Sem configuração adicional

## Notas de Migração

- Migrado para v16 pelo OCA
