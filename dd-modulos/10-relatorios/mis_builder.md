# mis_builder

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | mis_builder |
| Nome Amigável | MIS Builder |
| Autor | ACSONE SA/NV, OCA |
| Versão | 16.0.3.7.2 |
| Repositório | https://github.com/OCA/mis-builder |

## Descrição

Framework para criação de relatórios financeiros. Permite criar KPIs, linhas de relatório e exportar para Excel/PDF.

## Dependencies

- account
- analytic

## Models

### mis.report
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do relatório |
| line_ids | One2many | Linhas do relatório |
| kpi_ids | One2many | KPIs |

### mis.report.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da linha |
| expression | Char | Expressão |
| report_id | Many2one | Relatório |

## Views/Menus

- **Menu**: Relatórios > MIS
- **Views**: tree, form

## Segurança

- **Grupos**: mis_builder.group_mis_viewer

## Configuração

- Configurações > Relatórios > MIS

## Notas de Migração

- Migrado para v16 pelo OCA
