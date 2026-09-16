# sales_team

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sales_team |
| Nome Amigável | Equipas de Vendas |
| Autor | Odoo S.A. |
| Versão | 16.0.1.1 |
| Repositório | https://www.odoo.com/app/crm |

## Descrição

Gestão de equipes de vendas. Permite criar e gerenciar equipes com vendedores.

## Dependências

- base
- mail

## Modelos Principais

### crm.team
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome da equipe |
| user_id | Many2one | Responsável |
| member_ids | Many2many | Membros |
| invoiced_target | Monetário | Meta de faturamento |

## Views/Menus

- **Menu**: Vendas > Configuração > Equipes
- **Views**: tree, form, kanban

## Segurança

- **Grupos**: sales_team.group_sale_salesman_all_leads

## Configuração

- Configurações > Vendas > Equipes

## Notas de Migração

- Módulo padrão Odoo
