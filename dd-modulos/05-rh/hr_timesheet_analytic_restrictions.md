# hr_timesheet_analytic_restrictions

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_timesheet_analytic_restrictions |
| Nome Amigável | Restrições Analíticas na Folha de Ponto |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/hr-addons |

## Descrição

Adiciona restrições de centros de custo na folha de ponto.

## Dependencies

- hr_timesheet
- analytic_restrictions

## Models

### account.analytic.line (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| - | - | Restrições de centro de custo |

## Views/Menus

- Extende views de account.analytic.line

## Segurança

- Herda permissões dos módulos hr_timesheet e analytic_restrictions

## Configuração

- Configurações > RH > Restrições Analíticas

## Notas de Migração

- Customização Escodoo
