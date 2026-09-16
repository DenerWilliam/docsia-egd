# mis_builder_fiscal_year

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | mis_builder_fiscal_year |
| Nome Amigável | MIS Builder Fiscal Year |
| Autor | ACSONE SA/NV, OCA |
| Versão | 16.0.1.1.3 |
| Repositório | https://github.com/OCA/mis-builder |

## Descrição

Períodos fiscais para MIS Builder.

## Dependencies

- mis_builder

## Models

### mis.fiscalyear
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome |
| date_start | Date | Data início |
| date_end | Date | Data fim |

## Views/Menus

- **Menu**: Relatórios > MIS > Períodos Fiscais
- **Views**: tree, form

## Segurança

- Herda permissões do módulo mis_builder

## Configuração

- Sem configuração adicional

## Notas de Migração

- Migrado para v16 pelo OCA
